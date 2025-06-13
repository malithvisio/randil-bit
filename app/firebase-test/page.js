"use client";

import FirebaseTestComponent from "@/components/elements/FirebaseTestComponent";

export default function FirebaseTestPage() {
  return (
    <div className="container my-5">
      <h1 className="mb-4">Firebase Integration Test</h1>
      <p className="mb-5">
        Use this page to test your Firebase connection directly from the client
        side.
      </p>

      <FirebaseTestComponent />
    </div>
  );
}
