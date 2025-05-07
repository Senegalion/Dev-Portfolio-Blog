import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    title: "Job Offers",
    description:
      "A Spring Boot web application that collects and processes job offers for Junior Java Developers from multiple external sources. It features REST APIs, MongoDB, Redis, Docker, and a full testing setup with JUnit, Mockito, and Testcontainers.",
    tech: [
      "Java 17",
      "Spring Boot",
      "MongoDB",
      "MongoExpress",
      "Docker & Docker-Compose",
      "Wiremock",
      "Log4j2",
      "Testcontainers",
      "RestTemplate",
      "JSON",
      "HTTP",
      "MockMvc",
      "Awaitility",
      "JUnit5",
      "Mockito",
      "AssertJ",
      "SpringBootTest",
      "SpringSecurityTest",
      "Lombok",
      "Redis & Jedis",
      "Redis-Commander",
      "Maven",
      "Git",
      "GitHub/GitLab",
      "IntelliJ Ultimate",
      "Swagger",
      "AWS (EC2, ECR, IAM, Security Groups)",
      "React (frontend)",
      "Jenkins",
      "SCRUM",
      "Jira",
      "Code Review",
      "Pair Programming",
    ],
    link: "https://github.com/Senegalion/JobOffers",
  },
  {
    title: "Karate Management System",
    description:
      "A web application for managing karate trainees, payments, and automated email reminders. Built with Spring Boot, PostgreSQL, and PayPal API. Features include user authentication, payment processing, and an admin panel.",
    tech: [
      "Java 17",
      "Spring Boot",
      "PostgreSQL",
      "Hibernate",
      "Flyway",
      "Gradle",
      "Git",
      "Thymeleaf",
      "PayPal API",
      "Spring Security",
      "Spring Scheduler",
      "Spring Data JPA",
      "REST API",
      "JWT Authentication",
      "Maven",
      "JUnit",
      "Mockito",
      "Testcontainers",
      "Spring Boot Test",
      "Lombok",
      "Docker",
      "AWS (EC2, RDS)",
      "GitHub Actions",
      "Swagger",
      "Scrum",
      "Jira",
      "CI/CD",
      "Postman",
    ],
    link: "https://github.com/Senegalion/KarateManagementSystem",
  },
  {
    title: "Blog",
    description:
      "Personal portfolio and blog site built with React, TypeScript, Tailwind CSS, and Markdown. Designed to showcase skills and projects as a Fullstack Java Developer.",
    tech: [
      "React",
      "HTML",
      "CSS",
      "TypeScript",
      "Tailwind CSS",
      "Markdown",
      "GitHub",
      "Jenkins",
      "Scrum",
      "CI/CD",
      "Git",
    ],
    link: "https://github.com/Senegalion/Dev-Portfolio-Blog",
  },
  {
    title: "Lotto",
    description:
      "A scalable lottery draw web app built with Spring Boot, using modular monolith and hexagonal architecture. Users can submit tickets, view results, and explore draw history via a clean REST API.",
    tech: [
      "Java 17",
      "Maven",
      "Git",
      "Spring Boot",
      "Spring Data",
      "MongoDB",
      "JUnit",
      "AssertJ",
      "Mockito",
      "Test Containers",
      "MockMvc",
      "WireMock",
      "Docker",
      "REST API",
      "GitHub",
    ],
    link: "https://github.com/Senegalion/LottoApplication",
  },
  {
    title: "GitHub Repository Fetcher",
    description:
      "Spring Boot application that fetches non-forked repositories of a GitHub user, including their branches and last commit SHA, using the GitHub API.",
    tech: [
      "Java 21",
      "Spring Boot",
      "GitHub API",
      "ExecutorService",
      "RestTemplate",
      "GitHub Token",
      "Maven",
      "MySQL",
      "JUnit",
      "Swagger",
      "Spring Security",
      "Git",
      "Docker",
      "GitHub Actions",
      "SpringBootTest",
      "REST API",
      "Async Tasks",
      "GitHub Personal Access Token",
    ],
    link: "https://github.com/Senegalion/GitHubRepoFetcher",
  },
  {
    title: "Job Offers (Frontend)",
    description:
      "React-based web application that allows users to browse and apply for job offers. It communicates with a Spring Boot backend via REST API to fetch job data and manage offers.",
    tech: [
      "React",
      "TypeScript",
      "HTML",
      "CSS",
      "GitHub",
      "Jenkins",
      "Scrum",
      "CI/CD",
      "Git",
    ],
    link: "https://github.com/Senegalion/LottoApplication",
  },
];

function Portfolio() {
  return (
    <section className="min-h-screen bg-gradient-to-r from-indigo-50 via-purple-100 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 py-20">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold text-center text-gray-900 dark:text-white"
        >
          My Projects
        </motion.h2>

        {/* Project List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="flex justify-center"
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
