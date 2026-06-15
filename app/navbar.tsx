import Link from "next/link";

const navStyles = {
  nav: {
    backgroundColor: "#f4a7b9",
    padding: "0 3rem",
    display: "flex",
    flexDirection: "row" as const,
    alignItems: "center",
    justifyContent: "space-between",
    height: "60px",
    fontFamily: "'Georgia', 'Times New Roman', serif",
    position: "sticky" as const,
    top: 0,
    zIndex: 100,
    boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
  },

  name: {
    fontSize: "1.2rem",
    fontWeight: "900",
    fontStyle: "italic",
    color: "#1a1a1a",
    textDecoration: "none",
    letterSpacing: "-0.01em",
  },

  links: {
    display: "flex",
    flexDirection: "row" as const,
    gap: "2rem",
    listStyle: "none",
    margin: 0,
    padding: 0,
  },

  link: {
    color: "#1a1a1a",
    textDecoration: "none",
    fontSize: "0.95rem",
    fontWeight: "600",
    letterSpacing: "0.02em",
    padding: "0.3rem 0.6rem",
    borderRadius: "20px",
    transition: "background-color 0.2s ease",
  },
};

export default function Navbar() {
  return (
    <nav style={navStyles.nav}>
      <Link href="/" style={navStyles.name}>
        Hannah Lee
      </Link>

      <ul style={navStyles.links}>
        <li>
          <Link href="/" style={navStyles.link}>
            About
          </Link>
        </li>
        <li>
          <Link href="/projects" style={navStyles.link}>
            Projects
          </Link>
        </li>
        <li>
          <Link href="/experience" style={navStyles.link}>
            Experience
          </Link>
        </li>
      </ul>
    </nav>
  );
}