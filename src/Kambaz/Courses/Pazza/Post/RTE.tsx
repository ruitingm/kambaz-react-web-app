import { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
const RTE = ({
  setPost,
  defaultValue = "",
}: {
  setPost: (post: string) => void;
  defaultValue?: string;
}) => {
  const [content, setContent] = useState("");
  const modules = {
    toolbar: [
      ["bold", "italic", "underline"],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ align: [] }],
      ["link", "image", "video"],
      ["clean"],
    ],
  };
  const stripHtml = (html: string) => {
    const tmp = document.createElement("div");
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || "";
  };
  const handleChange = (value: string) => {
    setContent(value);
    setPost(stripHtml(value));
  };
  useEffect(() => {
    setContent(defaultValue);
  }, [defaultValue]);
  return (
    <div>
      <ReactQuill
        theme="snow"
        value={content}
        onChange={handleChange}
        style={{
          height: "250px",
          backgroundColor: "white",
          fontSize: "12px",
        }}
        modules={modules}
      />
    </div>
  );
};
export default RTE;
