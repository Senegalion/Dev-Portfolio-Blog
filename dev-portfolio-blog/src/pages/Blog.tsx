import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const posts = [
  {
    slug: "how-i-built-this",
    title: "How I Built This Portfolio",
    excerpt:
      "Let me show you how this project was made with React, Tailwind and Markdown.",
    date: "2025-05-06",
  },
  {
    slug: "spring-boot-auth",
    title: "Spring Boot Auth with JWT",
    excerpt: "Secure your backend using JWT and Spring Security.",
    date: "2025-05-01",
  },
];

function Blog() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-50 via-purple-100 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 px-4">
      <div className="w-full max-w-6xl space-y-10">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold text-center text-gray-900 dark:text-white"
        >
          Blog Posts
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="flex justify-center"
            >
              <Link
                to={`/blog/${post.slug}`}
                className="w-full bg-white dark:bg-gray-800 shadow-lg rounded-xl overflow-hidden transform hover:scale-105 hover:shadow-xl transition duration-500 p-6"
              >
                <div className="relative">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                    {post.excerpt}
                  </p>
                  <span className="absolute bottom-4 right-4 text-xs text-gray-400 dark:text-gray-500">
                    {new Date(post.date).toLocaleDateString()}
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Blog;
