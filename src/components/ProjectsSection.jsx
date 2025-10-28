import { ArrowRight, ExternalLink, Github } from "lucide-react";

const getImagePath = (filename) => {
  const base = import.meta.env.BASE_URL || '/';
  return `${base}projects/${filename}`;
};

const projects = [
  {
    id: 1,
    title: "Tools Degree Information System (SIGELAT)",
    description: "A system that monitors the movement of equipment in each car during equipment display activities.",
    image: "projects1.png",
    tags: ["Laravel", "PHP", "MySql"],
    demoUrl: "#",
    githubUrl: "https://github.com/Wanafi/Sigelat-new.git", 
  },
  {
    id: 2,
    title: "Orderly Receipt of Honorarium (TITIR)",
    description:
      "A system that controls the receipt of ASN honorariums at the South Kalimantan Regional Civil Service Agency.",
    image: "./projects/projects2.png",
    tags: ["Laravel", "PHP", "Bootstrap"],
    demoUrl: "#",
    githubUrl: "https://github.com/akuiki1/leviathan.git",
  },
  {
    id: 3,
    title: "Burger Website Landing Page",
    description:
      "A landing page for burger-selling MSMEs in the Banjarmasin area",
    image: "./projects/projects3.png",
    tags: ["HTML", "CSS", "JavaScript"],
    demoUrl: "#",
    githubUrl: "#",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden bg-secondary/30 flex items-center justify-center">
                <img
                  src={getImagePath(project.image)}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    console.error('Failed to load image:', e.target.src);
                    e.target.onerror = null;
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML += '<div class="flex items-center justify-center w-full h-full text-muted-foreground"><span>Image Not Available</span></div>';
                  }}
                  loading="lazy"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      aria-label={`View ${project.title} demo`}
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/Wanafi"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};