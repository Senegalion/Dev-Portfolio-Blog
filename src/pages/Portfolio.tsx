import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    title: "Task Manager API",
    description: "REST API with Spring Boot, JWT and PostgreSQL.",
    tech: ["Java", "Spring Boot", "PostgreSQL"],
    link: "https://github.com/user/task-manager-api",
  },
  {
    title: "Personal Portfolio",
    description: "Frontend project built with React and Tailwind.",
    tech: ["React", "TailwindCSS"],
    link: "#",
  },
];

function Portfolio() {
  return (
    <section className="max-w-4xl mx-auto space-y-4">
      <h2 className="text-3xl font-bold">My Projects</h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {projects.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
