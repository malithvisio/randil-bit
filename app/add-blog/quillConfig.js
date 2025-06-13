"use client";
import ImageResize from "quill-image-resize-module-react";

// Register Quill modules with SSR check
export const registerQuillModules = () => {
  if (typeof window !== "undefined" && typeof document !== "undefined") {
    try {
      const Quill = require("react-quill").Quill;
      if (!Quill.imports["modules/imageResize"]) {
        Quill.register("modules/imageResize", ImageResize);
      }
    } catch (error) {
      console.warn("Failed to register Quill modules:", error);
    }
  }
};

// Quill modules configuration
export const getModules = () => {
  if (typeof window === "undefined") return {}; // Return empty object during SSR

  return {
    toolbar: {
      container: [
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        [{ font: [] }],
        [{ size: ["small", false, "large", "huge"] }],
        ["bold", "italic", "underline", "strike"],
        [{ color: [] }, { background: [] }],
        [{ align: ["", "center", "right", "justify"] }],
        [{ list: "ordered" }, { list: "bullet" }],
        ["blockquote", "code-block"],
        ["link", "image"],
        ["clean"],
      ],
      handlers: {
        bold: function (value) {
          if (this.quill.getSelection()) {
            const range = this.quill.getSelection();
            const format = this.quill.getFormat(range);
            this.quill.formatText(
              range.index,
              range.length,
              "bold",
              !format.bold,
              "user"
            );
          }
        },
        italic: function (value) {
          if (this.quill.getSelection()) {
            const range = this.quill.getSelection();
            const format = this.quill.getFormat(range);
            this.quill.formatText(
              range.index,
              range.length,
              "italic",
              !format.italic,
              "user"
            );
          }
        },
        align: function (value) {
          if (this.quill.getSelection()) {
            const range = this.quill.getSelection();
            this.quill.format("align", value, "user");
          }
        },
      },
    },
    clipboard: {
      matchVisual: false,
    },
    imageResize: {
      modules: ["Resize", "DisplaySize"],
    },
  };
};

export const modules = typeof window === "undefined" ? {} : getModules();

// Quill formats
export const formats = [
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
