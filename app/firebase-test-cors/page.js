"use client";

import { useState, useEffect } from "react";
import { storage } from "@/libs/firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

export default function FirebaseStorageTest() {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [downloadURL, setDownloadURL] = useState("");
  const [error, setError] = useState("");
  const [bucketInfo, setBucketInfo] = useState(null);
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    // Check Firebase config
    try {
      setBucketInfo({
        bucketName: storage.app.options.storageBucket,
        projectId: storage.app.options.projectId,
      });

      addLog("Storage bucket detected: " + storage.app.options.storageBucket);
    } catch (err) {
      addLog("Error accessing storage configuration: " + err.message, "error");
    }
  }, []);

  const addLog = (message, type = "info") => {
    const timestamp = new Date().toISOString().split("T")[1].split(".")[0];
    setLogs((prev) => [...prev, { time: timestamp, message, type }]);
    console[type || "log"](message);
  };

  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      setFile(e.target.files[0]);
      addLog(
        `File selected: ${e.target.files[0].name} (${e.target.files[0].type}, ${e.target.files[0].size} bytes)`
      );
    }
  };

  const handleUpload = async () => {
    if (!file) {
      setError("Please select a file first");
      return;
    }

    setUploading(true);
    setProgress(0);
    setError("");
    setDownloadURL("");

    try {
      // Create a unique file name
      const fileName = `test-${new Date().getTime()}-${file.name}`;
      addLog(`Generated filename: ${fileName}`);

      // Create a reference to the file location
      const storageRef = ref(storage, `test-uploads/${fileName}`);
      addLog(`Storage reference path: ${storageRef.fullPath}`);

      // Set metadata
      const metadata = {
        contentType: file.type || "application/octet-stream",
        cacheControl: "public,max-age=3600",
      };

      addLog(`Uploading with metadata: ${JSON.stringify(metadata)}`);

      // Start upload task
      const uploadTask = uploadBytesResumable(storageRef, file, metadata);

      // Monitor upload progress
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setProgress(progress);
          addLog(
            `Upload progress: ${progress.toFixed(2)}% (${
              snapshot.bytesTransferred
            }/${snapshot.totalBytes} bytes)`
          );
        },
        (error) => {
          addLog(`Upload error: ${error.message}`, "error");
          addLog(`Error code: ${error.code}`, "error");
          if (error.serverResponse) {
            addLog(
              `Server response: ${JSON.stringify(error.serverResponse)}`,
              "error"
            );
          }
          setError(`Upload failed: ${error.message}`);
          setUploading(false);
        },
        async () => {
          try {
            addLog("Upload completed successfully, getting download URL...");
            // Get download URL
            const url = await getDownloadURL(uploadTask.snapshot.ref);
            addLog(`File available at: ${url}`);
            setDownloadURL(url);
            setUploading(false);
          } catch (urlError) {
            addLog(`Error getting download URL: ${urlError.message}`, "error");
            setError(`Failed to get download URL: ${urlError.message}`);
            setUploading(false);
          }
        }
      );
    } catch (err) {
      addLog(`Error initializing upload: ${err.message}`, "error");
      setError(`Error: ${err.message}`);
      setUploading(false);
    }
  };

  return (
    <div className="container py-5">
      <h1 className="mb-4">Firebase Storage CORS Test</h1>
      <p className="text-muted">
        Use this page to verify your Firebase Storage configuration and CORS
        settings.
      </p>

      {bucketInfo && (
        <div className="card mb-4">
          <div className="card-header bg-info text-white">
            <h5 className="mb-0">Firebase Configuration</h5>
          </div>
          <div className="card-body">
            <p>
              <strong>Storage Bucket:</strong> {bucketInfo.bucketName}
            </p>
            <p>
              <strong>Project ID:</strong> {bucketInfo.projectId}
            </p>
            <div
              className={
                bucketInfo.bucketName.includes(".appspot.com")
                  ? "alert alert-success"
                  : "alert alert-danger"
              }
            >
              {bucketInfo.bucketName.includes(".appspot.com")
                ? "✅ Bucket format is correct (using .appspot.com)"
                : "⚠️ Incorrect bucket format! Should be using .appspot.com"}
            </div>
          </div>
        </div>
      )}

      <div className="card mb-4">
        <div className="card-header bg-primary text-white">
          <h5 className="mb-0">Upload Test</h5>
        </div>
        <div className="card-body">
          <div className="mb-3">
            <label htmlFor="fileInput" className="form-label">
              Select a file to upload
            </label>
            <input
              type="file"
              className="form-control"
              id="fileInput"
              onChange={handleFileChange}
              disabled={uploading}
            />
          </div>

          <button
            className="btn btn-primary"
            onClick={handleUpload}
            disabled={!file || uploading}
          >
            {uploading ? "Uploading..." : "Test Upload"}
          </button>

          {uploading && (
            <div className="mt-3">
              <label className="form-label">
                Upload Progress: {Math.round(progress)}%
              </label>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: `${progress}%` }}
                  aria-valuenow={progress}
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          )}

          {error && (
            <div className="alert alert-danger mt-3">
              <strong>Error:</strong> {error}
            </div>
          )}

          {downloadURL && (
            <div className="mt-3">
              <div className="alert alert-success">
                <strong>Success!</strong> File uploaded successfully.
              </div>

              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  value={downloadURL}
                  readOnly
                />
                <button
                  className="btn btn-outline-secondary"
                  type="button"
                  onClick={() => {
                    navigator.clipboard.writeText(downloadURL);
                    alert("URL copied to clipboard!");
                  }}
                >
                  Copy
                </button>
              </div>

              {downloadURL.match(/\.(jpeg|jpg|gif|png)$/i) && (
                <div className="mt-2">
                  <img
                    src={downloadURL}
                    alt="Uploaded file"
                    className="img-fluid img-thumbnail"
                    style={{ maxHeight: "300px" }}
                  />
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      <div className="card mb-4">
        <div className="card-header bg-dark text-white">
          <h5 className="mb-0">Upload Logs</h5>
        </div>
        <div className="card-body">
          <div
            className="bg-light p-3"
            style={{ maxHeight: "300px", overflow: "auto" }}
          >
            {logs.length === 0 ? (
              <p className="text-muted">
                No logs yet. Start an upload to see detailed logs.
              </p>
            ) : (
              <div>
                {logs.map((log, index) => (
                  <div
                    key={index}
                    className={`log-entry ${
                      log.type === "error"
                        ? "text-danger"
                        : log.type === "warn"
                        ? "text-warning"
                        : ""
                    }`}
                  >
                    <small className="text-muted">[{log.time}]</small>{" "}
                    {log.message}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-header bg-warning">
          <h5 className="mb-0">CORS Troubleshooting</h5>
        </div>
        <div className="card-body">
          <h6>How to Fix CORS Issues:</h6>
          <ol>
            <li>
              Make sure your <code>firebase.ts</code> file has the correct
              bucket name:
              <pre className="bg-light p-2">
                storageBucket: "randillanka-2cc47.appspot.com"
              </pre>
            </li>
            <li>
              Run the CORS configuration script:
              <pre className="bg-light p-2">.\apply-cors.ps1</pre>
            </li>
            <li>Clear your browser cache or use incognito mode</li>
            <li>Restart your Next.js development server</li>
          </ol>

          <div className="alert alert-info">
            <strong>Note:</strong> CORS configuration changes can take a few
            minutes to propagate through Google's systems. If you've made the
            changes and still see errors, wait 5-10 minutes and try again.
          </div>
        </div>
      </div>
    </div>
  );
}
