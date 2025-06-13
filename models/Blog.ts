import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  image: {
    type: String, // We'll store the image URL
    required: false,
    default: "/assets/images/blog/default.jpg",
  },
  tags: [
    {
      type: String,
    },
  ],
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

// Delete the model if it exists to prevent the "Cannot overwrite" error
if (mongoose.models.Blog) {
  delete mongoose.models.Blog;
}

const Blog = mongoose.model("Blog", blogSchema);

export default Blog;
