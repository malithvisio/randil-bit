"use client";

export default function Loading() {
  return (
    <div className="blog-loading-container">
      {[1, 2, 3].map((i) => (
        <div key={i} className="blog-skeleton">
          <div className="skeleton-image animate-pulse"></div>
          <div className="skeleton-content">
            <div className="skeleton-meta animate-pulse">
              <div className="skeleton-date"></div>
              <div className="skeleton-category"></div>
            </div>
            <div className="skeleton-title animate-pulse"></div>
            <div className="skeleton-excerpt animate-pulse">
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
            </div>
          </div>
        </div>
      ))}

      <style jsx>{`
        .blog-loading-container {
          padding: 2rem 0;
        }

        .blog-skeleton {
          margin-bottom: 2rem;
          background: white;
          border-radius: 8px;
          overflow: hidden;
        }

        .skeleton-image {
          width: 100%;
          height: 300px;
          background-color: #e2e8f0;
        }

        .skeleton-content {
          padding: 1.5rem;
        }

        .skeleton-meta {
          display: flex;
          gap: 1rem;
          margin-bottom: 1rem;
        }

        .skeleton-date,
        .skeleton-category {
          height: 20px;
          width: 100px;
          background-color: #e2e8f0;
          border-radius: 4px;
        }

        .skeleton-title {
          height: 32px;
          width: 80%;
          background-color: #e2e8f0;
          margin-bottom: 1rem;
          border-radius: 4px;
        }

        .skeleton-excerpt .line {
          height: 16px;
          background-color: #e2e8f0;
          margin-bottom: 0.5rem;
          border-radius: 4px;
        }

        .skeleton-excerpt .line:nth-child(1) {
          width: 100%;
        }
        .skeleton-excerpt .line:nth-child(2) {
          width: 90%;
        }
        .skeleton-excerpt .line:nth-child(3) {
          width: 70%;
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
