import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function RegisterForm() {
  const [form, setForm] = useState({
    username: "",
    email: "",
    role: "USER",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/auth/register", form);
      navigate("/login");
    } catch (error) {
      alert("Registration failed");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg mt-20"
    >
      <h2 className="text-2xl font-bold mb-4">Register</h2>
      <input
        name="username"
        placeholder="Username"
        onChange={handleChange}
        className="w-full p-2 mb-4 border rounded"
      />
      <input
        name="email"
        placeholder="Email"
        onChange={handleChange}
        className="w-full p-2 mb-4 border rounded"
      />
      <input
        name="password"
        type="password"
        placeholder="Password"
        onChange={handleChange}
        className="w-full p-2 mb-4 border rounded"
      />
      <button
        type="submit"
        className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700"
      >
        Register
      </button>
    </form>
  );
}

export default RegisterForm;
