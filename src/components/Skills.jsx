const skillGroups = [
  {
    icon: "▦",
    title: "Data Analytics",
    description:
      "Working with data to discover patterns, generate insights, and support better decisions.",
    skills: [
      "Python",
      "SQL",
      "Excel",
      "Power BI",
      "Statistics",
    ],
  },
  {
    icon: "⌘",
    title: "Development",
    description:
      "Building practical web applications and backend systems with modern development technologies.",
    skills: [
      "Java",
      "C",
      "C++",
      "React",
      "Node.js",
      "MERN",
    ],
  },
  {
    icon: "✦",
    title: "AI & Machine Learning",
    description:
      "Exploring machine learning and AI-powered applications to solve real-world problems.",
    skills: [
      "Machine Learning",
      "Python",
      "AI",
      "FastAPI",
      "Data Processing",
    ],
  },
  {
    icon: "◈",
    title: "Data & Databases",
    description:
      "Working with databases and data tools to store, query, transform, and analyze information.",
    skills: [
      "MongoDB",
      "MySQL",
      "SQL",
      "NoSQL",
      "Data Analysis",
    ],
  },
  {
    icon: "⌁",
    title: "Visualization",
    description:
      "Transforming complex datasets into clear and understandable visual stories.",
    skills: [
      "Power BI",
      "Excel",
      "Charts",
      "Dashboards",
      "Data Storytelling",
    ],
  },
  {
    icon: "⚡",
    title: "Tools & Workflow",
    description:
      "Using modern development and productivity tools to build, test, and manage projects.",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Vite",
      "REST APIs",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section skills-section">
      <div className="section-header">
        <div className="section-label">Skills & Technologies</div>

        <h2 className="section-title">
          Tools I use to
          <br />
          <span>build and analyze.</span>
        </h2>

        <p className="section-description">
          A combination of analytical thinking, programming,
          visualization, and modern development technologies that I
          use to turn ideas into practical solutions.
        </p>
      </div>

      <div className="skills-grid">
        {skillGroups.map((group) => (
          <article
            className="skill-card glass-card"
            key={group.title}
          >
            <div className="skill-icon" aria-hidden="true">
              {group.icon}
            </div>

            <h3>{group.title}</h3>

            <p>{group.description}</p>

            <div className="skill-tags">
              {group.skills.map((skill) => (
                <span className="skill-tag" key={skill}>
                  {skill}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}