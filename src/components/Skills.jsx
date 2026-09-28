import "./Sections.css";
const skillGroups = [
  {
    title: "Programming",
    description: "Languages I use to write code and solve problems.",
    skills: ["Python", "SQL", "C", "C++", "Java"],
  },
  {
    title: "Data Analytics",
    description: "Tools for exploring, analyzing, and presenting data.",
    skills: [
      "Microsoft Excel",
      "Power BI",
      "Statistics",
      "Data Visualization",
      "Exploratory Data Analysis",
    ],
  },
  {
    title: "Databases & Development",
    description: "Technologies I've explored through practical projects.",
    skills: [
      "MongoDB",
      "MySQL",
      "Node.js",
      "Express.js",
      "React",
    ],
  },
  {
    title: "Core Concepts",
    description: "Foundational knowledge I'm building and applying.",
    skills: [
      "Data Cleaning",
      "Problem Solving",
      "Machine Learning Basics",
      "Dashboard Development",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section skills-section">
      <div className="section-heading">
        <p className="section-label">MY TOOLKIT</p>
        <h2>Skills & <span>Technologies</span></h2>
        <p className="section-intro">
          The tools and concepts I use to learn, analyze,
          and build practical solutions.
        </p>
      </div>

      <div className="skills-grid">
        {skillGroups.map((group, index) => (
          <article className="skill-card" key={group.title}>
            <div className="skill-card-top">
              <span className="skill-number">
                0{index + 1}
              </span>
              <span className="skill-arrow">↗</span>
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