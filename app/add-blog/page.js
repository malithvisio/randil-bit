"use client";
import { useState } from "react";
import dynamic from "next/dynamic";
import firebaseApp from "@/libs/firebase";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import toast from "react-hot-toast";
import { storage } from "@/libs/firebase"; // Import the storage instance directly

// Dynamic import of RichTextEditor
const RichTextEditor = dynamic(() => import("./components/BlogEditor"), {
  ssr: false,
  loading: () => <p>Loading Editor...</p>,
});

export default function AddBlog() {
  const [formData, setFormData] = useState({
    title: "",
    content: "<p>Start writing your blog content here...</p>", // Initialize with placeholder content
    tags: "",
    image: null,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const handleImageUpload = async (image) => {
    try {
      if (!image) {
        console.log("No image provided to upload");
        return null;
      }

      console.log("🔄 Starting image upload process...");
      console.log("📝 Image details:", {
        name: image.name,
        type: image.type,
        size: `${(image.size / 1024).toFixed(2)} KB`,
        lastModified: new Date(image.lastModified).toISOString(),
      });

      // Create a unique filename with timestamp to prevent collisions
      const timestamp = new Date().getTime();
      const fileName = `${timestamp}-${image.name.replace(/\s+/g, "_")}`;
      console.log("📂 Generated unique filename:", fileName);

      // Use the imported storage instance
      console.log("🪣 Storage bucket:", storage.app.options.storageBucket);

      // Log Firebase config for debugging
      console.log("📊 Firebase config:", {
        storageBucket: storage.app.options.storageBucket,
        authDomain: storage.app.options.authDomain,
        projectId: storage.app.options.projectId,
      });

      // Set up metadata with proper content type and cache control
      const metadata = {
        contentType: image.type || "image/jpeg",
        cacheControl: "public,max-age=3600",
        customMetadata: {
          uploadedFrom: "blog-form",
          uploadedAt: new Date().toISOString(),
          originalName: image.name,
        },
      };
      console.log("ℹ️ Using metadata:", metadata); // Create storage reference with the correct bucket name and path
      const storageRef = ref(storage, `blogs/${fileName}`);
      console.log("🔗 Storage reference:", {
        fullPath: storageRef.fullPath,
        bucket: storageRef.bucket,
        name: storageRef.name,
      });

      // Check if we can access the storage bucket (this might help detect issues early)
      console.log("🔍 Testing storage access before upload...");

      console.log("⬆️ Starting upload task with uploadBytesResumable...");
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
            console.log(`Upload progress: ${progress.toFixed(2)}% done`);
            console.log(
              ` Bytes: ${snapshot.bytesTransferred}/${snapshot.totalBytes}`
            );

            // Log the current state of the upload
            const states = ["paused", "running"];
            console.log(` Upload state: ${states[snapshot.state]}`);
          },
          (error) => {
            // Error handling with detailed logging
            console.error(" Error uploading image:", error);
            console.error(" Error code:", error.code);
            console.error(" Error message:", error.message);

            // Log specific error types with additional context
            if (error.code === "storage/unauthorized") {
              console.error(
                "🔒 Authentication failed. Check Firebase Storage rules."
              );
            } else if (error.code === "storage/canceled") {
              console.error(" Upload was cancelled by the user or system.");
            } else if (error.code === "storage/unknown") {
              console.error(" Unknown error occurred during upload.");
            }

            // Log server response if available (crucial for CORS issues)
            if (error.serverResponse) {
              console.error(" Server response:", error.serverResponse);

              try {
                const serverData = JSON.parse(error.serverResponse);
                console.error(" Parsed server response:", serverData);
              } catch (e) {
                console.error(" Raw server response:", error.serverResponse);
              }
            }

            // Log network details if available
            if (error.customData && error.customData._baseMessage) {
              console.error(
                "🔍 Base error message:",
                error.customData._baseMessage
              );
            }

            // Log CORS-specific information
            console.error(" Checking for CORS issues...");
            console.error(" Request origin:", window.location.origin);
            console.error(
              "🔍 Target bucket:",
              storage.app.options.storageBucket
            );

            reject(error);
          },
          () => {
            console.log(" Upload completed successfully!");
            console.log(" Getting download URL...");

            getDownloadURL(uploadTask.snapshot.ref)
              .then((downloadURL) => {
                console.log(
                  " File successfully uploaded and available at:",
                  downloadURL
                );
                console.log(" Upload metadata:", uploadTask.snapshot.metadata);
                resolve(downloadURL);
              })
              .catch((error) => {
                console.error(" Error getting the download URL:", error);
                console.error(" Error details:", {
                  code: error.code,
                  message: error.message,
                  serverResponse: error.serverResponse || "No server response",
                });

                // Additional information about the uploaded file
                console.error(
                  " File was uploaded but URL retrieval failed. File info:",
                  {
                    path: uploadTask.snapshot.ref.fullPath,
                    generation: uploadTask.snapshot.metadata.generation,
                    metageneration: uploadTask.snapshot.metadata.metageneration,
                    timeCreated: uploadTask.snapshot.metadata.timeCreated,
                  }
                );

                reject(error);
              });
          }
        );
      });
    } catch (error) {
      console.error(" Fatal error in handleImageUpload:", error);
      console.error("Stack trace:", error.stack);

      // Log browser environment info
      console.error("🌐 Browser info:", {
        userAgent: navigator.userAgent,
        platform: navigator.platform,
        vendor: navigator.vendor,
      });

      // Log network status
      console.error(
        "🌐 Network status:",
        navigator.onLine ? "Online" : "Offline"
      );

      throw error;
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");
    setUploadProgress(0);

    try {
      console.log("🚀 Starting blog creation process...");
      toast("Creating blog post, please wait..."); // Validate form data
      if (!formData.title.trim()) {
        throw new Error("Blog title is required");
      }

      // Check if content is empty or just contains empty paragraphs
      const isEmptyContent =
        !formData.content ||
        formData.content === "<p><br></p>" ||
        formData.content === "<p>Start writing your blog content here...</p>" ||
        formData.content.replace(/<[^>]*>/g, "").trim() === "";

      if (isEmptyContent) {
        console.log("❌ Content validation failed. Content:", formData.content);
        throw new Error(
          "Blog content is required - please add some text to your post"
        );
      }

      console.log("📝 Form data validation passed:", {
        title: formData.title,
        contentLength: formData.content.length,
        tags: formData.tags,
        hasImage: !!formData.image,
      });

      let imageUrl = null;

      if (formData.image) {
        console.log("🖼️ Image detected, starting upload process...");
        try {
          console.time("imageUpload");
          imageUrl = await handleImageUpload(formData.image);
          console.timeEnd("imageUpload");
          console.log("✅ Image upload successful:", imageUrl);
        } catch (uploadError) {
          console.error("❌ Image upload failed:", uploadError);
          console.error("❌ Upload error details:", {
            code: uploadError.code,
            message: uploadError.message,
            name: uploadError.name,
            stack: uploadError.stack,
          });

          // Show more specific error messages based on error type
          let errorMessage = "Failed to upload image";

          if (uploadError.code === "storage/unauthorized") {
            errorMessage = "Permission denied: Check Firebase storage rules";
          } else if (uploadError.code === "storage/canceled") {
            errorMessage = "Upload was canceled";
          } else if (uploadError.code === "storage/unknown") {
            errorMessage = "Unknown error during upload";
          } else if (uploadError.code === "storage/retry-limit-exceeded") {
            errorMessage = "Upload failed: Network issue, please try again";
          } else if (uploadError.code === "storage/invalid-checksum") {
            errorMessage = "Upload corrupted, please try again";
          } else if (uploadError.message.includes("CORS")) {
            errorMessage = "CORS error: Server configuration issue";
          }

          toast.error(errorMessage);
          setError(`${errorMessage}: ${uploadError.message}`);
          setIsSubmitting(false);
          return;
        }
      } else {
        console.log("ℹ️ No image selected, proceeding without image upload");
      }

      console.log("📦 Preparing blog data for submission...");
      const blogData = new FormData();
      blogData.append("title", formData.title);
      blogData.append("content", formData.content);
      blogData.append("tags", formData.tags);
      if (imageUrl) {
        blogData.append("image", imageUrl);
        console.log("🖼️ Including image URL in blog data:", imageUrl);
      }
      console.log("🌐 Sending API request to /api/blogs...");
      console.time("apiRequest");
      const response = await fetch("/api/blogs", {
        method: "POST",
        body: blogData,
        // Skip setting Content-Type for FormData
      });
      console.timeEnd("apiRequest");

      console.log("🌐 API response status:", response.status);

      if (!response.ok) {
        const data = await response.json();
        console.error("❌ API error response:", data);
        throw new Error(data.error || `Server error: ${response.status}`);
      }

      const responseData = await response.json();
      console.log("✅ Blog created successfully:", responseData);

      toast.success("Blog post created successfully!");
      setSuccess(true);
      setFormData({
        title: "",
        content: "",
        tags: "",
        image: null,
      });
    } catch (err) {
      console.error("❌ Error in handleSubmit:", err);
      console.error("❌ Error details:", {
        message: err.message,
        name: err.name,
        stack: err.stack,
      });
      toast.error(err.message || "Failed to create blog post");
      setError(err.message || "An unexpected error occurred");

      // If the error is related to content being empty, focus the editor
      if (err.message && err.message.includes("Blog content is required")) {
        // Add a small timeout to ensure the editor is rendered
        setTimeout(() => {
          const editorElement = document.querySelector(".ql-editor");
          if (editorElement) {
            editorElement.focus();
            // Scroll to the editor
            editorElement.scrollIntoView({
              behavior: "smooth",
              block: "center",
            });
          }
        }, 100);
      }
    } finally {
      console.log("🏁 Blog submission process completed");
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleContentChange = (content) => {
    console.log(
      "📝 Content changed:",
      content ? content.substring(0, 50) + "..." : "empty"
    );

    // Check if content is empty or just contains empty paragraphs
    const isEmptyContent =
      !content ||
      content === "<p><br></p>" ||
      content.replace(/<[^>]*>/g, "").trim() === "";

    if (isEmptyContent) {
      console.log("⚠️ Warning: Content appears to be empty");
    }

    setFormData((prev) => ({
      ...prev,
      content: content || "",
    }));
  };
  const handleImageChange = (e) => {
    try {
      const file = e.target.files[0];
      console.log(
        "File selection event triggered:",
        file ? "File selected" : "No file or selection canceled"
      );

      if (!file) {
        console.log("❌ No image selected or selection canceled");
        return;
      }

      console.log("🖼️ Image selected:", {
        name: file.name,
        type: file.type,
        size: `${(file.size / 1024).toFixed(2)} KB`,
        lastModified: new Date(file.lastModified).toISOString(),
      });

      // Validate file type
      const validImageTypes = [
        "image/jpeg",
        "image/png",
        "image/gif",
        "image/webp",
      ];
      if (!validImageTypes.includes(file.type)) {
        console.warn("⚠️ Invalid image type selected:", file.type);
        toast.error(
          "Please select a valid image file (JPEG, PNG, GIF, or WEBP)"
        );
        e.target.value = null; // Clear the input
        return;
      }

      // Validate file size (max 5MB)
      const maxSize = 5 * 1024 * 1024; // 5MB in bytes
      if (file.size > maxSize) {
        console.warn(
          "⚠️ Image too large:",
          `${(file.size / (1024 * 1024)).toFixed(2)}MB`
        );
        toast.error("Image must be smaller than 5MB");
        e.target.value = null; // Clear the input
        return;
      }

      console.log("✅ Image validation passed");
      setFormData((prev) => ({
        ...prev,
        image: file,
      }));
    } catch (error) {
      console.error("Error handling image selection:", error);
      toast.error("Error processing the selected image");
    }
  };
  return (
    <section className="profile-dashboard">
      <div className="tf-container blog-form-container">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <div className="wrap-form">
              <div className="heading-form">
                <h3 className="fw-bold mb-4">Create New Blog Post</h3>
                <p className="mb-4">
                  Share your thoughts and experiences with the world
                </p>
                {error && (
                  <div className="alert alert-danger" role="alert">
                    {error}
                  </div>
                )}
                {success && (
                  <div className="alert alert-success" role="alert">
                    Blog post created successfully!
                  </div>
                )}
              </div>{" "}
              <form
                onSubmit={handleSubmit}
                className="form-box"
                encType="multipart/form-data"
              >
                <div className="form-group mb-4">
                  <label htmlFor="title" className="form-label">
                    Blog Title
                  </label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    className="form-control"
                    placeholder="Enter blog title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                  />
                </div>{" "}
                <div className="form-group mb-4">
                  <label htmlFor="image" className="form-label">
                    Cover Image
                  </label>
                  <div className="file-upload-container position-relative">
                    <input
                      type="file"
                      id="image"
                      name="image"
                      className="file-input"
                      accept="image/jpeg,image/png,image/gif,image/webp"
                      onChange={handleImageChange}
                    />
                    <label htmlFor="image" className="file-upload-label">
                      <i className="fas fa-cloud-upload-alt me-2"></i>
                      Choose Image
                    </label>
                    {formData.image && (
                      <div className="selected-file mt-2">
                        <span className="text-success">
                          Selected: {formData.image.name}
                        </span>
                      </div>
                    )}
                    {uploadProgress > 0 && uploadProgress < 100 && (
                      <div className="progress mt-2">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: `${uploadProgress}%` }}
                          aria-valuenow={uploadProgress}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        >
                          {Math.round(uploadProgress)}%
                        </div>
                      </div>
                    )}
                    <p className="small text-muted mt-1">
                      Upload a high-quality image for your blog post (max 5MB)
                    </p>
                  </div>
                </div>
                <div className="form-group mb-4">
                  <label htmlFor="content" className="form-label">
                    Blog Content
                  </label>{" "}
                  <RichTextEditor
                    value={formData.content}
                    onChange={handleContentChange}
                  />
                </div>
                <div className="form-group mb-4">
                  <label htmlFor="tags" className="form-label">
                    Tags (add maximum 3 tags, comma-separated)
                  </label>
                  <input
                    type="text"
                    id="tags"
                    name="tags"
                    className="form-control"
                    placeholder="Enter tags (comma-separated)"
                    value={formData.tags}
                    onChange={handleChange}
                  />
                </div>{" "}
                <div className="form-group">
                  <button
                    type="submit"
                    className="btn btn-primary w-100 py-3"
                    disabled={isSubmitting}
                    style={{ cursor: isSubmitting ? "not-allowed" : "pointer" }}
                  >
                    {isSubmitting
                      ? uploadProgress > 0 && uploadProgress < 100
                        ? `Uploading... ${Math.round(uploadProgress)}%`
                        : "Publishing..."
                      : "Publish Blog Post"}
                  </button>
                </div>{" "}
              </form>
            </div>
          </div>
        </div>
      </div>{" "}
      <style jsx global>{`
        .file-upload-container {
          position: relative;
          width: 100%;
          min-height: 45px;
          margin-bottom: 1rem;
        }

        .file-input {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
          cursor: pointer;
          z-index: 3;
        }

        .file-upload-label {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          padding: 12px;
          background-color: #f8f9fa;
          border: 2px dashed #ced4da;
          border-radius: 4px;
          cursor: pointer;
          transition: all 0.3s ease;
          font-weight: 500;
        }

        .file-upload-label:hover {
          background-color: #e9ecef;
          border-color: #adb5bd;
        }

        .selected-file {
          padding: 6px;
          background-color: rgba(40, 167, 69, 0.1);
          border-radius: 4px;
        }

        .btn-primary {
          position: relative !important;
          z-index: 10 !important;
          overflow: visible !important;
        }

        @media (max-width: 768px) {
          .blog-form-container {
            padding: 0 10px !important;
            margin: 0 !important;
            max-width: 100% !important;
            width: 100% !important;
          }

          .row {
            margin: 0 !important;
          }

          .col-lg-8 {
            padding: 0 !important;
            max-width: 100% !important;
            flex: 0 0 100% !important;
          }

          .wrap-form {
            border-radius: 8px !important;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1) !important;
            padding: 20px 15px !important;
            margin-top: 10px !important;
            margin-bottom: 10px !important;
            background: white !important;
          }

          .profile-dashboard {
            padding: 0 !important;
            margin-top: 0 !important;
          }

          .form-box {
            padding: 0 !important;
          }

          .heading-form {
            padding: 0 !important;
          }

          .quill-wrapper {
            margin: 0 0 15px 0 !important;
            border-radius: 4px !important;
          }

          .form-control {
            margin-bottom: 15px !important;
            border: 1px solid #ddd !important;
            border-radius: 4px !important;
          }

          .btn-primary {
            width: 100% !important;
            padding: 12px !important;
            border-radius: 4px !important;
            font-weight: 500 !important;
            position: relative !important;
            z-index: 10 !important;
            overflow: visible !important;
          }

          input[type="file"] {
            cursor: pointer !important;
            height: auto !important;
            min-height: 38px !important;
          }
        }
      `}</style>
    </section>
  );
}
