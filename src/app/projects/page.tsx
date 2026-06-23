"use client";

import { motion } from "framer-motion";
import ProjectsShowcase from "@/components/ProjectsShowcase";
import "./projects.css";

export default function ProjectsPage() {
  return (
    <>
      {/* Page hero */}
      <section className="projects-hero">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="projects-hero-content"
          >
            <span className="projects-eyebrow">
              Community Projects
            </span>
            <h1 className="projects-title">
              Products built by builders.
            </h1>
            <p className="projects-description">
              Every project here started at a Xinity hackathon. Some are live
              products with real users. Some are ambitious experiments. All of
              them were shipped — not just demoed.
            </p>
            
          </motion.div>
        </div>
      </section>

      <ProjectsShowcase showHeading={false} />
    </>
  );
}
