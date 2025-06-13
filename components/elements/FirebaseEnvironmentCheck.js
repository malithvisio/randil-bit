"use client";

import { useState, useEffect } from "react";
import { getApps } from "firebase/app";
import { db, storage } from "@/libs/firebase";

export default function FirebaseEnvironmentCheck() {
  const [envStatus, setEnvStatus] = useState({
    firebaseConfig: false,
    firebaseInitialized: false,
    firestoreAvailable: false,
    storageAvailable: false,
    browserEnvironment: false,
    errors: [],
  });

  useEffect(() => {
    const checkEnvironment = async () => {
      const status = {
        firebaseConfig: false,
        firebaseInitialized: false,
        firestoreAvailable: false,
        storageAvailable: false,
        browserEnvironment: typeof window !== "undefined",
        errors: [],
      };

      try {
        // Check if Firebase is initialized
        const apps = getApps();
        status.firebaseInitialized = apps.length > 0;

        // Check if Firestore is available
        if (db) {
          status.firestoreAvailable = true;
        } else {
          status.errors.push("Firestore (db) is not available");
        }

        // Check if Storage is available
        if (storage) {
          status.storageAvailable = true;
        } else {
          status.errors.push("Firebase Storage is not available");
        }

        // Check if we're in a browser environment
        if (!status.browserEnvironment) {
          status.errors.push("Not running in browser environment");
        }
      } catch (error) {
        status.errors.push(`Error checking environment: ${error.message}`);
      }

      setEnvStatus(status);
    };

    checkEnvironment();
  }, []);

  // Overall status
  const overallStatus =
    envStatus.firebaseInitialized &&
    envStatus.firestoreAvailable &&
    envStatus.storageAvailable &&
    envStatus.browserEnvironment;
  return (
    <div className="firebase-env-check border rounded p-3 mb-4">
      <h5>Firebase Environment Status</h5>

      <div
        className={`alert ${overallStatus ? "alert-success" : "alert-warning"}`}
      >
        <strong>Status:</strong> {overallStatus ? "Ready" : "Issues Detected"}
      </div>

      <ul className="list-group mb-3">
        <li
          className={`list-group-item ${
            envStatus.firebaseInitialized
              ? "list-group-item-success"
              : "list-group-item-danger"
          }`}
        >
          Firebase Initialized: {envStatus.firebaseInitialized ? "Yes" : "No"}
        </li>
        <li
          className={`list-group-item ${
            envStatus.firestoreAvailable
              ? "list-group-item-success"
              : "list-group-item-danger"
          }`}
        >
          Firestore Available: {envStatus.firestoreAvailable ? "Yes" : "No"}
        </li>
        <li
          className={`list-group-item ${
            envStatus.storageAvailable
              ? "list-group-item-success"
              : "list-group-item-danger"
          }`}
        >
          Storage Available: {envStatus.storageAvailable ? "Yes" : "No"}
          {envStatus.storageAvailable && (
            <div className="mt-1 small">
              Storage bucket:{" "}
              {storage?.app?.options?.storageBucket || "Unknown"}
            </div>
          )}
        </li>
        <li
          className={`list-group-item ${
            envStatus.browserEnvironment
              ? "list-group-item-success"
              : "list-group-item-danger"
          }`}
        >
          Browser Environment: {envStatus.browserEnvironment ? "Yes" : "No"}
        </li>
      </ul>

      {envStatus.errors.length > 0 && (
        <div className="alert alert-danger">
          <strong>Errors:</strong>
          <ul className="mb-0 mt-1">
            {envStatus.errors.map((error, index) => (
              <li key={index}>{error}</li>
            ))}
          </ul>
        </div>
      )}
      <div className="mt-2 small text-muted">
        <strong>Note:</strong> Make sure you have set up the proper Firebase
        security rules in your Firebase console. Check the
        firebase-security-rules.txt and firebase-storage-rules.txt files for
        reference.
      </div>

      <div className="text-muted small">
        <p>If you see issues above, please check:</p>
        <ol className="mb-0">
          <li>Firebase configuration in libs/firebase.ts</li>
          <li>Firebase security rules in your Firebase Console</li>
          <li>Network connectivity to Firebase services</li>
        </ol>
      </div>
    </div>
  );
}
