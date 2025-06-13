"use client";

import { useState } from "react";
import { db, storage, uploadImage, addBlog } from "@/libs/firebase";
import {
  collection,
  addDoc,
  getDocs,
  serverTimestamp,
} from "firebase/firestore";
import {
  ref,
  uploadBytes,
  uploadString,
  getDownloadURL,
} from "firebase/storage";
import FirebaseEnvironmentCheck from "@/components/elements/FirebaseEnvironmentCheck";

const TestBlock = ({ title, children }) => (
  <div className="border rounded p-3 mb-4">
    <h5 className="mb-3">{title}</h5>
    {children}
  </div>
);

export default function FirebaseDirectTestPage() {
  const [testResults, setTestResults] = useState({});
  const [loading, setLoading] = useState({});
  const [errors, setErrors] = useState({});
  const [blogData, setBlogData] = useState({
    title: "Test Blog Post",
    content:
      "<p>This is a test blog post created to test the Firebase integration.</p>",
    tags: "test,firebase",
    category: "Test",
  });
  const [imageFile, setImageFile] = useState(null);

  const runFirestoreBasicTest = async () => {
    const testId = "firestoreBasic";
    setLoading((prev) => ({ ...prev, [testId]: true }));
    setErrors((prev) => ({ ...prev, [testId]: null }));

    try {
      console.log("Starting basic Firestore test...");
      console.log("Firestore instance:", db);

      if (!db) {
        throw new Error("Firestore instance is not available");
      }

      const testCollection = collection(db, "test");
      console.log("Test collection reference:", testCollection);

      const testData = {
        message: "Test document created at " + new Date().toISOString(),
        createdAt: serverTimestamp(),
      };
      console.log("Test data to be added:", testData);

      const docRef = await addDoc(testCollection, testData);
      console.log("Test document created with ID:", docRef.id);

      setTestResults((prev) => ({
        ...prev,
        [testId]: {
          success: true,
          message: "Successfully created test document",
          details: { docId: docRef.id },
        },
      }));
    } catch (err) {
      console.error("Firestore basic test failed:", err);
      setErrors((prev) => ({
        ...prev,
        [testId]: err.message || "Unknown error",
      }));
      setTestResults((prev) => ({
        ...prev,
        [testId]: {
          success: false,
          message: "Failed to create test document",
          details: { error: err.message },
        },
      }));
    } finally {
      setLoading((prev) => ({ ...prev, [testId]: false }));
    }
  };

  const runStorageBasicTest = async () => {
    const testId = "storageBasic";
    setLoading((prev) => ({ ...prev, [testId]: true }));
    setErrors((prev) => ({ ...prev, [testId]: null }));

    try {
      console.log("Starting basic Storage test...");
      console.log("Storage instance:", storage);

      if (!storage) {
        throw new Error("Storage instance is not available");
      }

      console.log("Storage bucket:", storage.app.options.storageBucket);

      const storageRef = ref(storage, `test/test-file-${Date.now()}.txt`);
      console.log("Storage reference:", storageRef);

      const testContent = "Test content created at " + new Date().toISOString();
      console.log("Uploading test content:", testContent);

      const snapshot = await uploadString(storageRef, testContent);
      console.log("Test content uploaded successfully:", snapshot);

      const url = await getDownloadURL(storageRef);
      console.log("Download URL obtained:", url);

      setTestResults((prev) => ({
        ...prev,
        [testId]: {
          success: true,
          message: "Successfully uploaded test file",
          details: { downloadUrl: url },
        },
      }));
    } catch (err) {
      console.error("Storage basic test failed:", err);
      setErrors((prev) => ({
        ...prev,
        [testId]: err.message || "Unknown error",
      }));
      setTestResults((prev) => ({
        ...prev,
        [testId]: {
          success: false,
          message: "Failed to upload test file",
          details: { error: err.message },
        },
      }));
    } finally {
      setLoading((prev) => ({ ...prev, [testId]: false }));
    }
  };

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImageFile(e.target.files[0]);
    }
  };

  const runAddBlogTest = async () => {
    const testId = "addBlog";
    setLoading((prev) => ({ ...prev, [testId]: true }));
    setErrors((prev) => ({ ...prev, [testId]: null }));

    try {
      console.log("Starting addBlog helper function test...");

      // Prepare blog data
      const testBlogData = {
        title: blogData.title,
        content: blogData.content,
        tags: blogData.tags
          ? blogData.tags.split(",").map((tag) => tag.trim())
          : [],
        category: blogData.category || "Test",
      };

      console.log(
        "Blog data to be added:",
        JSON.stringify({
          title: testBlogData.title,
          contentLength: testBlogData.content.length,
          tags: testBlogData.tags,
          category: testBlogData.category,
        })
      );

      // Upload image if available
      if (imageFile) {
        console.log("Uploading test image:", imageFile.name);
        const imageUrl = await uploadImage(imageFile);
        console.log("Image uploaded successfully:", imageUrl);
        testBlogData.imageUrl = imageUrl;
      }

      // Add blog using helper function
      const result = await addBlog(testBlogData);
      console.log("Blog added successfully:", result);

      setTestResults((prev) => ({
        ...prev,
        [testId]: {
          success: true,
          message: "Successfully added test blog",
          details: { blogId: result.id },
        },
      }));
    } catch (err) {
      console.error("Add blog test failed:", err);
      setErrors((prev) => ({
        ...prev,
        [testId]: err.message || "Unknown error",
      }));
      setTestResults((prev) => ({
        ...prev,
        [testId]: {
          success: false,
          message: "Failed to add test blog",
          details: { error: err.message },
        },
      }));
    } finally {
      setLoading((prev) => ({ ...prev, [testId]: false }));
    }
  };

  const runDirectBlogTest = async () => {
    const testId = "directBlog";
    setLoading((prev) => ({ ...prev, [testId]: true }));
    setErrors((prev) => ({ ...prev, [testId]: null }));

    try {
      console.log("Starting direct blog creation test...");

      // Upload image if available
      let imageUrl = "";
      if (imageFile) {
        console.log("Uploading test image directly:", imageFile.name);
        const storageRef = ref(
          storage,
          `blog-images/test-${Date.now()}-${imageFile.name}`
        );
        const snapshot = await uploadBytes(storageRef, imageFile);
        imageUrl = await getDownloadURL(snapshot.ref);
        console.log("Image uploaded successfully:", imageUrl);
      }

      // Prepare blog data
      const testBlogData = {
        title: blogData.title,
        content: blogData.content,
        tags: blogData.tags
          ? blogData.tags.split(",").map((tag) => tag.trim())
          : [],
        category: blogData.category || "Test",
        imageUrl,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      };

      console.log(
        "Blog data to be added directly:",
        JSON.stringify({
          title: testBlogData.title,
          contentLength: testBlogData.content.length,
          hasImage: !!testBlogData.imageUrl,
          tags: testBlogData.tags,
          category: testBlogData.category,
        })
      );

      // Add the document to Firestore
      const blogsCollection = collection(db, "blogs");
      const docRef = await addDoc(blogsCollection, testBlogData);
      console.log("Blog added directly with ID:", docRef.id);

      setTestResults((prev) => ({
        ...prev,
        [testId]: {
          success: true,
          message: "Successfully added blog directly",
          details: { blogId: docRef.id },
        },
      }));
    } catch (err) {
      console.error("Direct blog test failed:", err);
      setErrors((prev) => ({
        ...prev,
        [testId]: err.message || "Unknown error",
      }));
      setTestResults((prev) => ({
        ...prev,
        [testId]: {
          success: false,
          message: "Failed to add blog directly",
          details: { error: err.message },
        },
      }));
    } finally {
      setLoading((prev) => ({ ...prev, [testId]: false }));
    }
  };

  return (
    <div className="container py-5">
      <h1 className="mb-4">Firebase Direct Test Page</h1>
      <p className="lead mb-4">
        This page allows you to directly test your Firebase integration without
        going through the add-blog form.
      </p>

      <FirebaseEnvironmentCheck />

      <TestBlock title="1. Basic Firestore Test">
        <p>
          Tests basic connectivity to Firestore by creating a test document.
        </p>
        {errors.firestoreBasic && (
          <div className="alert alert-danger mb-3">{errors.firestoreBasic}</div>
        )}
        {testResults.firestoreBasic?.success && (
          <div className="alert alert-success mb-3">
            {testResults.firestoreBasic.message}
            {testResults.firestoreBasic.details?.docId && (
              <div className="mt-2">
                Document ID: {testResults.firestoreBasic.details.docId}
              </div>
            )}
          </div>
        )}
        <button
          className="btn btn-primary"
          onClick={runFirestoreBasicTest}
          disabled={loading.firestoreBasic}
        >
          {loading.firestoreBasic ? "Testing..." : "Run Firestore Test"}
        </button>
      </TestBlock>

      <TestBlock title="2. Basic Storage Test">
        <p>
          Tests basic connectivity to Firebase Storage by uploading a text file.
        </p>
        {errors.storageBasic && (
          <div className="alert alert-danger mb-3">{errors.storageBasic}</div>
        )}
        {testResults.storageBasic?.success && (
          <div className="alert alert-success mb-3">
            {testResults.storageBasic.message}
            {testResults.storageBasic.details?.downloadUrl && (
              <div className="mt-2">
                <a
                  href={testResults.storageBasic.details.downloadUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View uploaded file
                </a>
              </div>
            )}
          </div>
        )}
        <button
          className="btn btn-primary"
          onClick={runStorageBasicTest}
          disabled={loading.storageBasic}
        >
          {loading.storageBasic ? "Testing..." : "Run Storage Test"}
        </button>
      </TestBlock>

      <TestBlock title="3. Add Blog Helper Test">
        <p>Tests the addBlog helper function with custom data.</p>
        <div className="mb-3">
          <div className="form-group mb-2">
            <label htmlFor="title">Blog Title</label>
            <input
              type="text"
              className="form-control"
              id="title"
              value={blogData.title}
              onChange={(e) =>
                setBlogData((prev) => ({ ...prev, title: e.target.value }))
              }
            />
          </div>
          <div className="form-group mb-2">
            <label htmlFor="content">Blog Content</label>
            <textarea
              className="form-control"
              id="content"
              rows="3"
              value={blogData.content}
              onChange={(e) =>
                setBlogData((prev) => ({ ...prev, content: e.target.value }))
              }
            ></textarea>
          </div>
          <div className="form-group mb-2">
            <label htmlFor="tags">Tags (comma-separated)</label>
            <input
              type="text"
              className="form-control"
              id="tags"
              value={blogData.tags}
              onChange={(e) =>
                setBlogData((prev) => ({ ...prev, tags: e.target.value }))
              }
            />
          </div>
          <div className="form-group mb-2">
            <label htmlFor="category">Category</label>
            <input
              type="text"
              className="form-control"
              id="category"
              value={blogData.category}
              onChange={(e) =>
                setBlogData((prev) => ({ ...prev, category: e.target.value }))
              }
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="image">Image (optional)</label>
            <input
              type="file"
              className="form-control"
              id="image"
              onChange={handleImageChange}
              accept="image/*"
            />
            {imageFile && (
              <div className="mt-2">
                Selected file: {imageFile.name} (
                {Math.round(imageFile.size / 1024)} KB)
              </div>
            )}
          </div>
        </div>

        {errors.addBlog && (
          <div className="alert alert-danger mb-3">{errors.addBlog}</div>
        )}
        {testResults.addBlog?.success && (
          <div className="alert alert-success mb-3">
            {testResults.addBlog.message}
            {testResults.addBlog.details?.blogId && (
              <div className="mt-2">
                Blog ID: {testResults.addBlog.details.blogId}
              </div>
            )}
          </div>
        )}
        <button
          className="btn btn-primary"
          onClick={runAddBlogTest}
          disabled={loading.addBlog}
        >
          {loading.addBlog ? "Testing..." : "Test Add Blog Helper"}
        </button>
      </TestBlock>

      <TestBlock title="4. Direct Firestore Blog Test">
        <p>
          Tests adding a blog post directly to Firestore (bypassing helper
          functions).
        </p>
        {errors.directBlog && (
          <div className="alert alert-danger mb-3">{errors.directBlog}</div>
        )}
        {testResults.directBlog?.success && (
          <div className="alert alert-success mb-3">
            {testResults.directBlog.message}
            {testResults.directBlog.details?.blogId && (
              <div className="mt-2">
                Blog ID: {testResults.directBlog.details.blogId}
              </div>
            )}
          </div>
        )}
        <button
          className="btn btn-primary"
          onClick={runDirectBlogTest}
          disabled={loading.directBlog}
        >
          {loading.directBlog ? "Testing..." : "Test Direct Blog Creation"}
        </button>
      </TestBlock>

      <div className="border rounded p-3 mb-4 bg-light">
        <h5>Troubleshooting Tips</h5>
        <ul className="mb-0">
          <li>Check your browser console for detailed error messages</li>
          <li>Verify your Firebase security rules in the Firebase Console</li>
          <li>Make sure your storage bucket name is correctly configured</li>
          <li>
            Check that the "blogs" collection exists or can be created in
            Firestore
          </li>
          <li>Verify that the image file size is not too large</li>
        </ul>
      </div>
    </div>
  );
}
