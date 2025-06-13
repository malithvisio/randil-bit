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
      if (!Quill.imports["modules/imageResize"]) {
        Quill.register("modules/imageResize", ImageResize);
      }
    }
    return RQ;
  },
  {
    ssr: false,
    loading: () => <p>Loading Editor...</p>,
  }
);

export default function BlogEditor({ value, onChange }) {
  useEffect(() => {
    // Register keyboard bindings
    if (typeof window !== "undefined") {
      const Quill = require("quill");
      const quill = new Quill("#editor", { modules, formats });
    }
  }, []);

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
          background: #fff;
          border: 1px solid #e2e8f0;
        }

        /* Custom button styles with visible text */
        .ql-toolbar .ql-bold::after {
          content: "B";
          font-weight: bold;
          font-family: Arial, sans-serif;
          font-size: 14px;
          color: #1a1a1a;
        }

        .ql-toolbar .ql-italic::after {
          content: "I";
          font-style: italic;
          font-family: Arial, sans-serif;
          font-size: 14px;
          color: #1a1a1a;
        }

        .ql-toolbar .ql-underline::after {
          content: "U";
          text-decoration: underline;
          font-family: Arial, sans-serif;
          font-size: 14px;
          color: #1a1a1a;
        }

        .ql-toolbar .ql-strike::after {
          content: "S";
          text-decoration: line-through;
          font-family: Arial, sans-serif;
          font-size: 14px;
          color: #1a1a1a;
        }

        /* Alignment buttons */
        .ql-toolbar .ql-align svg {
          display: block;
          width: 18px;
          height: 18px;
          stroke: #1a1a1a;
          fill: none;
          opacity: 0.8;
          transition: all 0.2s ease;
        }

        .ql-toolbar .ql-align:hover svg {
          stroke: #4f46e5;
          opacity: 1;
        }

        .ql-toolbar .ql-align.ql-active svg {
          stroke: white;
          opacity: 1;
        }

        /* Remove custom text content since we're using SVG icons */
        .ql-toolbar .ql-align[value=""]::after,
        .ql-toolbar .ql-align[value="center"]::after,
        .ql-toolbar .ql-align[value="right"]::after,
        .ql-toolbar .ql-align[value="justify"]::after {
          content: none;
        }

        /* Tooltips for alignment buttons */
        .ql-toolbar .ql-align[value=""]:hover::before {
          content: "Left Align";
          position: absolute;
          bottom: -25px;
          left: 50%;
          transform: translateX(-50%);
          background: #1f2937;
          color: white;
          padding: 4px 8px;
          border-radius: 4px;
          font-size: 12px;
          white-space: nowrap;
          pointer-events: none;
          z-index: 10;
        }

        .ql-toolbar .ql-align[value="center"]:hover::before {
          content: "Center Align";
        }

        .ql-toolbar .ql-align[value="right"]:hover::before {
          content: "Right Align";
        }

        .ql-toolbar .ql-align[value="justify"]:hover::before {
          content: "Justify";
        }

        /* Remove general SVG hiding since we want alignment icons visible */
        .ql-toolbar button svg {
          display: none;
        }

        .ql-toolbar .ql-align svg {
          display: block;
        }

        /* Editor content alignment styles */
        .ql-editor {
          // ...existing editor styles...
        }

        .ql-editor .ql-align-center {
          text-align: center;
        }

        .ql-editor .ql-align-right {
          text-align: right;
        }

        .ql-editor .ql-align-justify {
          text-align: justify;
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
