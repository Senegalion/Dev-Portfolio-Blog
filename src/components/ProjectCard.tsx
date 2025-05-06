import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface ProjectProps {
  title: string;
  description: string;
  tech: string[];
  link: string;
}

function ProjectCard({ title, description, tech, link }: ProjectProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      className="bg-white dark:bg-gray-800 shadow-lg rounded-xl overflow-hidden transform hover:scale-105 transition duration-500"
    >
      {/* Project Image (could be added if needed) */}
      <div className="h-40 bg-indigo-200 dark:bg-indigo-600 flex items-center justify-center">
        <h3 className="text-2xl text-white font-semibold">{title}</h3>
      </div>

      <div className="p-6">
        <p className="text-gray-700 dark:text-gray-300 text-lg mb-4">
          {description}
        </p>
        <div className="flex gap-2 mb-4 flex-wrap">
          {tech.map((t: string) => (
            <span
              key={t}
              className="text-sm text-indigo-800 dark:text-indigo-200 bg-indigo-100 dark:bg-indigo-700 rounded-full px-4 py-1"
            >
              {t}
            </span>
          ))}
        </div>
        <Link
          to={link}
          target="_blank"
          className="inline-block bg-indigo-600 text-white rounded-lg px-6 py-2 mt-4 hover:bg-indigo-700 transition-all"
          style={{ color: "white" }}
        >
          View Project
        </Link>
      </div>
    </motion.div>
  );
}

export default ProjectCard;
