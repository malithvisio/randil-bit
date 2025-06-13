"use client";

export default function Error({ error, reset }) {
  return (
    <div className="tf-container">
      <div className="error-content text-center pd-main">
        <h2>Something went wrong!</h2>
        <p>{error.message}</p>
        <button className="button-link" onClick={() => reset()}>
          Try again
        </button>
      </div>
    </div>
  );
}