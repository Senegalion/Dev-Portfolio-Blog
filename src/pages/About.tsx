import { motion } from "framer-motion";
import { useState } from "react";
import WorldMap from "react-svg-worldmap";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const hobbies = [
  {
    title: "Karate Shorin-Ryu",
    description:
      "Sensei, 1st DAN. I practice traditional karate – it teaches discipline, focus, and respect.",
    emoji: "🥋",
  },
  {
    title: "Chess",
    description:
      "I love playing and analyzing games. Chess improves logic and strategic thinking.",
    emoji: "♟️",
  },
  {
    title: "Gym Workouts",
    description:
      "Strength training helps me build endurance, confidence, and stay healthy.",
    emoji: "🏋️",
  },
  {
    title: "Logic Puzzles",
    description:
      "I enjoy brain teasers like Sudoku, algorithms, or coding interview challenges.",
    emoji: "🧠",
  },
];

const travelData = [
  { country: "PL", value: 1 },
  { country: "CZ", value: 1 },
  { country: "SK", value: 1 },
  { country: "FI", value: 1 },
  { country: "NO", value: 1 },
  { country: "ES", value: 1 },
  { country: "PT", value: 1 },
  { country: "IT", value: 1 },
  { country: "HR", value: 1 },
  { country: "AT", value: 1 },
  { country: "FR", value: 1 },
  { country: "NL", value: 1 },
];

const galleryImages = [
  "/images/image1.jpg",
  "/images/image2.jpg",
  "/images/image3.jpg",
  "/images/image4.jpg",
  "/images/image5.jpg",
  "/images/image6.jpg",
];

function About() {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 py-20 px-6">
      <section className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <img
            src="images/me.jpeg"
            alt="Łukasz Pelikan"
            className="w-60 h-60 rounded-full shadow-lg object-cover border-4 border-indigo-500"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-4 text-gray-800 dark:text-gray-200"
        >
          <h2 className="text-4xl font-bold">About Me</h2>
          <p className="text-justify">
            Hi! I'm Łukasz – a passionate Java developer who loves writing
            clean, maintainable code. I specialize in Java and Spring Boot but
            I'm not afraid to dive into the frontend (as you can see 😉).
          </p>
          <p className="text-justify">
            I enjoy building apps that not only work great but also look great.
            I value testing, clean architecture, and good communication in
            teams. I'm always learning – because technology never stands still.
          </p>
          <p className="text-justify">
            Outside of work: you'll find me reading about software architecture,
            lifting weights, practicing karate, or contributing to open source.
          </p>
        </motion.div>
      </section>

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="mt-24 max-w-6xl mx-auto text-center"
      >
        <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
          My Education
        </h3>
        <div className="grid md:grid-cols-2 gap-10 px-6">
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md"
          >
            <h4 className="text-xl font-semibold text-indigo-600">
              Politechnika Łódzka
            </h4>
            <p className="text-gray-800 dark:text-gray-300">
              Bachelor's degree, Computer Science
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Oct 2022 – Feb 2026 (3rd year student)
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md"
          >
            <h4 className="text-xl font-semibold text-indigo-600">
              Metropolia University of Applied Sciences
            </h4>
            <p className="text-gray-800 dark:text-gray-300">
              Bachelor's degree, Information Technology
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Jan 2025 – May 2025 (Erasmus Exchange)
            </p>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="mt-24 max-w-6xl mx-auto text-center"
      >
        <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
          Languages I Speak
        </h3>
        <div className="flex flex-wrap justify-center gap-4">
          {[
            { name: "Polish (Native)", color: "bg-green-200" },
            { name: "English (C1)", color: "bg-blue-200" },
            { name: "Spanish (A2)", color: "bg-yellow-200" },
            { name: "French (A2)", color: "bg-pink-200" },
            { name: "Finnish (A2)", color: "bg-purple-200" },
          ].map((lang) => (
            <span
              key={lang.name}
              className={`px-4 py-2 rounded-full shadow ${lang.color} text-gray-800 font-medium`}
            >
              {lang.name}
            </span>
          ))}
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="mt-24 max-w-6xl mx-auto"
      >
        <h3 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Passions Beyond Code
        </h3>

        <div className="grid md:grid-cols-2 gap-8 px-4">
          {hobbies.map((hobby, index) => (
            <motion.div
              key={hobby.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 hover:scale-[1.02] transition transform"
            >
              <div className="text-4xl mb-4">{hobby.emoji}</div>
              <h4 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                {hobby.title}
              </h4>
              <p className="text-gray-600 dark:text-gray-300">
                {hobby.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="mt-24 max-w-4xl mx-auto text-center"
      >
        <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
          Places I've Visited
        </h3>
        <div className="flex justify-center">
          <WorldMap color="indigo" size="responsive" data={travelData} />
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="mt-24 max-w-6xl mx-auto text-center"
      >
        <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
          Photo Gallery
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 px-4">
          {galleryImages.map((img, i) => (
            <div
              key={i}
              className="cursor-pointer hover:opacity-80"
              onClick={() => {
                setPhotoIndex(i);
                setIsOpen(true);
              }}
            >
              <img
                src={img}
                alt={`Gallery image ${i + 1}`}
                className="w-full h-48 object-cover rounded-lg shadow"
              />
            </div>
          ))}
        </div>
        {isOpen && (
          <Lightbox
            slides={galleryImages.map((src) => ({ src }))}
            open={isOpen}
            index={photoIndex}
            close={() => setIsOpen(false)}
            on={{
              click: () =>
                setPhotoIndex((photoIndex + 1) % galleryImages.length),
            }}
          />
        )}
      </motion.section>

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="mt-24 text-center"
      >
        <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
          My Tech Stack
        </h3>
        <div className="flex flex-wrap justify-center gap-4 text-sm">
          {[
            "Java",
            "Spring / Spring Boot",
            "REST API",
            "Swagger UI",
            "PostgreSQL",
            "MySQL",
            "Hibernate",
            "Flyway",
            "MongoDB & Mongo Express",
            "Redis (Jedis) & Redis Commander",
            "Unit Testing & Integration Testing",
            "Maven",
            "Gradle",
            "Thymeleaf",
            "Git / GitHub",
            "Docker",
            "AWS",
            "HTML & CSS",
            "JavaScript",
            "TypeScript",
            "React",
            "TailwindCSS",
          ].map((tech) => (
            <span
              key={tech}
              className="px-4 py-2 bg-indigo-100 dark:bg-indigo-700 text-indigo-800 dark:text-white rounded-full font-medium shadow"
            >
              {tech}
            </span>
          ))}
        </div>
      </motion.section>
    </main>
  );
}

export default About;
