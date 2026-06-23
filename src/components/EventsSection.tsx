"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CalendarDays, MapPin, ArrowRight } from "lucide-react";
import { EVENTS, type EventItem } from "@/lib/data";
import "./EventsSection.css";

interface Props {
  limit?: number;
  showHeading?: boolean;
  showPast?: boolean;
}

export default function EventsSection({ limit, showHeading = true, showPast = false }: Props) {
  let items = showPast ? EVENTS : EVENTS.filter((e) => e.status === "upcoming");
  if (limit) items = items.slice(0, limit);

  return (
    <section id="events" className="events-section bg-grid-pattern">
      <div className="container-wide">
        {showHeading && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4 }}
            className="events-header"
          >
            <span className="events-eyebrow">
              Upcoming Events
            </span>
            <h2 className="events-title">
              Where builders meet.
            </h2>
            <p className="events-desc">
              Hackathons, build nights, and workshops — online and in-person.
              Come build something real.
            </p>
          </motion.div>
        )}

        <div className="events-list-wrap">
          {items.map((event, i) => (
            <EventCard key={event.id} event={event} index={i} />
          ))}
        </div>

        {limit && (
          <div className="events-section-cta">
            <Link href="/events" className="btn btn-outline">
              View All Events
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

/* ---------- Event Card ---------- */

function EventCard({ event, index }: { event: EventItem; index: number }) {
  const isPast = event.status === "past";

  return (
    <motion.article
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className="event-card-article"
      style={{
        background: isPast ? "#f9fafb" : "white",
        opacity: isPast ? 0.7 : 1,
      }}
    >
      {/* Date block */}
      <div
        className="event-date-block"
        style={{
          background: isPast ? "rgba(0, 0, 0, 0.05)" : "rgba(255, 79, 0, 0.1)",
          color: isPast ? "#555555" : "var(--xinity-orange)",
        }}
      >
        <p
          className="event-date-status"
          style={{
            color: isPast ? "#777777" : "var(--xinity-orange)",
          }}
        >
          {isPast ? "Past" : "Upcoming"}
        </p>
        <p className="event-date-day">
          {event.date.split(",")[0]}
        </p>
      </div>

      {/* Details */}
      <div>
        <Link href="/events" className="event-info-title-link" style={{ textDecoration: "none", color: "inherit" }}>
          <h3 className="event-info-title">
            {event.title}
          </h3>
        </Link>
        <div className="event-meta-row">
          <span className="event-meta-item">
            <CalendarDays size={14} /> {event.date}
          </span>
          <span className="event-meta-item">
            <MapPin size={14} /> {event.location}
          </span>
        </div>
        <p className="event-info-desc">
          {event.description}
        </p>
      </div>

      {/* CTA arrow */}
      <div className="event-arrow-wrap">
        <Link
          href="/events"
          aria-label={`Learn more about ${event.title}`}
          className="event-arrow-btn"
        >
          <ArrowRight size={18} />
        </Link>
      </div>
    </motion.article>
  );
}
