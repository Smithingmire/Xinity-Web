"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { COMMUNITY_STATS } from "@/lib/data";
import "./StatsSection.css";

export default function StatsSection() {
  return (
    <section className="bg-grid-pattern stats-section">
      <div className="container-wide stats-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="stats-card"
        >
          {/* Neon card glows */}
          <div className="stats-glow-circle-1"></div>
          <div className="stats-glow-circle-2"></div>

          {/* Decorative shapes */}
          <div className="stats-dots-wrap">
            <span className="stats-dot-orange" />
            <span className="stats-dot-yellow" />
            <span className="stats-dot-teal" />
          </div>

          <div className="stats-header">
            <span className="stats-eyebrow">
              Our Impact
            </span>
            <h2 className="stats-title">
              Numbers that tell our story.
            </h2>
          </div>

          <div className="stats-blocks-grid">
            {COMMUNITY_STATS.map((stat, i) => (
              <StatBlock key={stat.label} stat={stat} index={i} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

const ACCENT_COLORS = ["var(--xinity-orange)", "var(--xinity-yellow)", "var(--xinity-teal)", "var(--xinity-blue)"];

function StatBlock({
  stat,
  index,
}: {
  stat: (typeof COMMUNITY_STATS)[number];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const accent = ACCENT_COLORS[index % ACCENT_COLORS.length];

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animateCount(stat.value, 1800);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [hasAnimated, stat.value]);

  function animateCount(target: number, duration: number) {
    const start = performance.now();
    function step(now: number) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className="stat-block-wrapper"
    >
      {/* Accent left line indicator */}
      <div
        className="stat-block-accent-line"
        style={{
          background: accent,
        }}
      />
      <p className="stat-block-number">
        {count.toLocaleString()}
        {stat.suffix}
      </p>
      <p className="stat-block-label">
        {stat.label}
      </p>
    </motion.div>
  );
}
