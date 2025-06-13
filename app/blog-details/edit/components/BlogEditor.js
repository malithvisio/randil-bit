"use client";

import { useEffect } from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import { modules, formats } from "../quillConfig";
import ImageResize from "quill-image-resize-module-react";

const ReactQuill = dynamic(
  async () => {
    const { default: RQ } = await import("react-quill");
    if (typeof window !== "undefined") {
      const Quill = require("quill");
      // Register the image resize module
      if (!Quill.imports["modules/imageResize"]) {
        Quill.register("modules/imageResize", ImageResize);
      }
    }
    return RQ;
  },
  {
    ssr: false,
    loading: () => (
      <div className="editor-loading">
        <div className="toolbar-skeleton animate-pulse"></div>
        <div className="content-skeleton animate-pulse"></div>
        <style jsx>{`
          .editor-loading {
            background: white;
            border-radius: 8px;
            overflow: hidden;
          }
          .toolbar-skeleton {
            height: 42px;
            background-color: #f8fafc;
            border-bottom: 1px solid #e2e8f0;
          }
          .content-skeleton {
            height: 400px;
            background-color: #f8fafc;
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
    ),
  }
);

export default function BlogEditor({ value, onChange }) {
  return (
    <div className="quill-wrapper">
      <ReactQuill
        theme="snow"
        modules={modules}
        formats={formats}
        value={value}
        onChange={onChange}
        className="blog-editor"
        placeholder="Write your blog post content here..."
      />
      <style jsx global>{`
        .quill-wrapper {
          background-color: white;
          border-radius: 8px;
          overflow: hidden;
        }
        .ql-container {
          font-size: 16px;
          height: 400px;
        }
        .ql-editor {
          min-height: 300px;
          padding: 20px;
          line-height: 1.6;
        }
        .ql-toolbar {
          border: none !important;
          border-bottom: 1px solid #e2e8f0 !important;
          background-color: #f8fafc;
          padding: 8px;
          display: flex;
          flex-wrap: wrap;
          gap: 5px;
        }
        .ql-formats {
          margin-right: 15px !important;
          display: flex;
          gap: 4px;
        }
        .ql-toolbar button {
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 6px !important;
          border-radius: 4px;
          transition: all 0.2s ease;
          position: relative;
        }
        .ql-toolbar button:hover {
          background-color: #eef2ff;
          color: #4f46e5 !important;
        }
        .ql-toolbar button.ql-active {
          background-color: #4f46e5;
          color: white !important;
        }
        .ql-toolbar button.ql-active:hover {
          background-color: #4338ca;
        }

        /* Specific styles for format buttons */
        .ql-bold,
        .ql-italic,
        .ql-underline {
          position: relative;
        }

        .ql-toolbar button.ql-active::after {
          content: "";
          position: absolute;
          top: 2px;
          right: 2px;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background-color: #10b981;
        }

        /* Icon colors */
        .ql-snow .ql-stroke {
          stroke: currentColor;
        }
        .ql-snow .ql-fill {
          fill: currentColor;
        }
        .ql-snow.ql-toolbar button.ql-active .ql-stroke,
        .ql-snow .ql-toolbar button.ql-active .ql-stroke {
          stroke: currentColor;
        }
        .ql-snow.ql-toolbar button.ql-active .ql-fill,
        .ql-snow .ql-toolbar button.ql-active .ql-fill {
          fill: currentColor;
        }

        /* Better text formatting */
        .ql-editor strong {
          font-weight: 600;
        }
        .ql-editor em {
          font-style: italic;
        }
        .ql-editor u {
          text-decoration: underline;
          text-underline-offset: 2px;
        }
      `}</style>
    </div>
  );
}
