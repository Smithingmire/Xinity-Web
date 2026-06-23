"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import "./JoinSection.css";

export default function JoinSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
    setEmail("");
  }

  return (
    <section id="join" className="bg-grid-pattern join-section">
      {/* Organic floating shapes */}
      <div className="join-shape-1"></div>
      <div className="join-shape-2"></div>

      <div className="container-wide join-container">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="join-card"
        >
          {/* Decorative blocks */}
          <div className="join-decor-blocks">
            <span className="join-block-orange" />
            <span className="join-block-teal" />
            <span className="join-block-purple" />
          </div>

          <div className="join-header">
            <span className="join-eyebrow">
              Join the Sprint
            </span>

            <h2 className="join-title">
              Ready to build something real?
            </h2>

            <p className="join-subtitle">
              Join 2,500+ builders shipping products, growing skills, and making
              lifelong connections. We don&rsquo;t wait for permission to build — and
              neither should you.
            </p>
          </div>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="join-success-card"
            >
              <p className="join-success-title">
                🎉 You&rsquo;re in!
              </p>
              <p className="join-success-desc">
                We&rsquo;ll be in touch. Welcome to the community.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="join-form">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className="join-input"
              />
              <button
                type="submit"
                className="btn btn-primary join-submit-btn"
              >
                Join Now
              </button>
            </form>
          )}

          <p className="join-disclaimer">
            No spam, ever. Unsubscribe anytime.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
