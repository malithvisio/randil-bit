import { Schema, model, models, Model } from "mongoose";

// Define an interface for the document
interface IBooking {
  packageId: string;
  packageTitle: string;
  packageDuration?: string;
  packageDestination?: string;
  tourPackage: string;
  arrivalDate: Date;
  departureDate: Date;
  firstName: string;
  lastName: string;
  contactNumber: string;
  email: string;
  country: string;
  adults: number;
  children?: number;
  message?: string;
  userId: Schema.Types.ObjectId;
  createdAt: Date;
  status: "pending" | "processing" | "confirmed" | "cancelled";
}

const bookingSchema = new Schema<IBooking>({
  packageId: {
    type: String,
    required: true,
  },
  packageTitle: {
    type: String,
    required: true,
  },
  packageDuration: String,
  packageDestination: String,
  tourPackage: {
    type: String,
    required: true,
  },
  arrivalDate: {
    type: Date,
    required: true,
  },
  departureDate: {
    type: Date,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  contactNumber: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  adults: {
    type: Number,
    required: true,
    min: 1,
  },
  children: {
    type: Number,
    default: 0,
  },
  message: String,
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: String,
    enum: ["pending", "processing", "confirmed", "cancelled"],
    default: "pending",
  },
});

// Delete the model if it exists to prevent the "Cannot overwrite" error
if (models.Booking) {
  delete models.Booking;
}

const Booking = model<IBooking>("Booking", bookingSchema);

export default Booking;
