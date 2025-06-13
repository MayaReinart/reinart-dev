import ReactMarkdown from "react-markdown";
import { useEffect, useState } from "react";

export function CVPage() {
  const [cvContent, setCvContent] = useState("");

  useEffect(() => {
    fetch("/maya_reinart_cv.md")
      .then(response => response.text())
      .then(text => setCvContent(text));
  }, []);

  return (
    <div className="prose max-w-3xl mx-auto p-4">
      <ReactMarkdown>{cvContent}</ReactMarkdown>
    </div>
  );
}