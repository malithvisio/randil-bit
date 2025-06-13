import mongoose, { Schema, Document, Model } from "mongoose";

export interface ITourRequest {
  userId: string;
  userEmail: string;
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

const TourRequestSchema = new Schema<ITourRequest>(
  {
    userId: {
      type: String,
      required: false, // Making it optional for guest submissions
    },
    userEmail: {
      type: String,
      required: false, // Making it optional for guest submissions
    },
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

interface TourRequestModel extends Model<ITourRequest> {}

const TourRequest = (mongoose.models.TourRequest ||
  mongoose.model<ITourRequest, TourRequestModel>(
    "TourRequest",
    TourRequestSchema
  )) as TourRequestModel;

export default TourRequest;
