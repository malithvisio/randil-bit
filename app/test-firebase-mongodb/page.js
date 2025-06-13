"use client";

import { useState, useEffect } from "react";
import { storage } from "@/libs/firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import toast from "react-hot-toast";

export default function TestMongoDBFirebaseIntegration() {
  const [file, setFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [firebaseUrl, setFirebaseUrl] = useState("");
  const [mongoBlogs, setMongoBlogs] = useState([]);
  const [isUploading, setIsUploading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [testTitle, setTestTitle] = useState(
    `Test Blog ${new Date().toISOString().split("T")[0]}`
  );

  // Fetch MongoDB blogs on load
  useEffect(() => {
    async function fetchMongoDBBlogs() {
      try {
        const response = await fetch("/api/blogs");
        if (!response.ok) {
          throw new Error(`Failed to fetch blogs: ${response.statusText}`);
        }
        const data = await response.json();
        setMongoBlogs(data);
      } catch (error) {
        console.error("Error fetching MongoDB blogs:", error);
        toast.error("Failed to fetch MongoDB blogs");
      }
    }

    fetchMongoDBBlogs();
  }, []);

  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleUploadToFirebase = async () => {
    if (!file) {
      toast.error("Please select a file first");
      return;
    }

    setIsUploading(true);
    setUploadProgress(0);

    try {
      // Create a unique file name
      const timestamp = new Date().getTime();
      const fileName = `${timestamp}-${file.name.replace(/\s+/g, "_")}`;

      // Create storage reference
      const storageRef = ref(storage, `blogs/${fileName}`);

      // Set metadata
      const metadata = {
        contentType: file.type || "image/jpeg",
        customMetadata: {
          uploadedAt: new Date().toISOString(),
          testUpload: "true",
        },
      };

      // Start upload task
      const uploadTask = uploadBytesResumable(storageRef, file, metadata);

      // Monitor upload progress
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setUploadProgress(progress);
        },
        (error) => {
          console.error("Error uploading file:", error);
          toast.error(`Upload failed: ${error.message}`);
          setIsUploading(false);
        },
        async () => {
          // Upload completed successfully
          try {
            const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
            setFirebaseUrl(downloadURL);
            toast.success("Image uploaded to Firebase Storage successfully!");
            console.log("Firebase Storage URL:", downloadURL);
          } catch (error) {
            console.error("Error getting download URL:", error);
            toast.error(`Failed to get download URL: ${error.message}`);
          } finally {
            setIsUploading(false);
          }
        }
      );
    } catch (error) {
      console.error("Upload error:", error);
      toast.error(`Upload error: ${error.message}`);
      setIsUploading(false);
    }
  };

  const handleSaveToMongoDB = async () => {
    if (!firebaseUrl) {
      toast.error("Please upload an image to Firebase first");
      return;
    }

    setIsSubmitting(true);

    try {
      // Create form data for MongoDB
      const formData = new FormData();
      formData.append("title", testTitle);
      formData.append(
        "content",
        `<p>This is a test blog with Firebase image URL: ${firebaseUrl}</p>`
      );
      formData.append("tags", "test,firebase,mongodb");
      formData.append("image", firebaseUrl);

      // Send API request
      const response = await fetch("/api/blogs", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to save to MongoDB");
      }

      const data = await response.json();
      toast.success("Blog saved to MongoDB successfully!");
      console.log("MongoDB response:", data);

      // Refresh the blog list
      const blogsResponse = await fetch("/api/blogs");
      const blogsData = await blogsResponse.json();
      setMongoBlogs(blogsData);

      // Reset form
      setFirebaseUrl("");
      setFile(null);
      setUploadProgress(0);
      setTestTitle(
        `Test Blog ${
          new Date().toISOString().split("T")[0]
        } ${new Date().getTime()}`
      );
    } catch (error) {
      console.error("Error saving to MongoDB:", error);
      toast.error(`Failed to save to MongoDB: ${error.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="test-container">
      <h1>Firebase Storage + MongoDB Integration Test</h1>

      <div className="test-section">
        <h2>Step 1: Upload Image to Firebase Storage</h2>
        <div className="upload-form">
          <input
            type="file"
            onChange={handleFileChange}
            accept="image/*"
            disabled={isUploading}
          />
          <button
            onClick={handleUploadToFirebase}
            disabled={!file || isUploading}
            className={isUploading ? "uploading" : ""}
          >
            {isUploading
              ? `Uploading... ${uploadProgress.toFixed(0)}%`
              : "Upload to Firebase"}
          </button>

          {uploadProgress > 0 && uploadProgress < 100 && (
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: `${uploadProgress}%` }}
              ></div>
            </div>
          )}

          {firebaseUrl && (
            <div className="result-section">
              <h3>Firebase Storage URL:</h3>
              <div className="url-display">
                <textarea readOnly value={firebaseUrl} />
                <button
                  onClick={() => navigator.clipboard.writeText(firebaseUrl)}
                >
                  Copy URL
                </button>
              </div>
              <div className="image-preview">
                <img src={firebaseUrl} alt="Uploaded to Firebase" />
              </div>
            </div>
          )}
        </div>
      </div>

      {firebaseUrl && (
        <div className="test-section">
          <h2>Step 2: Save to MongoDB with Firebase URL</h2>
          <div className="save-form">
            <div className="form-group">
              <label>Test Blog Title:</label>
              <input
                type="text"
                value={testTitle}
                onChange={(e) => setTestTitle(e.target.value)}
                disabled={isSubmitting}
              />
            </div>
            <button
              onClick={handleSaveToMongoDB}
              disabled={isSubmitting}
              className={isSubmitting ? "submitting" : ""}
            >
              {isSubmitting ? "Saving to MongoDB..." : "Save to MongoDB"}
            </button>
          </div>
        </div>
      )}

      <div className="test-section">
        <h2>MongoDB Blogs (with Firebase URLs)</h2>
        <div className="blogs-grid">
          {mongoBlogs.length === 0 ? (
            <p>No blogs found in MongoDB</p>
          ) : (
            mongoBlogs.map((blog) => (
              <div key={blog._id} className="blog-card">
                <div className="blog-image">
                  {blog.image ? (
                    <img
                      src={blog.image}
                      alt={blog.title}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "/assets/images/blog/default.jpg";
                      }}
                    />
                  ) : (
                    <div className="no-image">No Image</div>
                  )}
                </div>
                <div className="blog-details">
                  <h3>{blog.title}</h3>
                  <p className="blog-date">
                    {new Date(blog.createdAt).toLocaleDateString()}
                  </p>
                  <div className="blog-url">
                    {blog.image && blog.image.includes("firebasestorage") ? (
                      <span className="firebase-tag">Firebase Storage URL</span>
                    ) : (
                      <span className="regular-tag">Regular URL</span>
                    )}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      <style jsx>{`
        .test-container {
          max-width: 1000px;
          margin: 0 auto;
          padding: 40px 20px;
          font-family: Arial, sans-serif;
        }

        h1 {
          text-align: center;
          margin-bottom: 30px;
          color: #333;
        }

        .test-section {
          background: white;
          border-radius: 8px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          padding: 25px;
          margin-bottom: 30px;
        }

        h2 {
          margin-top: 0;
          margin-bottom: 20px;
          font-size: 20px;
          color: #444;
          border-bottom: 1px solid #eee;
          padding-bottom: 10px;
        }

        .upload-form,
        .save-form {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        input[type="file"],
        input[type="text"] {
          padding: 10px;
          border: 1px solid #ddd;
          border-radius: 4px;
        }

        button {
          padding: 12px 20px;
          background-color: #4285f4;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-weight: 500;
          transition: background-color 0.3s;
        }

        button:hover {
          background-color: #3367d6;
        }

        button:disabled {
          background-color: #cccccc;
          cursor: not-allowed;
        }

        .uploading,
        .submitting {
          background-color: #f4b400;
        }

        .progress-bar {
          height: 10px;
          background-color: #f0f0f0;
          border-radius: 5px;
          overflow: hidden;
          margin: 10px 0;
        }

        .progress-fill {
          height: 100%;
          background-color: #4caf50;
          transition: width 0.3s ease;
        }

        .result-section {
          margin-top: 20px;
          padding-top: 20px;
          border-top: 1px dashed #ddd;
        }

        .url-display {
          display: flex;
          gap: 10px;
          margin-bottom: 15px;
        }

        textarea {
          flex: 1;
          min-height: 60px;
          padding: 10px;
          border: 1px solid #ddd;
          border-radius: 4px;
          resize: vertical;
          font-family: monospace;
          font-size: 12px;
        }

        .image-preview {
          margin-top: 20px;
          text-align: center;
        }

        .image-preview img {
          max-width: 100%;
          max-height: 300px;
          border-radius: 4px;
          border: 1px solid #eee;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 5px;
        }

        .form-group label {
          font-weight: 500;
          color: #555;
        }

        .blogs-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          gap: 20px;
        }

        .blog-card {
          border: 1px solid #eee;
          border-radius: 8px;
          overflow: hidden;
          transition: transform 0.3s, box-shadow 0.3s;
        }

        .blog-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }

        .blog-image {
          height: 150px;
          overflow: hidden;
          background-color: #f5f5f5;
        }

        .blog-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .no-image {
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #999;
          font-style: italic;
        }

        .blog-details {
          padding: 15px;
        }

        .blog-details h3 {
          margin: 0 0 10px 0;
          font-size: 16px;
          color: #333;
        }

        .blog-date {
          color: #777;
          margin: 0 0 10px 0;
          font-size: 14px;
        }

        .blog-url {
          margin-top: 10px;
        }

        .firebase-tag {
          background-color: #ffca28;
          color: #333;
          padding: 3px 8px;
          border-radius: 12px;
          font-size: 12px;
          font-weight: 500;
        }

        .regular-tag {
          background-color: #e0e0e0;
          color: #333;
          padding: 3px 8px;
          border-radius: 12px;
          font-size: 12px;
          font-weight: 500;
        }
      `}</style>
    </div>
  );
}
