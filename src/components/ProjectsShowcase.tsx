"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { PROJECTS, type ProjectItem } from "@/lib/data";
import "./ProjectsShowcase.css";

/* Color palette for project cards */
const CARD_ACCENTS = ["#FF6B35", "#14B8A6", "#3B82F6", "#8B5CF6", "#22C55E", "#FFC233"];

interface Props {
  limit?: number;
  showHeading?: boolean;
}

export default function ProjectsShowcase({ limit, showHeading = true }: Props) {
  const items = limit ? PROJECTS.slice(0, limit) : PROJECTS;

  return (
    <section className="projects-showcase-section bg-grid-pattern">
      {/* Decorative background shape */}
      <div className="projects-showcase-shape-1"></div>

      <div className="container-wide">
        {showHeading && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="projects-showcase-header"
          >
            <span className="projects-showcase-eyebrow">
              Built by the Community
            </span>
            <h2 className="projects-showcase-title">
              Projects that shipped.
            </h2>
            <p className="projects-showcase-desc">
              Real products built by real builders during Xinity hackathons.
              Not demos — working software.
            </p>
            <p>We&apos;re in the process of building Xinity but we also love shipping side projects,open source,and things that just make life easier for other developers.If you&apos;re working on something you&apos;re proud of,we&apos;d love to feature it here.</p>
          </motion.div>
        )}

        {/* Card grid */}
        <div className="projects-grid">
          {items.map((project, i) => (
            <ProjectCard key={project.id} project={project} accent={CARD_ACCENTS[i % CARD_ACCENTS.length]} index={i} />
          ))}
        </div>

        {limit && (
          <div className="projects-showcase-cta">
            <Link href="/projects" className="btn btn-outline">
              View All Projects
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

/* ---------- Individual Project Card ---------- */

function ProjectCard({
  project,
  accent,
  index,
}: {
  project: ProjectItem;
  accent: string;
  index: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className="project-card-article"
    >
      {/* Color header strip */}
      <div
        className="project-card-color-strip"
        style={{
          background: accent,
        }}
      />

      {/* Card image placeholder */}
      <div className="project-card-image-placeholder">
        <div
          className="project-card-icon-box"
          style={{
            background: accent,
            boxShadow: `0 8px 20px ${accent}30`,
          }}
        >
          {project.title.charAt(0)}
        </div>
      </div>

      {/* Card body */}
      <div className="project-card-body">
        <div className="project-card-header-row">
          <Link href="/projects" className="project-card-title-link" style={{ textDecoration: "none", color: "inherit" }}>
            <h3 className="project-card-title">
              {project.title}
            </h3>
          </Link>
          <Link
            href="/projects"
            aria-label={`View ${project.title}`}
            className="project-card-link-btn"
          >
            <ArrowUpRight size={16} />
          </Link>
        </div>

        <p className="project-card-description">
          {project.description}
        </p>

        {/* Tech stack tags */}
        <div className="project-card-tags">
          {project.stack.map((tech) => (
            <span key={tech} className="project-card-tag-span">
              {tech}
            </span>
          ))}
        </div>

        <p className="project-card-builder">
          Built by <strong className="project-card-builder-bold">{project.builder}</strong>
        </p>
      </div>
    </motion.article>
  );
}
