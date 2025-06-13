"use client";

import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), {
  ssr: false,
  loading: () => <p>Loading editor...</p>,
});

// Import the styles in a way that works with Next.js
import "react-quill/dist/quill.snow.css";

const modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image"],
    ["clean"],
  ],
  clipboard: {
    matchVisual: false,
  },
};

const formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
];

export default function BlogQuillEditor({ value, onChange }) {
  return (
    <div className="blog-editor-container">
      <ReactQuill
        theme="snow"
        value={value}
        onChange={onChange}
        modules={modules}
        formats={formats}
        placeholder="Start writing your blog post..."
      />
      <style jsx global>{`
        .blog-editor-container {
          background: white;
          border: 1px solid #ddd;
          border-radius: 8px;
          overflow: hidden;
          margin-bottom: 1rem;
        }

        .blog-editor-container .quill {
          display: flex;
          flex-direction: column;
          height: 500px;
        }

        .ql-toolbar.ql-snow {
          border: none !important;
          border-bottom: 1px solid #e2e8f0 !important;
          background: #f8fafc;
          padding: 12px;
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .ql-container.ql-snow {
          border: none !important;
          font-size: 16px;
          font-family: inherit;
          flex-grow: 1;
        }

        .ql-editor {
          padding: 20px;
          min-height: 400px;
          font-size: 16px;
          line-height: 1.8;
        }
        .ql-toolbar.ql-snow .ql-formats {
          margin-right: 15px;
        }

        .ql-snow .ql-toolbar button {
          width: 32px;
          height: 32px;
          padding: 6px;
          border-radius: 4px;
        }

        .ql-snow .ql-toolbar button:hover {
          background-color: #f1f5f9;
          color: #4f46e5;
        }

        .ql-snow .ql-toolbar button.ql-active {
          background-color: #e2e8f0;
          color: #4f46e5;
        }

        /* Dropdown styling */
        .ql-snow .ql-picker {
          height: 32px;
          border-radius: 4px;
        }

        .ql-snow .ql-picker:hover {
          background-color: #f1f5f9;
        }

        .ql-snow .ql-picker.ql-expanded .ql-picker-label {
          border-color: transparent;
        }

        .ql-snow .ql-picker-options {
          border: 1px solid #e2e8f0;
          border-radius: 4px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        /* Editor content styling */
        .ql-editor h1 {
          font-size: 2em;
          font-weight: 600;
        }

        .ql-editor h2 {
          font-size: 1.5em;
          font-weight: 600;
        }

        .ql-editor p {
          margin-bottom: 1em;
        }

        .ql-editor blockquote {
          border-left: 4px solid #e2e8f0;
          padding-left: 16px;
          color: #4a5568;
        }

        .ql-editor img {
          max-width: 100%;
          margin: 1em 0;
        }
      `}</style>
    </div>
  );
}
