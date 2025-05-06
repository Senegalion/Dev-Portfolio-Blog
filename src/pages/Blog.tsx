import { Link } from "react-router-dom";

const posts = [
  {
    slug: "how-i-built-this",
    title: "How I Built This Portfolio",
    excerpt:
      "Let me show you how this project was made with React, Tailwind and Markdown.",
  },
  {
    slug: "spring-boot-auth",
    title: "Spring Boot Auth with JWT",
    excerpt: "Secure your backend using JWT and Spring Security.",
  },
];

function Blog() {
  return (
    <section className="max-w-3xl mx-auto space-y-6">
      <h2 className="text-3xl font-bold">Blog Posts</h2>
      {posts.map((post) => (
        <Link
          key={post.slug}
          to={`/blog/${post.slug}`}
          className="block p-4 bg-white dark:bg-gray-700 shadow rounded hover:bg-gray-50 dark:hover:bg-gray-600 transition"
        >
          <h3 className="text-xl font-semibold">{post.title}</h3>
          <p className="text-sm text-gray-500">{post.excerpt}</p>
        </Link>
      ))}
    </section>
  );
}

export default Blog;
