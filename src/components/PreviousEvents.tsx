"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";
import "./PreviousEvents.css";

interface EventGalleryItem {
  id: string;
  title: string;
  description: string;
  tag: string;
  image: string;
}

const PREV_EVENT_SINGLE: EventGalleryItem = {
  id: "pe-1",
  title: "Xinity WebX Challenge 2026",
  description: "Design and develop a fully functional, visually stunning webpage for the Xinity Hackathon Community. The winning entry will be featured live on the official Xinity website!",
  tag: "University Level Hackathon",
  image: "/assets/event1.jpeg",
};

export default function PreviousEvents() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="prev-events-section bg-grid-pattern">
      {/* Decorative organic shapes */}
      <div className="prev-events-shape-1"></div>
      <div className="prev-events-shape-2"></div>

      <div className="container-wide">
        <div className="prev-events-header">
          <span className="prev-events-eyebrow">Previous Events</span>
          <h2 className="prev-events-title">Moments of Creation</h2>
          <p className="prev-events-desc">
            Highlights from our past sprints and hackathons where builders gathered to ship working software.
          </p>
        </div>

        <div className="prev-events-grid">
          <motion.div
            className="prev-event-card prev-event-card-spotlight"
            onClick={() => setIsOpen(true)}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="prev-event-img-wrap">
              <img
                src={PREV_EVENT_SINGLE.image}
                alt={PREV_EVENT_SINGLE.title}
                className="prev-event-img"
                loading="lazy"
              />
            </div>

            <div className="prev-event-content">
              <span className="prev-event-tag">{PREV_EVENT_SINGLE.tag}</span>
              <h3 className="prev-event-title-text">{PREV_EVENT_SINGLE.title}</h3>
              <p className="prev-event-desc-text">{PREV_EVENT_SINGLE.description}</p>
            </div>

            <div
              style={{
                position: "absolute",
                top: "1.25rem",
                right: "1.25rem",
                zIndex: 3,
                background: "rgba(0, 0, 0, 0.4)",
                backdropFilter: "blur(4px)",
                width: "36px",
                height: "36px",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                opacity: 0,
                transition: "opacity 200ms ease",
              }}
              className="zoom-indicator"
            >
              <ZoomIn size={16} color="white" />
            </div>
            <style jsx>{`
              .prev-event-card:hover :global(.zoom-indicator) {
                opacity: 1 !important;
              }
            `}</style>
          </motion.div>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="lightbox-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              className="lightbox-content"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="lightbox-close"
                onClick={() => setIsOpen(false)}
                aria-label="Close lightbox"
              >
                <X size={28} />
              </button>

              <img
                src={PREV_EVENT_SINGLE.image}
                alt={PREV_EVENT_SINGLE.title}
                className="lightbox-img"
              />

              <div className="lightbox-caption">
                <h4>{PREV_EVENT_SINGLE.title}</h4>
                <p>{PREV_EVENT_SINGLE.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
