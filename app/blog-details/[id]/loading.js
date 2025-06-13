export default function Loading() {
  return (
    <div className="tf-container">
      <div className="loading-content text-center pd-main">
        <div className="loading-spinner">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
    </div>
  );
}