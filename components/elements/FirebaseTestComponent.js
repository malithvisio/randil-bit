import { useState } from "react";
import { db, storage } from "@/libs/firebase";
import {
  collection,
  addDoc,
  getDocs,
  serverTimestamp,
} from "firebase/firestore";
import { ref, uploadString, getDownloadURL } from "firebase/storage";

export default function FirebaseTestComponent() {
  const [testResult, setTestResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const runFirebaseTest = async () => {
    setLoading(true);
    setError(null);

    try {
      console.log("Testing Firebase connections...");

      // Test Firestore
      console.log("Testing Firestore connection...");
      console.log("Firestore db instance:", db);

      const testCollection = collection(db, "test");
      console.log("Test collection reference:", testCollection);

      const testDoc = await addDoc(testCollection, {
        message: "Test document from client",
        timestamp: serverTimestamp(),
      });
      console.log(
        "Firestore test successful! Created document with ID:",
        testDoc.id
      );

      // Test Storage
      console.log("Testing Firebase Storage connection...");
      console.log("Storage instance:", storage);

      const storageRef = ref(storage, "test/test-image-client.txt");
      console.log("Storage reference:", storageRef);

      await uploadString(storageRef, "Test data from client");
      const downloadURL = await getDownloadURL(storageRef);
      console.log("Storage test successful! URL:", downloadURL);

      // Fetch test documents
      const querySnapshot = await getDocs(collection(db, "test"));
      const documents = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setTestResult({
        success: true,
        firestoreId: testDoc.id,
        storageUrl: downloadURL,
        documents,
      });
    } catch (err) {
      console.error("Firebase test failed:", err);
      setError(err.message || "An unknown error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="firebase-test">
      <h2 className="mb-4">Firebase Connection Test</h2>

      <button
        className="btn btn-primary mb-4"
        onClick={runFirebaseTest}
        disabled={loading}
      >
        {loading ? "Testing..." : "Run Firebase Test"}
      </button>

      {error && (
        <div className="alert alert-danger mb-4">
          <strong>Error:</strong> {error}
        </div>
      )}

      {testResult && (
        <div className="test-results">
          <div className="alert alert-success mb-4">
            <strong>Test Successful!</strong>
          </div>

          <div className="card mb-4">
            <div className="card-header">
              <h5 className="mb-0">Firestore Test</h5>
            </div>
            <div className="card-body">
              <p>Created document ID: {testResult.firestoreId}</p>
            </div>
          </div>

          <div className="card mb-4">
            <div className="card-header">
              <h5 className="mb-0">Storage Test</h5>
            </div>
            <div className="card-body">
              <p>
                File URL:{" "}
                <a
                  href={testResult.storageUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {testResult.storageUrl}
                </a>
              </p>
            </div>
          </div>

          <div className="card">
            <div className="card-header">
              <h5 className="mb-0">Recent Test Documents</h5>
            </div>
            <div className="card-body">
              <ul className="list-group">
                {testResult.documents.slice(0, 5).map((doc) => (
                  <li key={doc.id} className="list-group-item">
                    ID: {doc.id} - Message: {doc.message}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
