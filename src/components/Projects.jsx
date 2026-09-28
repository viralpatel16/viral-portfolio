
import "./Projects.css";

const projects = [
  {
    number: "01",
    title: "EnerSense",
    category: "IoT · MERN · Analytics",
    description:
      "An IoT-based electrical monitoring system that tracks voltage, current, power and energy in real time. Includes fault detection, alerts and an analytics dashboard.",
    tags: ["ESP32", "Node.js", "MongoDB", "IoT"],
    link: "https://enersense.in",
    linkText: "Visit Website",
  },
  {
    number: "02",
    title: "Movie Data Analysis",
    category: "Data Analytics · BI",
    description:
      "A movie data analytics project using Python, SQL and Power BI to explore datasets, identify patterns and communicate insights through visualizations.",
    tags: ["Python", "SQL", "Power BI", "Excel"],
    link: "",
    linkText: "Project Details",
  },
  {
    number: "03",
    title: "PlanYourTrip",
    category: "Full-Stack Development",
    description:
      "A MERN-based travel planning project developed to practice full-stack web development and create an organized travel planning experience.",
    tags: ["MongoDB", "Express", "React", "Node.js"],
    link: "",
    linkText: "Project Details",
  },
  {
    number: "04",
    title: "Python Quiz Game",
    category: "Python · Internship",
    description:
      "An interactive quiz game developed during a four-week Python internship, applying programming fundamentals and logical problem-solving.",
    tags: ["Python", "Logic", "Quiz Application"],
    link: "https://github.com/viralpatel16/Upskillcampus",
    linkText: "View on GitHub",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section projects-section">
      <div className="section-heading">
        <p className="section-label">MY WORK</p>
        <h2>Featured <span>Projects</span></h2>
        <p className="section-intro">
          A selection of projects where I apply my
          technical skills to practical problems.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.number}>
            <div className="project-top">
              <span className="project-number">
                {project.number}
              </span>
              <span className="project-mark">↗</span>
            </div>

            <p className="project-category">
              {project.category}
            </p>

            <h3>{project.title}</h3>
            <p className="project-description">
              {project.description}
            </p>

            <div className="project-tags">
              {project.tags.map((tag) => (
                <span className="skill-tag" key={tag}>
                  {tag}
                </span>
              ))}
            </div>

            {project.link ? (
              <a
                className="project-link"
                href={project.link}
                target="_blank"
                rel="noreferrer"
              >
                {project.linkText} ↗
              </a>
            ) : (
              <span className="project-link project-link-disabled">
                Details coming soon
              </span>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}