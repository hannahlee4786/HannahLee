"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar, { Page } from "./Navbar";

import AboutSection from "./AboutSection";
import ExperienceSection from "./ExperienceSection";
import ProjectsSection from "./ProjectsSection";
import InvolvementsSection from "./InvolvementsSection";
import styles from "../styles/corkboard.module.css";

export default function Portfolio() {
  const [page, setPage] = useState<Page>("home");

  return (
    <div className={styles.viewport}>
      <div className={styles.board}>
        <Navbar currentPage={page} onNavigate={setPage} />

        <AnimatePresence mode="wait">
          <motion.div
            key={page}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className={styles.pageContent}
          >
            {page === "home" && <AboutSection />}
            {page === "experience" && <ExperienceSection />}
            {page === "projects" && <ProjectsSection />}
            {page === "involvements" && <InvolvementsSection />}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}