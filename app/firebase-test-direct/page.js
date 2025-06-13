"use client";

import { useState } from "react";
import { db, storage } from "@/libs/firebase";
import {
  collection,
  addDoc,
  getDocs,
  serverTimestamp,
} from "firebase/firestore";
import { ref, uploadString, getDownloadURL } from "firebase/storage";

export default function FirebaseTestPage() {
  const [testResults, setTestResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [firestoreDocId, setFirestoreDocId] = useState(null);
  const [downloadUrl, setDownloadUrl] = useState(null);

  const runFirestoreTest = async () => {
    setLoading(true);
    setError(null);

    try {
      console.log("Starting Firestore test...");
      console.log("Firestore instance:", db);

      const testCollection = collection(db, "test");
      console.log("Test collection reference:", testCollection);

      const testData = {
        message: "Test document created at " + new Date().toISOString(),
        createdAt: serverTimestamp(),
      };
      console.log("Test data to be added:", testData);

      const docRef = await addDoc(testCollection, testData);
      console.log("Test document created with ID:", docRef.id);
      setFirestoreDocId(docRef.id);

      // Fetch test documents
      const querySnapshot = await getDocs(collection(db, "test"));
      const documents = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log("Retrieved test documents:", documents);

      setTestResults({
        firestoreSuccess: true,
        documents: documents,
      });

      return docRef.id;
    } catch (err) {
      console.error("Firestore test failed:", err);
      setError(`Firestore test failed: ${err.message}`);
      setTestResults((prev) => ({
        ...prev,
        firestoreSuccess: false,
      }));
      return null;
    } finally {
      setLoading((prev) => ({ ...prev, firestore: false }));
    }
  };

  const runStorageTest = async () => {
    setLoading(true);
    setError(null);

    try {
      console.log("Starting Storage test...");
      console.log("Storage instance:", storage);

      const storageRef = ref(storage, `test/test-file-${Date.now()}.txt`);
      console.log("Storage reference:", storageRef);

      const testContent = "Test content created at " + new Date().toISOString();
      console.log("Uploading test content:", testContent);

      await uploadString(storageRef, testContent);
      console.log("Test content uploaded successfully");

      const url = await getDownloadURL(storageRef);
      console.log("Download URL obtained:", url);
      setDownloadUrl(url);

      setTestResults((prev) => ({
        ...prev,
        storageSuccess: true,
        downloadUrl: url,
      }));

      return url;
    } catch (err) {
      console.error("Storage test failed:", err);
      setError(`Storage test failed: ${err.message}`);
      setTestResults((prev) => ({
        ...prev,
        storageSuccess: false,
      }));
      return null;
    } finally {
      setLoading((prev) => ({ ...prev, storage: false }));
    }
  };

  const runAllTests = async () => {
    setLoading(true);
    setError(null);
    setTestResults(null);

    try {
      await runFirestoreTest();
      await runStorageTest();
    } catch (err) {
      console.error("Tests failed:", err);
      setError(`Tests failed: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container my-5">
      <h1 className="mb-4">Firebase Connection Test</h1>
      <p className="mb-4">
        Use this page to test your Firebase connection and diagnose issues.
      </p>

      <div className="card mb-4">
        <div className="card-header">
          <h5 className="mb-0">Firebase Test Controls</h5>
        </div>
        <div className="card-body">
          <div className="d-flex gap-2 mb-3">
            <button
              className="btn btn-primary"
              onClick={runAllTests}
              disabled={loading}
            >
              {loading ? "Running Tests..." : "Run All Tests"}
            </button>
            <button
              className="btn btn-outline-primary"
              onClick={runFirestoreTest}
              disabled={loading}
            >
              Test Firestore Only
            </button>
            <button
              className="btn btn-outline-primary"
              onClick={runStorageTest}
              disabled={loading}
            >
              Test Storage Only
            </button>
          </div>

          {error && (
            <div className="alert alert-danger">
              <strong>Error:</strong> {error}
            </div>
          )}
        </div>
      </div>

      {testResults && (
        <div className="row">
          {/* Firestore Test Results */}
          <div className="col-md-6 mb-4">
            <div className="card h-100">
              <div className="card-header">
                <h5 className="mb-0">Firestore Test Results</h5>
              </div>
              <div className="card-body">
                {testResults.firestoreSuccess ? (
                  <>
                    <div className="alert alert-success">
                      <strong>Success!</strong> Firestore connection is working.
                    </div>
                    {firestoreDocId && (
                      <p>
                        <strong>Created Document ID:</strong> {firestoreDocId}
                      </p>
                    )}
                    {testResults.documents && (
                      <>
                        <h6>Recent Test Documents:</h6>
                        <ul className="list-group">
                          {testResults.documents.slice(0, 5).map((doc) => (
                            <li key={doc.id} className="list-group-item">
                              <strong>ID:</strong> {doc.id}
                              <br />
                              <strong>Message:</strong> {doc.message}
                              <br />
                              <strong>Created:</strong>{" "}
                              {doc.createdAt
                                ? new Date(
                                    doc.createdAt.seconds * 1000
                                  ).toLocaleString()
                                : "Pending"}
                            </li>
                          ))}
                        </ul>
                      </>
                    )}
                  </>
                ) : (
                  <div className="alert alert-danger">
                    <strong>Failed!</strong> Could not connect to Firestore.
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Storage Test Results */}
          <div className="col-md-6 mb-4">
            <div className="card h-100">
              <div className="card-header">
                <h5 className="mb-0">Storage Test Results</h5>
              </div>
              <div className="card-body">
                {testResults.storageSuccess ? (
                  <>
                    <div className="alert alert-success">
                      <strong>Success!</strong> Firebase Storage connection is
                      working.
                    </div>
                    {downloadUrl && (
                      <>
                        <p>
                          <strong>File URL:</strong>
                          <br />
                          <a
                            href={downloadUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-break"
                          >
                            {downloadUrl}
                          </a>
                        </p>
                        <div className="d-grid">
                          <a
                            href={downloadUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-sm btn-outline-primary"
                          >
                            Open File in New Tab
                          </a>
                        </div>
                      </>
                    )}
                  </>
                ) : (
                  <div className="alert alert-danger">
                    <strong>Failed!</strong> Could not connect to Firebase
                    Storage.
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="card mb-4">
        <div className="card-header">
          <h5 className="mb-0">Troubleshooting Tips</h5>
        </div>
        <div className="card-body">
          <ol>
            <li>
              <strong>Firebase Configuration:</strong> Ensure your Firebase
              config in
              <code>libs/firebase.ts</code> matches exactly what's in your
              Firebase Console.
            </li>
            <li>
              <strong>Security Rules:</strong> Check your Firestore and Storage
              security rules in the Firebase Console to ensure they allow the
              operations you're trying to perform.
            </li>
            <li>
              <strong>Firebase Project Setup:</strong> Ensure you've created
              both Firestore Database and Storage in your Firebase project.
            </li>
            <li>
              <strong>Network Issues:</strong> Check if your network or firewall
              is blocking connections to Firebase services.
            </li>
            <li>
              <strong>Browser Extensions:</strong> Try disabling browser
              extensions, especially ad-blockers or privacy tools that might
              interfere with Firebase connections.
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}
