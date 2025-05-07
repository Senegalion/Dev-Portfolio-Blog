import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaLinkedin, FaInstagram, FaDownload } from "react-icons/fa";

function Home() {
  return (
    <main className="relative overflow-hidden min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_20%_30%,rgba(99,102,241,0.4),transparent_40%)] pointer-events-none" />

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="absolute top-10 right-10 z-30 flex gap-4"
      >
        <a
          href="https://www.linkedin.com/in/łukasz-pelikan/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 text-2xl"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://www.instagram.com/senegal_ek/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-pink-600 hover:text-pink-800 dark:text-pink-400 text-2xl"
        >
          <FaInstagram />
        </a>
        <a
          href="/cv/LukaszPelikan_CV.pdf"
          download
          className="text-green-600 hover:text-green-800 dark:text-green-400 text-2xl"
        >
          <FaDownload />
        </a>
      </motion.div>

      <section className="max-w-5xl mx-auto px-6 py-32 text-center relative z-10 backdrop-blur-md rounded-xl bg-white/30 dark:bg-gray-900/30 shadow-xl">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white"
        >
          Hi, I'm{" "}
          <span className="text-indigo-600 dark:text-indigo-400">Łukasz</span>{" "}
          👋
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-6 text-lg md:text-xl text-gray-700 dark:text-gray-300"
        >
          Junior Java Developer passionate about building clean, scalable apps.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-4 text-base text-gray-600 dark:text-gray-400"
        >
          Welcome to my portfolio and blog. Let’s build something great
          together!
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-10 flex justify-center gap-4 flex-wrap"
        >
          <Link
            to="/portfolio"
            className="px-6 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition shadow-lg"
            style={{ color: "white" }}
          >
            View Portfolio
          </Link>
          <Link
            to="/blog"
            className="px-6 py-3 border border-indigo-600 text-indigo-600 rounded-xl hover:bg-indigo-50 dark:hover:bg-gray-700 transition"
          >
            Read Blog
          </Link>
          <a
            href="/cv/LukaszPelikan_CV.pdf"
            download
            className="px-6 py-3 bg-green-500 text-white rounded-xl hover:bg-green-600 transition shadow-lg"
            style={{ color: "white" }}
          >
            Download CV
          </a>
        </motion.div>
      </section>
    </main>
  );
}

export default Home;
