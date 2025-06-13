"use client";

import { useState } from "react";
import { db, verifyConnection } from "@/libs/firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";

export default function FirebaseTest() {
  const [testMessage, setTestMessage] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const testFirebase = async () => {
    try {
      setError(null);
      console.log("Starting Firebase test...");

      // Verify Firebase connection first
      await verifyConnection();
      console.log("Firebase connection verified successfully");

      // Test data
      const testData = {
        message: testMessage || "Test message",
        timestamp: new Date().toISOString(),
      };

      console.log("Adding document to Firestore...");
      // Add document directly to Firestore
      const docRef = await addDoc(collection(db, "test"), testData);
      console.log("Document added with ID:", docRef.id);

      // Fetch all documents from the test collection
      console.log("Fetching documents...");
      const querySnapshot = await getDocs(collection(db, "test"));
      const documents = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log("Documents retrieved:", documents);

      setResult(documents);
    } catch (err) {
      console.error("Firebase Test Error:", err);
      setError(err.message);
      setResult(null);
    }
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="text-lg font-semibold mb-4">Firebase Connection Test</h3>

      <div className="mb-4">
        <input
          type="text"
          value={testMessage}
          onChange={(e) => setTestMessage(e.target.value)}
          placeholder="Enter test message"
          className="p-2 border rounded w-full"
        />
      </div>

      {error && (
        <div className="mt-4 p-3 bg-red-100 text-red-700 rounded">
          Error: {error}
        </div>
      )}

      {result && (
        <div className="mt-4">
          <h4 className="font-semibold mb-2">Test Results:</h4>
          <pre className="bg-gray-100 p-3 rounded overflow-auto">
            {JSON.stringify(result, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
}
