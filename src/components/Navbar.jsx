import "./Navbar.css";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="navbar">
      <a className="navbar-logo" href="#home">
        VIRAL<span>.</span>
      </a>

      <nav className="navbar-links" aria-label="Main navigation">
        {links.map((link) => (
          <a key={link.label} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>

      <a className="navbar-cta" href="#contact">
        Let's Talk <span aria-hidden="true">↗</span>
      </a>
    </header>
  );
}