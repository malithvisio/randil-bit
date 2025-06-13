import { User } from "@/models";
import { connectToDatabase } from "@/libs/mongoose";
import bcrypt from "bcrypt";
import NextAuth, { AuthOptions } from "next-auth";
import CredentialProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "@/libs/mongodb"; // You'll need to create this file

// Connect to database when this file is imported
connectToDatabase();

// Add a connection retry mechanism for auth
async function connectWithRetry(retries = 3, delay = 1000) {
  let lastError;
  for (let i = 0; i < retries; i++) {
    try {
      await connectToDatabase();
      console.log(`Auth DB Connected successfully on attempt ${i + 1}`);
      return true;
    } catch (error) {
      lastError = error;
      console.warn(
        `Auth DB Connection attempt ${i + 1} failed: ${error.message}`
      );
      if (i < retries - 1) {
        console.log(`Retrying in ${delay}ms...`);
        await new Promise((resolve) => setTimeout(resolve, delay));
      }
    }
  }
  throw lastError;
}

export const authOptions: AuthOptions = {
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    CredentialProvider({
      name: "credentials",
      credentials: {
        email: {
          label: "email",
          type: "text",
        },
        password: {
          label: "password",
          type: "password",
        },
      },
      async authorize(credentials, req) {
        if (!credentials?.email || !credentials.password) {
          console.error("Login failed: Missing email or password");
          throw new Error("Invalid email or password");
        }

        try {
          // Make sure we're connected to the database
          await connectWithRetry();
          console.log("Auth DB connected for login attempt");

          const user = await User.findOne({ email: credentials.email });

          if (!user || !user.hashedPassword) {
            console.error("Login failed: User not found or no password");
            throw new Error("Invalid email or password");
          }

          console.log("Found user, comparing passwords");
          const isCorrectPassword = await bcrypt.compare(
            credentials.password,
            user.hashedPassword
          );

          if (!isCorrectPassword) {
            console.error("Login failed: Password mismatch");
            throw new Error("Invalid email or password");
          }

          console.log("Login successful for:", user.email);

          // Return a plain object, not a Mongoose document, and cast _id to string
          return {
            id: (user._id as any).toString(),
            name: user.name,
            email: user.email,
            image: user.image,
            role: user.role,
            _id: (user._id as any).toString(),
          };
        } catch (error) {
          console.error("Login error in NextAuth authorize:", error);
          throw new Error(error.message || "Authentication failed");
        }
      },
    }),
  ],
  pages: {
    signIn: "login",
  },
  debug: process.env.NODE_ENV === "development",
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        // Pass user properties to the token
        token.id = user._id?.toString() || user.id;
        token._id = user._id?.toString() || user.id;
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }) {
      // Pass token properties to the session
      if (token && session.user) {
        session.user.id = token.id as string;
        session.user._id = token._id as string;
        session.user.role = token.role as string;
      }
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};

export default NextAuth(authOptions);
