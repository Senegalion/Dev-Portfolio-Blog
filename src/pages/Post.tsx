import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { useParams } from "react-router-dom";

function Post() {
  const { slug } = useParams();
  const [content, setContent] = useState("");

  useEffect(() => {
    import(`../posts/${slug}.md`).then((res) =>
      fetch(res.default)
        .then((r) => r.text())
        .then(setContent)
    );
  }, [slug]);

  return (
    <div className="prose dark:prose-invert max-w-3xl mx-auto">
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
}

export default Post;
