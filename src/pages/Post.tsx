import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { useParams } from "react-router-dom";

function Post() {
  const { slug } = useParams<{ slug: string }>();
  const [content, setContent] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    fetch(`/posts/${slug}.md`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Post not found");
        }
        return response.text();
      })
      .then((text) => {
        setContent(text);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [slug]);

  if (loading) return <div className="text-center text-2xl">Loading...</div>;
  if (error) return <div className="text-center text-red-600">{error}</div>;

  return (
    <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 p-10 min-h-screen flex items-center justify-center -translate-x-10">
      <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 shadow-2xl rounded-3xl p-12 transform transition-all hover:scale-105 hover:shadow-2xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, type: "spring", stiffness: 100 }}
        >
          <div className="text-center text-white mb-12">
            <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-pink-500 mb-6">
              {(slug ?? "").replace("-", " ").toUpperCase()}
            </h1>
            <p className="text-xl text-white opacity-80">
              A journey through how I created this awesome portfolio site!
            </p>
          </div>

          {/* Markdown Content */}
          <div className="prose dark:prose-invert max-w-none">
            <ReactMarkdown>{content}</ReactMarkdown>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Post;
