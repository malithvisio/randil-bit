"use client";

import React, { useState } from "react";
import Layout from "@/components/layout/Layout";

export default function TestUploadPage() {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [uploadResult, setUploadResult] = useState(null);
  const [error, setError] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    setError(null);
    setUploadResult(null);
  };

  const handleUpload = async (e) => {
    e.preventDefault();

    if (!file) {
      setError("Please select a file first");
      return;
    }

    setUploading(true);
    setError(null);

    try {
      // Create a FormData object to send the file
      const formData = new FormData();
      formData.append("file", file);

      // This would connect to your API endpoint for file uploads
      const response = await fetch("/api/uploadImage", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`Upload failed with status: ${response.status}`);
      }

      const result = await response.json();
      setUploadResult(result);
    } catch (err) {
      console.error("Upload error:", err);
      setError(err.message || "An error occurred during upload");
    } finally {
      setUploading(false);
    }
  };

  return (
    <Layout>
      <div className="page-content mt-5 mb-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="card p-4">
                <h1 className="text-center mb-4">Test File Upload</h1>

                <form onSubmit={handleUpload}>
                  <div className="mb-3">
                    <label htmlFor="fileUpload" className="form-label">
                      Select a file to upload
                    </label>
                    <input
                      type="file"
                      className="form-control"
                      id="fileUpload"
                      onChange={handleFileChange}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={uploading || !file}
                  >
                    {uploading ? "Uploading..." : "Upload File"}
                  </button>
                </form>

                {error && (
                  <div className="alert alert-danger mt-3">{error}</div>
                )}

                {uploadResult && (
                  <div className="alert alert-success mt-3">
                    <p>File uploaded successfully!</p>
                    <p>File URL: {uploadResult.url}</p>
                  </div>
                )}

                <div className="mt-4">
                  <h5>Notes:</h5>
                  <ul>
                    <li>
                      This page is for testing file uploads to your server
                    </li>
                    <li>
                      Use this to verify that your upload API is working
                      correctly
                    </li>
                    <li>
                      Supported file types depend on your server configuration
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
