"use client";

import { useEffect, useState } from "react";
import LayoutAdmin from "@/components/layout/LayoutAdmin";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import "react-quill/dist/quill.snow.css"; // Import Quill styles
import { storage } from "@/libs/firebase"; // Import Firebase storage
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage"; // Import Firebase storage functions
import dynamic from "next/dynamic";
import { registerQuillModules } from "@/app/add-blog/quillConfig"; // Import Quill config

// Dynamic import of RichTextEditor
const RichTextEditor = dynamic(
  () => import("../../../add-blog/components/BlogEditor"),
  {
    ssr: false,
    loading: () => <p>Loading Editor...</p>,
  }
);

export default function EditBlog({ params }) {
  const router = useRouter();
  const [blog, setBlog] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    tags: "",
    category: "",
    image: null,
  });
  // Fetch blog data
  useEffect(() => {
    // Register Quill modules
    registerQuillModules();

    const fetchBlog = async () => {
      try {
        const response = await fetch(`/api/blogs/${params.id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch blog");
        }
        const data = await response.json();
        setBlog(data);

        // Initialize form data, making sure to handle HTML content properly
        setFormData({
          title: data.title || "",
          content: data.content || "<p>Edit your blog content here...</p>", // Ensure we have valid HTML
          tags: data.tags?.join(", ") || "",
          category: data.category || "",
          image: null,
        });

        console.log("Loaded blog content:", data.content);
      } catch (err) {
        toast.error("Error fetching blog: " + err.message);
      } finally {
        setIsLoading(false);
      }
    };

    if (params.id) {
      fetchBlog();
    }
  }, [params.id]);
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image" && files) {
      const file = files[0];

      // Validate image type
      const allowedTypes = [
        "image/jpeg",
        "image/png",
        "image/gif",
        "image/webp",
        "image/jpg",
      ];
      if (!allowedTypes.includes(file.type)) {
        toast.error(
          "Invalid file type. Only JPEG, PNG, GIF, and WebP images are allowed."
        );
        e.target.value = ""; // Clear the input
        return;
      }

      // Validate file size (5MB maximum)
      const maxSize = 5 * 1024 * 1024; // 5MB in bytes
      if (file.size > maxSize) {
        toast.error(
          "File size exceeds 5MB limit. Please choose a smaller image."
        );
        e.target.value = ""; // Clear the input
        return;
      }

      setFormData((prev) => ({ ...prev, [name]: file }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  // Handle content changes from the rich text editor
  const handleContentChange = (content) => {
    setFormData((prev) => ({ ...prev, content }));
  };
  // Function to upload image to Firebase Storage
  const handleImageUpload = async (image) => {
    try {
      if (!image) {
        console.log("No image provided to upload");
        return null;
      }

      console.log("Starting image upload process...");
      console.log("Image details:", {
        name: image.name,
        type: image.type,
        size: `${(image.size / 1024).toFixed(2)} KB`,
      });

      // Double-check validation before uploading
      const allowedTypes = [
        "image/jpeg",
        "image/png",
        "image/gif",
        "image/webp",
        "image/jpg",
      ];
      if (!allowedTypes.includes(image.type)) {
        throw new Error(
          "Invalid file type. Only JPEG, PNG, GIF, and WebP images are allowed."
        );
      }

      const maxSize = 5 * 1024 * 1024; // 5MB in bytes
      if (image.size > maxSize) {
        throw new Error("File size exceeds 5MB limit.");
      }

      // Create a unique filename with timestamp
      const timestamp = new Date().getTime();
      const fileName = `${timestamp}-${image.name.replace(/\s+/g, "_")}`;
      console.log("Generated unique filename:", fileName);

      // Set up metadata
      const metadata = {
        contentType: image.type || "image/jpeg",
        cacheControl: "public,max-age=3600",
      };

      // Create storage reference with the correct path
      const storageRef = ref(storage, `blogs/${fileName}`);
      console.log("Storage reference created:", storageRef.fullPath);

      // Start upload task
      const uploadTask = uploadBytesResumable(storageRef, image, metadata);

      // Return a promise that resolves with the download URL
      return new Promise((resolve, reject) => {
        uploadTask.on(
          "state_changed",
          (snapshot) => {
            // Progress monitoring
            const progress =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            setUploadProgress(progress);
            console.log(`Upload progress: ${progress.toFixed(2)}%`);
          },
          (error) => {
            // Error handling
            console.error("Error uploading image:", error);
            reject(error);
          },
          () => {
            // Upload completed successfully, get download URL
            getDownloadURL(uploadTask.snapshot.ref)
              .then((downloadURL) => {
                console.log("File available at:", downloadURL);
                resolve(downloadURL);
              })
              .catch((error) => {
                console.error("Error getting download URL:", error);
                reject(error);
              });
          }
        );
      });
    } catch (error) {
      console.error("Fatal error in handleImageUpload:", error);
      throw error;
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setUploadProgress(0);

    try {
      console.log("Starting blog update process...");
      toast.info("Updating blog post, please wait...");

      // Create FormData object
      const submitData = new FormData();
      submitData.append("title", formData.title);

      // Ensure content is properly set - use the rich text content
      console.log("Content to be submitted:", formData.content);
      submitData.append("content", formData.content);

      submitData.append("tags", formData.tags);
      submitData.append("category", formData.category);

      // Handle image upload if a new image is selected
      if (formData.image) {
        console.log("New image selected, uploading to Firebase Storage...");
        try {
          const imageUrl = await handleImageUpload(formData.image);
          console.log("Image uploaded successfully:", imageUrl);

          // Add the Firebase Storage URL to the form data
          submitData.append("image", imageUrl);
        } catch (uploadError) {
          console.error("Image upload failed:", uploadError);

          let errorMessage = "Failed to upload image";
          if (uploadError.code === "storage/unauthorized") {
            errorMessage = "Permission denied: Check Firebase storage rules";
          } else if (uploadError.message.includes("CORS")) {
            errorMessage = "CORS error: Server configuration issue";
          }

          toast.error(errorMessage);
          setIsSubmitting(false);
          return;
        }
      } else {
        console.log("No new image selected, keeping existing image");
        // If no new image is selected, keep the existing image URL
        if (blog.image) {
          submitData.append("image", blog.image);
        }
      }

      console.log("Sending update request to API...");
      const response = await fetch(`/api/blogs/${params.id}`, {
        method: "PUT",
        body: submitData,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to update blog");
      }

      console.log("Blog updated successfully:", data);
      toast.success("Blog updated successfully!");

      // Redirect back to the blog list after a short delay
      setTimeout(() => {
        router.push("/my-favorite");
      }, 1500);
    } catch (err) {
      console.error("Error updating blog:", err);
      toast.error(err.message || "Error updating blog");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoading) {
    return (
      <LayoutAdmin headerStyle={1} footerStyle={1}>
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p>Loading blog...</p>
        </div>
      </LayoutAdmin>
    );
  }
  return (
    <LayoutAdmin headerStyle={1} footerStyle={1}>
      <div className="edit-blog-container">
        <div className="inner-header mb-40">
          <h3 className="title">Edit Blog</h3>
          <p className="des">Update your blog post</p>
        </div>

        <form onSubmit={handleSubmit} className="edit-form">
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              className="form-control"
            />
          </div>{" "}
          <div className="form-group">
            <label htmlFor="content">Content</label>
            <RichTextEditor
              value={formData.content}
              onChange={handleContentChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="category">Category</label>
            <input
              type="text"
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="tags">Tags (comma-separated)</label>
            <input
              type="text"
              id="tags"
              name="tags"
              value={formData.tags}
              onChange={handleChange}
              className="form-control"
              placeholder="tag1, tag2, tag3"
            />
          </div>{" "}
          <div className="form-group">
            <label htmlFor="image">Image (optional)</label>
            <input
              type="file"
              id="image"
              name="image"
              onChange={handleChange}
              className="form-control"
              accept="image/jpeg, image/png, image/gif, image/webp"
            />
            <small className="file-restrictions">
              Accepted formats: JPEG, PNG, GIF, WebP. Maximum size: 5MB
            </small>
            {uploadProgress > 0 && uploadProgress < 100 && (
              <div className="upload-progress">
                <div className="progress-bar">
                  <div
                    className="progress-fill"
                    style={{ width: `${uploadProgress}%` }}
                  ></div>
                </div>
                <span>{uploadProgress.toFixed(0)}% uploaded</span>
              </div>
            )}
            {blog?.image && (
              <div className="current-image">
                <p>Current image:</p>
                <img
                  src={blog.image || "/assets/images/blog/default.jpg"}
                  alt={blog?.title || "Blog post"}
                  style={{ maxWidth: "200px", marginTop: "10px" }}
                />
              </div>
            )}
          </div>
          <div className="button-group">
            <button
              type="submit"
              className="submit-button"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Updating..." : "Update Blog"}
            </button>
            <button
              type="button"
              className="cancel-button"
              onClick={() => router.push("/my-favorite")}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>{" "}
      <style jsx>{`
        .edit-blog-container {
          max-width: 800px;
          margin: 0 auto;
          padding: 20px;
        }

        .edit-form {
          background: white;
          padding: 30px;
          border-radius: 8px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }

        .form-group {
          margin-bottom: 20px;
        }

        .form-group label {
          display: block;
          margin-bottom: 8px;
          font-weight: 500;
          color: #333;
        }

        .form-control {
          width: 100%;
          padding: 10px;
          border: 1px solid #ddd;
          border-radius: 4px;
          font-size: 16px;
        }

        textarea.form-control {
          resize: vertical;
          min-height: 200px;
        }

        .button-group {
          display: flex;
          gap: 15px;
          margin-top: 30px;
        }

        .submit-button,
        .cancel-button {
          padding: 12px 24px;
          border-radius: 4px;
          font-size: 16px;
          cursor: pointer;
          transition: all 0.3s ease;
          border: none;
        }

        .submit-button {
          background: #4caf50;
          color: white;
        }

        .submit-button:hover {
          background: #45a049;
        }

        .submit-button:disabled {
          background: #cccccc;
          cursor: not-allowed;
        }

        .cancel-button {
          background: #f44336;
          color: white;
        }

        .cancel-button:hover {
          background: #da190b;
        }

        .loading-container {
          text-align: center;
          padding: 40px;
        }
        .loading-spinner {
          border: 4px solid #f3f3f3;
          border-top: 4px solid #3498db;
          border-radius: 50%;
          width: 40px;
          height: 40px;
          animation: spin 1s linear infinite;
          margin: 0 auto 20px;
        }

        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        .upload-progress {
          margin-top: 10px;
        }

        .progress-bar {
          width: 100%;
          height: 10px;
          background-color: #f0f0f0;
          border-radius: 5px;
          margin-bottom: 5px;
          overflow: hidden;
        }

        .progress-fill {
          height: 100%;
          background-color: #4caf50;
          transition: width 0.3s ease;
        }
        .current-image {
          margin-top: 15px;
          padding: 10px;
          border: 1px solid #eee;
          border-radius: 4px;
          background-color: #f9f9f9;
        }

        .file-restrictions {
          display: block;
          margin-top: 5px;
          font-size: 13px;
          color: #666;
        }
      `}</style>
      {/* Global styles for the Quill editor */}
      <style jsx global>{`
        .quill-wrapper {
          background-color: white;
          border-radius: 8px;
          overflow: hidden;
          margin-bottom: 20px;
        }
        .ql-container {
          font-size: 16px;
          height: 400px;
        }
        .ql-editor {
          min-height: 300px;
          padding: 20px;
          line-height: 1.6;
        }
        .ql-toolbar {
          border: none !important;
          border-bottom: 1px solid #e2e8f0 !important;
          background-color: #f8fafc;
          padding: 8px;
          display: flex;
          flex-wrap: wrap;
          gap: 5px;
        }
        .ql-formats {
          margin-right: 15px !important;
          display: flex;
          gap: 4px;
        }
        .ql-toolbar button {
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 6px !important;
          border-radius: 4px;
          transition: all 0.2s ease;
          position: relative;
          background: #fff;
          border: 1px solid #e2e8f0;
        }
        .ql-snow .ql-stroke {
          stroke: currentColor;
        }
        .ql-snow .ql-fill {
          fill: currentColor;
        }
        .ql-snow.ql-toolbar button.ql-active .ql-stroke,
        .ql-snow .ql-toolbar button.ql-active .ql-stroke {
          stroke: currentColor;
        }
        .ql-snow.ql-toolbar button.ql-active .ql-fill,
        .ql-snow .ql-toolbar button.ql-active .ql-fill {
          fill: currentColor;
        }
        .ql-editor strong {
          font-weight: 600;
        }
        .ql-editor em {
          font-style: italic;
        }
        .ql-editor u {
          text-decoration: underline;
          text-underline-offset: 2px;
        }
        .ql-editor .ql-align-center {
          text-align: center;
        }
        .ql-editor .ql-align-right {
          text-align: right;
        }
        .ql-editor .ql-align-justify {
          text-align: justify;
        }
      `}</style>
    </LayoutAdmin>
  );
}
