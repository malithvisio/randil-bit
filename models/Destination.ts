import mongoose from "mongoose";

const destinationSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    descriptionTop: {
      type: String,
      required: [true, "Top description is required"],
    },
    descriptionBottom: {
      type: String,
      required: false,
    },
    image: {
      type: String,
      required: false,
      default: "/assets/images/destinations/default.jpg",
    },
    secondaryImage: {
      type: String,
      required: false,
      default: "/assets/images/destinations/default.jpg",
    },
    status: {
      type: String,
      enum: ["Active", "Inactive"],
      default: "Active",
    },
    order: {
      type: Number,
      default: 0,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

// Delete the model if it exists to prevent the "Cannot overwrite" error
if (mongoose.models.Destination) {
  delete mongoose.models.Destination;
}

const Destination = mongoose.model("Destination", destinationSchema);

export default Destination;
