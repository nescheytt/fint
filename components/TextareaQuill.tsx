"use client"

import { FC, useState } from "react"
import "react-quill/dist/quill.snow.css"

const formats = [
  "header",
  "bold",
  "italic",
  "underline",
  "color",
  "background",
  "align",
  "list",
  "bullet",
  "indent",
  "indent",
  "blockquote",
  "strike",
  "clean",
]

const modules = {
  toolbar: [
    [{ header: [false, 1, 2, 3] }],
    ["bold", "italic", "underline", { color: [] }, { background: [] }],
    [
      { align: [] },
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
      "blockquote",
    ],
    ["strike"],
    ["clean"],
  ],
}

const TextareaQuill: FC = () => {
  const [value, setValue] = useState("")

  const ReactQuill =
    typeof window === "object" ? require("react-quill") : () => false

  return (
    <>
      <style>
        {`
          .quill {
            border: 1px solid;
            border-color: #EAECF0;
            border-radius: 8px;
            outline: 2px solid transparent;
            outline-offset: 2px;
            appearance: none;
            transition-duration: 200ms;
          }
          .quill:hover {
            border-color: #CBD5E0;
          }
          .quill:focus-within { 
            border-color: #8B4AC4;
            box-shadow: 0px 0px 0px 1px rgba(139, 74, 196, 1);
          }
          .quill .ql-toolbar {
            width: 100%;
            padding: 20px 12px 20px;
            border: 0;
          }
          .quill .ql-toolbar .ql-formats {
            border-right: 1px solid #EAECF0;
            padding-right: 6px;
            margin-right: 6px;
            margin-bottom: 12px;
          }
          .quill .ql-toolbar .ql-formats:last-child {
            border-right: 0;
          }
          .ql-toolbar.ql-snow + .ql-container.ql-snow {
            border: 0;
          }
          .quill .ql-editor {
            min-height: 320px;
            font-size: 16px;
            border: 0;
          }
          @media screen and (min-width: 768px) {
            .quill .ql-toolbar .ql-formats {
              margin-bottom: 0px;
            }
            .quill .ql-toolbar.ql-snow + .ql-container.ql-snow {
              font-size: 14px;
            }
          }
        `}
      </style>

      <ReactQuill
        id="react-quill"
        theme="snow"
        readOnly={false}
        value={value}
        onChange={setValue}
        modules={modules}
        formats={formats}
      />
    </>
  )
}

export default TextareaQuill
