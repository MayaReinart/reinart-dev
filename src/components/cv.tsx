"use client";

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
    <div className="prose prose-lg max-w-3xl mx-auto p-4">
      <ReactMarkdown
        components={{
          h1: ({ ...props }) => <h1 className="text-4xl font-bold mb-4" {...props} />,
          h2: ({ ...props }) => <h2 className="text-2xl font-semibold mt-8 mb-4" {...props} />,
          h3: ({ ...props }) => <h3 className="text-xl font-medium mt-6 mb-3" {...props} />,
          p: ({ ...props }) => <p className="mb-4" {...props} />,
          ul: ({ ...props }) => <ul className="list-disc pl-6 mb-4" {...props} />,
          li: ({ ...props }) => <li className="mb-2" {...props} />,
          a: ({ ...props }) => <a className="text-blue-600 hover:underline" {...props} />,
          hr: ({ ...props }) => <hr className="my-8 border-gray-300" {...props} />,
        }}
      >
        {cvContent}
      </ReactMarkdown>
    </div>
  );
}