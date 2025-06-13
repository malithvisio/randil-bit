import { DefaultSession, DefaultUser } from "next-auth";
import { Types } from "mongoose";

declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: string;
      _id: string;
      role: string;
      name?: string | null;
      email?: string | null;
      image?: string | null;
    };
  }

  interface User {
    id: string;
    _id: Types.ObjectId;
    role: string;
    name?: string | null;
    email?: string | null;
    image?: string | null;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    role: string;
  }
}
