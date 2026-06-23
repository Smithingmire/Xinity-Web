"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Twitter } from "lucide-react";
import { TEAM, type TeamMember } from "@/lib/data";
import "./team.css";

const CARD_COLORS = ["#FF6B35", "#14B8A6", "#3B82F6", "#8B5CF6", "#22C55E", "#FFC233"];

export default function TeamPage() {
  return (
    <>
      {/* Page hero */}
      <section className="team-hero">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="team-hero-content"
          >
            <span className="team-eyebrow">
              Our Team
            </span>
            <h1 className="team-title">
              The people behind Xinity.
            </h1>
            <p className="team-description">
              We&rsquo;re a small crew of builders, organizers, and dreamers
              who believe that community is the ultimate multiplier.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team grid */}
      <section className="section-spacing">
        <div className="container-wide">
          <div className="team-grid">
            {TEAM.map((member, i) => (
              <MemberCard key={member.id} member={member} color={CARD_COLORS[i % CARD_COLORS.length]} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="team-cta-section">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="team-cta-card"
          >
            <h2 className="team-cta-title">
              Want to join the core team?
            </h2>
            <p className="team-cta-text">
              We&rsquo;re always looking for passionate community builders.
              If you love organizing events, mentoring, or building tools —
              we want to hear from you.
            </p>
            <a href="/contact" className="btn btn-white team-cta-btn">
              Get in Touch
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}

/* ---------- Team Member Card ---------- */

function MemberCard({
  member,
  color,
  index,
}: {
  member: TeamMember;
  color: string;
  index: number;
}) {
  const SOCIAL_ICONS: Record<string, typeof Github> = {
    github: Github,
    linkedin: Linkedin,
    twitter: Twitter,
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="team-card"
    >
      {/* Avatar header */}
      <div
        className="team-card-header"
        style={{
          background: `linear-gradient(135deg, ${color}20, ${color}08)`,
        }}
      >
        <div
          className="team-card-avatar"
          style={{
            background: color,
            boxShadow: `0 4px 12px ${color}40`,
          }}
        >
          {member.name
            .split(" ")
            .map((n) => n[0])
            .join("")}
        </div>
        <h3 className="team-card-name">
          {member.name}
        </h3>
        <p className="team-card-role" style={{ color }}>
          {member.role}
        </p>
      </div>

      {/* Bio + socials */}
      <div className="team-card-body">
        <p className="team-card-bio">
          {member.bio}
        </p>
        <div className="team-card-socials">
          {Object.entries(member.socials).map(([platform, href]) => {
            const Icon = SOCIAL_ICONS[platform];
            if (!Icon) return null;
            return (
              <a
                key={platform}
                href={href}
                aria-label={`${member.name} on ${platform}`}
                className="team-card-social-link"
                style={{
                  "--hover-color": color,
                } as React.CSSProperties}
              >
                <Icon size={15} />
              </a>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}
