"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, Github, Twitter, Linkedin, MessageCircle } from "lucide-react";
import "./contact.css";

const CONTACT_SOCIALS = [
 
  { icon: Twitter, label: "X / Twitter", href: "https://twitter.com/xinity", handle: "@xinity" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/company/xinity/", handle: "Xinity" },

];

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      {/* Page hero */}
      <section className="contact-hero">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="contact-hero-content"
          >
            <span className="contact-eyebrow">
              Contact Us
            </span>
            <h1 className="contact-title">
              Let&rsquo;s talk.
            </h1>
            <p className="contact-description">
              Have a question, partnership idea, or just want to say hi?
              Drop us a message and we&rsquo;ll get back to you within 48 hours.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-spacing">
        <div className="container-wide">
          <div className="contact-grid">
            {/* Contact form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {submitted ? (
                <div className="contact-success-card">
                  <div className="contact-success-icon-wrap">
                    <Send size={24} color="white" />
                  </div>
                  <h3 className="contact-success-heading">
                    Message sent!
                  </h3>
                  <p className="contact-success-text">
                    Thanks for reaching out. We&rsquo;ll get back to you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="contact-field">
                    <label htmlFor="contact-name" className="contact-label">
                      Name
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      value={formState.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="contact-input"
                    />
                  </div>

                  <div className="contact-field">
                    <label htmlFor="contact-email" className="contact-label">
                      Email
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      value={formState.email}
                      onChange={handleChange}
                      placeholder="you@email.com"
                      className="contact-input"
                    />
                  </div>

                  <div className="contact-field">
                    <label htmlFor="contact-subject" className="contact-label">
                      Subject
                    </label>
                    <select
                      id="contact-subject"
                      name="subject"
                      required
                      value={formState.subject}
                      onChange={handleChange}
                      className="contact-input contact-select"
                    >
                      <option value="" disabled>Select a topic</option>
                      <option value="general">General Inquiry</option>
                      <option value="partnership">Partnership / Sponsorship</option>
                      <option value="events">Events & Hackathons</option>
                      <option value="feedback">Feedback</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="contact-field">
                    <label htmlFor="contact-message" className="contact-label">
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      required
                      rows={5}
                      value={formState.message}
                      onChange={handleChange}
                      placeholder="Tell us what's on your mind..."
                      className="contact-input contact-textarea"
                    />
                  </div>

                  <button type="submit" className="btn btn-accent contact-submit-btn">
                    Send Message
                  </button>
                </form>
              )}
            </motion.div>

            {/* Contact info sidebar */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              {/* Email card */}
              <div className="contact-info-card">
                <div className="contact-info-icon-wrap contact-info-icon-orange">
                  <Mail size={22} color="white" />
                </div>
                <div>
                  <p className="contact-info-label">
                    Email us at
                  </p>
                  <a href="mailto:hello@xinity.community" className="contact-info-value" style={{ fontWeight: 600 }}>
                    hello@xinity.community
                  </a>
                </div>
              </div>

              {/* Location card */}
              <div className="contact-info-card contact-info-card-last">
                <div className="contact-info-icon-wrap contact-info-icon-teal">
                  <MapPin size={22} color="white" />
                </div>
                <div>
                  <p className="contact-info-label">
                    Based in
                  </p>
                  <p className="contact-info-value" style={{ fontWeight: 600 }}>
                    India (Remote-first)
                  </p>
                </div>
              </div>

              {/* Social links */}
              <h3 className="contact-socials-heading">
                Find us online
              </h3>
              <div className="contact-social-list">
                {CONTACT_SOCIALS.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-social-link"
                  >
                    <s.icon size={18} style={{ color: "var(--xinity-gray)" }} />
                    <span style={{ fontWeight: 600 }}>{s.label}</span>
                    <span className="contact-social-handle">
                      {s.handle}
                    </span>
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
