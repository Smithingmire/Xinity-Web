"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MANIFESTO } from "@/lib/data";
import "./ManifestoSection.css";

export default function ManifestoSection() {
  return (
    <section className="bg-grid-pattern manifesto-section">
      {/* Organic floating accent shapes in background */}
      <div className="manifesto-shape-1"></div>
      <div className="manifesto-shape-2"></div>

      <div className="container-wide manifesto-container">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="manifesto-card"
        >
          {/* Decorative blocks */}
          <div className="manifesto-decor-blocks">
            <span className="decor-block-yellow" />
            <span className="decor-block-white" />
            <span className="decor-block-orange" />
          </div>

          <span className="manifesto-eyebrow">
            Our Manifesto
          </span>

          <h2 className="manifesto-headline">
            {MANIFESTO.headline}
          </h2>

          <p className="manifesto-body-text">
            {MANIFESTO.body}
          </p>

          <Link href={MANIFESTO.cta.href} className="btn btn-white">
            {MANIFESTO.cta.label} →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
