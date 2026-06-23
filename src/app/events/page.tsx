"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, ArrowRight } from "lucide-react";
import { EVENTS } from "@/lib/data";
import "./events.css";



export default function EventsPage() {
  const upcomingEvents = EVENTS.filter((e) => e.status === "upcoming");
  const pastEvents = EVENTS.filter((e) => e.status === "past");

  return (
    <>
      {/* Page hero */}
      <section className="events-hero bg-grid-pattern">
        <div className="events-hero-shape-1"></div>
        <div className="events-hero-shape-2"></div>

        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="events-hero-content"
          >
            <span className="events-eyebrow">Events Calendar</span>
            <h1 className="events-title">
              Where ideas become products.
            </h1>
            <p className="events-description">
              Join local build sessions, hackathons, and virtual developer meetups. No presentations or slides — we gather exclusively to write code and ship products.
            </p>
          </motion.div>
        </div>
      </section>

      <main className="container-wide events-page-body">
        {/* Upcoming Section */}
        <section style={{ marginBottom: "3rem" }}>
          <div className="events-section-title-row">
            <h2 className="events-section-title">Upcoming Sprints</h2>
            <span className="events-section-count">{upcomingEvents.length} events scheduled</span>
          </div>

          <div className="events-page-grid">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="events-page-card"
              >
                <div className="events-page-card-banner">
                  <img
                    src={event.image}
                    alt={event.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                    }}
                  />
                  <span className="events-page-card-status-badge events-page-card-status-upcoming">
                    Upcoming
                  </span>
                </div>

                <div className="events-page-card-body">
                  <span className="events-page-card-date-badge">
                    <Calendar size={14} />
                    {event.date}
                  </span>
                  <h3 className="events-page-card-title">{event.title}</h3>
                  <p className="events-page-card-desc">{event.description}</p>

                  <div className="events-page-card-meta">
                    <span className="events-page-card-location">
                      <MapPin size={14} />
                      {event.location}
                    </span>
                    <a
                      href={event.link}
                      style={{ marginLeft: "auto", display: "inline-flex", alignItems: "center", gap: "4px", fontSize: "0.8rem", fontWeight: 700 }}
                    >
                      Details <ArrowRight size={14} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Past Section */}
        <section>
          <div className="events-section-title-row">
            <h2 className="events-section-title">Past Sprints</h2>
            <span className="events-section-count">{pastEvents.length} event hosted</span>
          </div>

          <div className="events-page-grid">
            {pastEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="events-page-card"
                style={{ opacity: 0.85 }}
              >
                <div className="events-page-card-banner">
                  <img
                    src={event.image}
                    alt={event.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                  <span className="events-page-card-status-badge events-page-card-status-past">
                    Completed
                  </span>
                </div>

                <div className="events-page-card-body">
                  <span className="events-page-card-date-badge" style={{ color: "var(--xinity-gray)" }}>
                    <Calendar size={14} />
                    {event.date}
                  </span>
                  <h3 className="events-page-card-title">{event.title}</h3>
                  <p className="events-page-card-desc">{event.description}</p>

                  <div className="events-page-card-meta">
                    <span className="events-page-card-location">
                      <MapPin size={14} />
                      {event.location}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
