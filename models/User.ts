import mongoose, { Schema, Model, Document } from "mongoose";
import { hash } from "bcrypt";

export interface IUser {
  name: string;
  email: string;
  phone?: string;
  image?: string;
  hashedPassword?: string;
  role: string;
  emailVerified?: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface IUserDocument extends IUser, Document {}

const UserSchema = new Schema<IUserDocument>(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    phone: {
      type: String,
    },
    image: {
      type: String,
    },
    hashedPassword: {
      type: String,
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
    emailVerified: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

// Only hash the password if it has been modified (or is new)
UserSchema.pre("save", async function (next) {
  if (!this.isModified("hashedPassword")) return next();

  try {
    if (this.hashedPassword) {
      this.hashedPassword = await hash(this.hashedPassword, 10);
    }
    next();
  } catch (error: any) {
    next(error);
  }
});

// Delete the model if it exists to prevent the "Cannot overwrite" error
if (mongoose.models.User) {
  delete mongoose.models.User;
}

export const User = mongoose.model<IUserDocument>("User", UserSchema);

export default User;
