"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import AboutSection from "./AboutSection";
import ExperienceSection from "./ExperienceSection";
import ProjectsSection from "./ProjectsSection";
import styles from "../styles/corkboard.module.css";

const positions = {
  projects: { x: -500, y: 0 },
  about: { x: -2500, y: 0 },
  experience: { x: -4500, y: 0 },
};

type Section = keyof typeof positions;

export default function Corkboard() {
  const [current, setCurrent] = useState<Section>("about");

    return (
      <>
        <div className={styles.nav}>
          <button onClick={() => setCurrent("projects")}>
            Projects
          </button>

          <button onClick={() => setCurrent("about")}>
            About
          </button>
    
          <button onClick={() => setCurrent("experience")}>
            Experience
          </button>
        </div>
    
        <div className={styles.viewport}>
          <motion.div
            className={styles.board}
            animate={positions[current]}
            initial={positions.about}
            transition={{
              duration: 1.2,
              ease: "easeInOut",
            }}
          >
            <div className={styles.projects}>
              <ProjectsSection />
            </div>
            
            <div className={styles.about}>
              <AboutSection />
            </div>
    
            <div className={styles.experience}>
              <ExperienceSection />
            </div>
          </motion.div>
        </div>
      </>
    );
}