"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

// Dynamically import React Quill without SSR
const ReactQuill = dynamic(
  async () => {
    // Wait for both imports to complete
    const [{ default: RQ }, { default: ImageResize }] = await Promise.all([
      import("react-quill"),
      import("quill-image-resize-module-react"),
    ]);

    // Register the module only on the client side
    if (typeof window !== "undefined") {
      const Quill = require("react-quill").Quill;
      Quill.register("modules/imageResize", ImageResize);
    }
    return RQ;
  },
  {
    ssr: false,
    loading: () => <div className="loading-editor">Loading editor...</div>,
  }
);

// Quill modules config
const modules = {
  clipboard: {
    matchVisual: false,
  },
  toolbar: {
    container: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      [{ font: [] }],
      [{ size: ["small", false, "large", "huge"] }],
      ["bold", "italic", "underline", "strike"],
      [{ color: [] }, { background: [] }],
      [{ align: [] }],
      [{ list: "ordered" }, { list: "bullet" }],
      ["blockquote", "code-block"],
      ["link", "image"],
      ["clean"],
    ],
    handlers: {
      bold: function (value) {
        const quill = this.quill;
        const range = quill.getSelection();

        if (range) {
          if (range.length > 0) {
            const format = quill.getFormat(range);
            quill.formatText(
              range.index,
              range.length,
              "bold",
              !format.bold,
              "user"
            );
          } else {
            const format = quill.getFormat();
            quill.format("bold", !format.bold, "user");
          }
        }
      },
      italic: function (value) {
        const quill = this.quill;
        const range = quill.getSelection();

        if (range) {
          if (range.length > 0) {
            const format = quill.getFormat(range);
            quill.formatText(
              range.index,
              range.length,
              "italic",
              !format.italic,
              "user"
            );
          } else {
            const format = quill.getFormat();
            quill.format("italic", !format.italic, "user");
          }
        }
      },
    },
  },
  keyboard: {
    bindings: {
      bold: {
        key: "B",
        shortKey: true,
        handler: function (range, context) {
          const format = this.quill.getFormat(range);
          this.quill.formatText(
            range.index,
            range.length,
            "bold",
            !format.bold,
            "user"
          );
          return false;
        },
      },
      italic: {
        key: "I",
        shortKey: true,
        handler: function (range, context) {
          const format = this.quill.getFormat(range);
          this.quill.formatText(
            range.index,
            range.length,
            "italic",
            !format.italic,
            "user"
          );
          return false;
        },
      },
    },
  },
  imageResize: {
    modules: ["Resize", "DisplaySize"],
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
  "color",
  "background",
  "align",
  "list",
  "bullet",
  "blockquote",
  "code-block",
  "link",
  "image",
];

export default function RichTextEditor({ value, onChange }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="loading-editor">Loading editor...</div>;
  }

  return (
    <div className="rich-text-editor">
      <ReactQuill
        theme="snow"
        value={value}
        onChange={onChange}
        modules={modules}
        formats={formats}
        className="editor"
        placeholder="Write your blog content here..."
      />
      <style jsx global>{`
        .rich-text-editor {
          background: white;
          border-radius: 8px;
          overflow: hidden;
        }
        .loading-editor {
          height: 400px;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #f8fafc;
          border: 1px solidrgb(0, 110, 255);
          border-radius: 8px;
        }
        .editor {
          height: 400px;
        }
        .ql-container {
          font-size: 16px;
          border: none !important;
        }
        .ql-editor {
          min-height: 300px;
          max-height: 600px;
          overflow-y: auto;
          padding: 20px;
        }
        .ql-toolbar {
          border: none !important;
          border-bottom: 1px solid #e2e8f0 !important;
          background: rgb(255, 187, 0);
          padding: 8px;
          transition: all 0.3s ease;
        }

        /* Format buttons container */
        .ql-formats {
          margin-right: 15px !important;
          display: flex;
          gap: 4px;
          opacity: 0.4;
          transition: opacity 0.3s ease;
        }

        /* Show format buttons on toolbar hover */
        .ql-toolbar:hover .ql-formats {
          opacity: 1;
        }

        /* Style for format buttons */
        .ql-formats button {
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 8px !important;
          border-radius: 6px;
          transition: all 0.2s ease;
          position: relative;
          background: transparent;
          border: 1px solid transparent;
        }

        /* Custom button styles */
        .ql-bold {
          font-weight: bold !important;
        }

        .ql-italic {
          font-style: italic !important;
        }

        .ql-underline {
          text-decoration: underline !important;
        }

        /* Hover state for buttons */
        .ql-formats button:hover {
          background-color: #eef2ff;
          color: #4f46e5 !important;
          border-color: #e2e8f0;
        }

        /* Active state for buttons */
        .ql-formats button.ql-active {
          background-color: #4f46e5;
          color: white !important;
          border-color: #4f46e5;
        }

        /* Active hover state */
        .ql-formats button.ql-active:hover {
          background-color: #4338ca;
          border-color: #4338ca;
        }

        /* Button labels */
        .ql-formats button::before {
          content: attr(aria-label);
          position: absolute;
          bottom: -30px;
          left: 50%;
          transform: translateX(-50%);
          background: #1f2937;
          color: white;
          padding: 4px 8px;
          border-radius: 4px;
          font-size: 12px;
          opacity: 0;
          visibility: hidden;
          transition: all 0.2s ease;
          white-space: nowrap;
          pointer-events: none;
        }

        /* Show labels on hover */
        .ql-formats button:hover::before {
          opacity: 1;
          visibility: visible;
        }

        /* Active state indicator */
        .ql-formats button.ql-active::after {
          content: "";
          position: absolute;
          top: 4px;
          right: 4px;
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

        /* Override active state icon colors */
        .ql-snow.ql-toolbar button.ql-active .ql-stroke,
        .ql-snow .ql-toolbar button.ql-active .ql-stroke {
          stroke: currentColor !important;
        }

        .ql-snow.ql-toolbar button.ql-active .ql-fill,
        .ql-snow .ql-toolbar button.ql-active .ql-fill {
          fill: currentColor !important;
        }

        /* Add text labels to format buttons */
        .ql-formats button.ql-bold::after {
          content: "B";
          font-weight: bold;
        }
        .ql-formats button.ql-italic::after {
          content: "I";
          font-style: italic;
        }
        .ql-formats button.ql-underline::after {
          content: "U";
          text-decoration: underline;
        }

        /* Hide default Quill icons */
        .ql-formats button svg {
          display: none;
        }
      `}</style>
    </div>
  );
}
