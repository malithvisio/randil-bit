"use client";

export default function Loading() {
  return (
    <div className="blog-edit-loading">
      <div className="blog-edit-skeleton">
        <div className="skeleton-header animate-pulse">
          <div className="skeleton-title"></div>
          <div className="skeleton-subtitle"></div>
        </div>

        <div className="skeleton-form">
          <div className="skeleton-input animate-pulse"></div>
          <div className="skeleton-input animate-pulse"></div>
          <div className="skeleton-editor animate-pulse"></div>
          <div className="skeleton-row">
            <div className="skeleton-input half animate-pulse"></div>
            <div className="skeleton-input half animate-pulse"></div>
          </div>
          <div className="skeleton-button animate-pulse"></div>
        </div>
      </div>

      <style jsx>{`
        .blog-edit-loading {
          padding: 2rem 0;
        }

        .blog-edit-skeleton {
          max-width: 1000px;
          margin: 0 auto;
          padding: 2rem;
        }

        .skeleton-header {
          margin-bottom: 2rem;
        }

        .skeleton-title {
          height: 32px;
          width: 200px;
          background-color: #e2e8f0;
          margin-bottom: 1rem;
          border-radius: 4px;
        }

        .skeleton-subtitle {
          height: 24px;
          width: 300px;
          background-color: #e2e8f0;
          border-radius: 4px;
        }

        .skeleton-form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .skeleton-input {
          height: 48px;
          width: 100%;
          background-color: #e2e8f0;
          border-radius: 4px;
        }

        .skeleton-input.half {
          width: 48%;
        }

        .skeleton-editor {
          height: 400px;
          width: 100%;
          background-color: #e2e8f0;
          border-radius: 4px;
        }

        .skeleton-row {
          display: flex;
          justify-content: space-between;
          gap: 1rem;
        }

        .skeleton-button {
          height: 48px;
          width: 200px;
          background-color: #e2e8f0;
          border-radius: 4px;
          margin-top: 1rem;
        }

        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        @keyframes pulse {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }
      `}</style>
    </div>
  );
}
