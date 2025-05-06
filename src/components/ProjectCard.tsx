interface ProjectProps {
  title: string;
  description: string;
  tech: string[];
  link: string;
}

function ProjectCard({ title, description, tech, link }: ProjectProps) {
  return (
    <a
      href={link}
      target="_blank"
      className="block p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md hover:scale-105 transition transform"
    >
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p>{description}</p>
      <p className="text-sm mt-2 text-gray-500">{tech.join(", ")}</p>
    </a>
  );
}

export default ProjectCard;
