import { useEffect, useState } from "react";
import "./Navbar.css";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = links
        .map((link) => document.querySelector(link.href))
        .filter(Boolean);

      const marker = window.innerHeight * 0.35;

      let current = "home";

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();

        if (
          rect.top <= marker &&
          rect.bottom > marker
        ) {
          current = section.id;
        }
      });

      setActive(current);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );

      window.removeEventListener(
        "resize",
        handleScroll
      );
    };
  }, []);

  const handleNavigation = (id) => {
    setActive(id);
  };

  return (
    <header className="navbar">
      <a
        className="navbar-logo"
        href="#home"
        aria-label="Viral Patel - Home"
        onClick={() => handleNavigation("home")}
      >
        VIRAL<span>.</span>
      </a>

      <nav
        className="navbar-links"
        aria-label="Main navigation"
      >
        {links.map((link) => {
          const id = link.href.replace("#", "");

          return (
            <a
              key={link.label}
              href={link.href}
              className={active === id ? "active" : ""}
              aria-current={
                active === id ? "page" : undefined
              }
              onClick={() => handleNavigation(id)}
            >
              {link.label}
            </a>
          );
        })}
      </nav>

      <a
        className="navbar-cta"
        href="#contact"
        onClick={() => handleNavigation("contact")}
      >
        <span>Let's Talk</span>

        <span
          aria-hidden="true"
          className="navbar-cta-arrow"
        >
          ↗
        </span>
      </a>
    </header>
  );
}