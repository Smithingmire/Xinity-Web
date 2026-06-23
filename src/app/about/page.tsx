"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import "./about.css";

export default function AboutPage() {
  return (
    <>
      {/* Page hero */}
      <section className="about-hero">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="about-hero-content"
          >
            <span className="about-eyebrow">
              About Xinity
            </span>
            <h1 className="about-title">
              We exist because hackathon projects deserve to live past Sunday.
            </h1>
            <p className="about-description">
              Xinity started with a simple frustration: too many good ideas die
              after demo day. We built a community where shipping is the culture,
              not the exception.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Group Photo Banner */}
      <section className="about-team-photo-wrap">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="about-team-photo-container"
        >
          <img
            src="/team/team_group.png"
            alt="Xinity Core Team"
            className="about-team-photo"
          />
        </motion.div>
      </section>

      {/* Story section */}
      <section className="section-spacing">
        <div className="container-wide">
          <div className="story-grid">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="story-heading">
                The origin story
              </h2>
              <p className="story-paragraph">
                In late 2024, a group of builders sat around after yet another
                hackathon demo day. The projects were impressive. The energy was
                electric. But by the following week, almost every project was
                abandoned. GitHub repos went quiet. Slack channels emptied.
              </p>
              <p className="story-paragraph">
                That felt wrong. So we asked a different question: what if the
                hackathon wasn&rsquo;t the end, but the beginning? What if we
                built a community that holds builders accountable long after the
                event ends?
              </p>
              <p className="story-paragraph-last">
                That question became Xinity — the world&rsquo;s first
                product-oriented tech community. Not another Discord server.
                Not another meetup group. A builder collective with a single
                mission: ship products that matter.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              <h2 className="story-heading">
                What we believe
              </h2>
              {[
                {
                  title: "Ship over slide decks",
                  text: "Working code beats a pitch deck every time. We celebrate builders who push to production, not just to GitHub.",
                },
                {
                  title: "Community over competition",
                  text: "We grow by lifting each other up. Feedback is kind, mentorship is embedded, and every win is shared.",
                },
                {
                  title: "Products over prototypes",
                  text: "A weekend hack is a great start — but the real work begins after demo day. We help builders go from MVP to real product.",
                },
                {
                  title: "Action over permission",
                  text: "You don't need anyone's approval to start building. If you have an idea, start. We'll help you finish.",
                },
              ].map((value, i) => (
                <div key={i} className="belief-item">
                  <h3 className="belief-title">
                    {value.title}
                  </h3>
                  <p className="belief-text">
                    {value.text}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission banner */}
      <section className="about-mission-banner">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="about-mission-content"
          >
            <h2 className="about-mission-quote">
              &ldquo;We build products, not portfolios. We ship code, not slide
              decks. We grow together, not apart.&rdquo;
            </h2>
            <p className="about-mission-author">
              — The Xinity Manifesto
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-spacing about-cta-section">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="about-cta-title">
              Want to be part of the story?
            </h2>
            <p className="about-cta-text">
              We&rsquo;re always looking for builders, mentors, and community
              leaders. If you care about shipping, you belong here.
            </p>
            <div className="about-cta-buttons">
              <Link href="#join" className="btn btn-accent">
                Join the Community
              </Link>
              <Link href="/team" className="btn btn-outline">
                Meet the Team
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
