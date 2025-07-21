import { motion } from "framer-motion";

interface ProjectProps {
  title: string;
  description: string;
  tech: string[];
  onViewProject: () => void;
}

function ProjectCard({
  title,
  description,
  tech,
  onViewProject,
}: ProjectProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      className="bg-white dark:bg-gray-800 shadow-lg rounded-xl overflow-hidden transform hover:scale-105 transition duration-500 flex flex-col h-[450px]"
    >
      <div className="h-40 bg-indigo-200 dark:bg-indigo-600 flex items-center justify-center">
        <h3 className="text-2xl text-white font-semibold">{title}</h3>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <div className="flex-grow overflow-auto">
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
        </div>

        <button
          onClick={onViewProject}
          className="inline-block bg-indigo-600 text-white rounded-lg px-6 py-2 mt-4 hover:bg-indigo-700 transition-all"
          style={{ color: "white", backgroundColor: "#4F46E5" }}
        >
          View Project
        </button>
      </div>
    </motion.div>
  );
}

export default ProjectCard;
