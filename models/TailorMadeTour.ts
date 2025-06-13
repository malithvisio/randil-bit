import mongoose, { Schema, Document } from "mongoose";

export interface ITailorMadeTour extends Document {
  name: string;
  email: string;
  phone: string;
  destination: string;
  arrivalDate: Date;
  departureDate: Date;
  adults: number;
  children: number;
  hotelPreference: string;
  additionalRequests: string;
  budget: string;
  status: string;
  createdAt: Date;
  updatedAt: Date;
}

const TailorMadeTourSchema = new Schema<ITailorMadeTour>(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
    },
    phone: {
      type: String,
      required: [true, "Phone number is required"],
    },
    destination: {
      type: String,
      required: [true, "Destination is required"],
    },
    arrivalDate: {
      type: Date,
      required: [true, "Arrival date is required"],
    },
    departureDate: {
      type: Date,
      required: [true, "Departure date is required"],
    },
    adults: {
      type: Number,
      required: [true, "Number of adults is required"],
      min: 1,
    },
    children: {
      type: Number,
      default: 0,
    },
    hotelPreference: {
      type: String,
      required: [true, "Hotel preference is required"],
    },
    additionalRequests: {
      type: String,
      default: "",
    },
    budget: {
      type: String,
      required: [true, "Budget is required"],
    },
    status: {
      type: String,
      enum: ["pending", "processing", "completed", "cancelled"],
      default: "pending",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.TailorMadeTour ||
  mongoose.model<ITailorMadeTour>("TailorMadeTour", TailorMadeTourSchema);
