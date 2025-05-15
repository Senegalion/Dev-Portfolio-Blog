import { useAuth } from "../context/AuthContext";
import { motion } from "framer-motion";

function Profile() {
  const { user } = useAuth();

  if (!user) {
    return (
      <div className="max-w-md mx-auto mt-20 p-8 bg-white dark:bg-gray-900 rounded-xl shadow-lg text-center">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
          You are not logged in.
        </h2>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-lg mx-auto mt-20 p-8 bg-white dark:bg-gray-900 rounded-2xl shadow-xl"
    >
      <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white flex items-center gap-3">
        <svg
          className="w-10 h-10 text-indigo-600 dark:text-indigo-400"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5.121 17.804A9 9 0 1118.878 6.197M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          ></path>
        </svg>
        User Profile
      </h1>

      <div className="text-gray-700 dark:text-gray-300 text-lg space-y-4">
        <p>
          <span className="font-semibold">Username:</span> {user}
        </p>
        {/* Jeśli masz więcej danych, możesz je tutaj wyświetlić */}
      </div>
    </motion.div>
  );
}

export default Profile;
