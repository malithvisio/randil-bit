import Header from "@editorjs/header";
import List from "@editorjs/list";
import Checklist from "@editorjs/checklist";
import Quote from "@editorjs/quote";
import Warning from "@editorjs/warning";
import Code from "@editorjs/code";
import LinkTool from "@editorjs/link";
import Image from "@editorjs/image";
import Embed from "@editorjs/embed";
import Delimiter from "@editorjs/delimiter";
import Table from "@editorjs/table";
import Marker from "@editorjs/marker";
import Paragraph from "@editorjs/paragraph";
import Underline from "@editorjs/underline";
import InlineCode from "@editorjs/inline-code";

// Custom inline toolbar for paragraph blocks
const inlineToolbar = [
  "bold",
  "italic",
  "underline",
  "link",
  "inlineCode",
  "marker",
];

export const EDITOR_JS_TOOLS = {
  paragraph: {
    class: Paragraph,
    inlineToolbar,
    tunes: ["textVariant"],
  },
  header: {
    class: Header,
    inlineToolbar,
    config: {
      placeholder: "Enter a header",
      levels: [1, 2, 3, 4],
      defaultLevel: 2,
    },
  },
  list: {
    class: List,
    inlineToolbar,
    config: {
      defaultStyle: "unordered",
    },
  },
  checklist: {
    class: Checklist,
    inlineToolbar,
  },
  quote: {
    class: Quote,
    inlineToolbar,
    config: {
      quotePlaceholder: "Enter a quote",
      captionPlaceholder: "Quote's author",
    },
  },
  warning: {
    class: Warning,
    inlineToolbar,
    config: {
      titlePlaceholder: "Title",
      messagePlaceholder: "Message",
    },
  },
  code: {
    class: Code,
  },
  linkTool: {
    class: LinkTool,
    config: {
      endpoint: "/api/blogs/fetch-link-metadata",
    },
  },
  image: {
    class: Image,
    config: {
      uploader: {
        async uploadByFile(file) {
          const formData = new FormData();
          formData.append("image", file);

          const response = await fetch("/api/blogs/upload-image", {
            method: "POST",
            body: formData,
          });

          const result = await response.json();

          return {
            success: 1,
            file: {
              url: result.url,
            },
          };
        },
      },
    },
  },
  embed: {
    class: Embed,
    inlineToolbar,
    config: {
      services: {
        youtube: true,
        vimeo: true,
        codepen: true,
        twitter: true,
      },
    },
  },
  delimiter: Delimiter,
  table: {
    class: Table,
    inlineToolbar: true,
    config: {
      rows: 2,
      cols: 3,
    },
  },
  marker: {
    class: Marker,
    shortcut: "CMD+SHIFT+M",
  },
  underline: {
    class: Underline,
    shortcut: "CMD+U",
  },
  inlineCode: {
    class: InlineCode,
    shortcut: "CMD+E",
  },
};
