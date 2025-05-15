import { useState } from "react";
import axios from "axios";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

interface LoginResponse {
  username: string;
  token: string;
}

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post<LoginResponse>(
        "http://localhost:8080/auth/login",
        { username, password }
      );

      login(response.data.username, response.data.token);
      navigate("/");
    } catch (error) {
      alert("Login failed");
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-md mx-auto p-8 bg-white dark:bg-gray-900 rounded-2xl shadow-2xl mt-24"
    >
      <h2 className="text-3xl font-extrabold mb-8 text-center text-gray-900 dark:text-white">
        Log In
      </h2>

      <label className="block mb-4">
        <span className="text-gray-700 dark:text-gray-300 font-semibold mb-1 block">
          Username
        </span>
        <input
          type="text"
          placeholder="Your username"
          className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-800 dark:text-white transition"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </label>

      <label className="block mb-6">
        <span className="text-gray-700 dark:text-gray-300 font-semibold mb-1 block">
          Password
        </span>
        <input
          type="password"
          placeholder="Your password"
          className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-800 dark:text-white transition"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </label>

      <button
        type="submit"
        className="w-full bg-indigo-600 text-indigo-600 py-3 rounded-xl font-semibold hover:bg-indigo-700 transition shadow-lg"
      >
        Login
      </button>

      <p className="mt-6 text-center text-gray-600 dark:text-gray-400">
        Don't have an account?{" "}
        <Link
          to="/register"
          className="text-indigo-600 hover:text-indigo-800 font-semibold transition"
        >
          Register here
        </Link>
      </p>
    </motion.form>
  );
}

export default LoginForm;
