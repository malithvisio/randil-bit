"use client";

import { useEffect } from "react";
import Layout from "@/components/layout/Layout";

export default function ErrorBoundary({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Blog page error:", error);
  }, [error]);

  return (
    <Layout
      headerStyle={2}
      footerStyle={2}
      breadcrumbTitle="Blog Page Error"
      imgbg="/assets/images/page/destbg.jpg"
    >
      <div className="container my-5 py-5">
        <div className="row justify-content-center">
          <div className="col-md-8 text-center">
            <div className="alert alert-danger">
              <h2>Something went wrong!</h2>
              <p className="mb-4">
                {error.message ||
                  "An unexpected error occurred while loading the blog page."}
              </p>
              <button className="button-primary" onClick={() => reset()}>
                Try again
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
