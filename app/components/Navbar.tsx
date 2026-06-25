import React from "react";

export type Page = "home" | "experience" | "projects" | "involvements";

interface NavbarProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

const navItems: { label: string; page: Page }[] = [
  { label: "Home", page: "home" },
  { label: "Experiences", page: "experience" },
  { label: "Projects", page: "projects" },
  { label: "Involvements", page: "involvements" },
];

export default function Navbar({ currentPage, onNavigate }: NavbarProps) {
  return (
    <nav className="w-full flex items-center justify-center px-4 py-4">
      <div className="flex flex-wrap items-center gap-2 rounded-full border border-black/10 bg-white/70 px-3 py-2 shadow-sm backdrop-blur-md">
        {navItems.map((item) => {
          const isActive = currentPage === item.page;

          return (
            <button
              key={item.page}
              onClick={() => onNavigate(item.page)}
              aria-current={isActive ? "page" : undefined}
              className={[
                "rounded-full px-4 py-2 text-sm font-medium transition-all duration-200",
                isActive
                  ? "bg-black text-white shadow-md"
                  : "text-black/70 hover:bg-black/5 hover:text-black",
              ].join(" ")}
            >
              {item.label}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
