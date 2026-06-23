"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS } from "@/lib/data";
import "./Navbar.css";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const closeMobile = () => setMobileOpen(false);

  return (
    <header className="navbar-header">
      {/* Top Banner (Mozilla fundraising style scrolling marquee) */}
      <div className="navbar-banner">
        <div className="marquee-container">
          <div className="marquee-content" style={{ display: "inline-flex", gap: "4rem", fontSize: "0.85rem", fontWeight: 800 }}>
            <span>⚡ TIME IS RUNNING OUT. SUBMIT YOUR PROJECT TO THE XINITY SUMMER SPRINT BY JUNE 30.</span>
            <span>⚡ TURN HACKATHON IDEAS INTO REAL SHIPPED PRODUCTS. JOIN THE MOVEMENT TODAY.</span>
            <span>⚡ BUILD ALTERNATIVE DIGITAL FUTURES WITH OPEN SOURCE PRODUCTS.</span>
            {/* Loop duplication */}
            <span>⚡ TIME IS RUNNING OUT. SUBMIT YOUR PROJECT TO THE XINITY SUMMER SPRINT BY JUNE 30.</span>
            <span>⚡ TURN HACKATHON IDEAS INTO REAL SHIPPED PRODUCTS. JOIN THE MOVEMENT TODAY.</span>
            <span>⚡ BUILD ALTERNATIVE DIGITAL FUTURES WITH OPEN SOURCE PRODUCTS.</span>
          </div>
        </div>
      </div>

      <nav className="container-wide navbar-nav">
        {/* Logo wrapped in Link */}
        <Link href="/" className="navbar-logo-link">
          <img
            src="/assets/logo.png"
            alt="Xinity"
            className="navbar-logo-img"
          />
        </Link>

        {/* Desktop links */}
        <ul className="navbar-desktop-links">
          {NAV_LINKS.map((link) => {
            const isEventsOnHome = pathname === "/" && link.label === "Events";
            const href = isEventsOnHome ? "#events" : link.href;
            const isActive = pathname === link.href;

            return (
              <li key={link.href}>
                <Link
                  href={href}
                  className="nav-link"
                  style={{
                    backgroundColor: isActive ? "rgba(0, 0, 0, 0.05)" : undefined,
                    color: isActive ? "var(--xinity-black)" : undefined,
                    fontWeight: isActive ? 700 : undefined,
                  }}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* CTA + hamburger */}
        <div className="navbar-cta-wrap">
          <Link href="#join" className="btn btn-accent navbar-cta-desktop navbar-cta-btn">
            Join Xinity
          </Link>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation menu"
            className="navbar-hamburger"
          >
            {mobileOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>

      {/* Mobile overlay menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="navbar-mobile-overlay"
          >
            {NAV_LINKS.map((link, i) => {
              const isEventsOnHome = pathname === "/" && link.label === "Events";
              const href = isEventsOnHome ? "#events" : link.href;

              return (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                >
                  <Link
                    href={href}
                    onClick={closeMobile}
                    className="navbar-mobile-link"
                    style={{
                      color:
                        pathname === link.href
                          ? "var(--xinity-orange)"
                          : "var(--xinity-black)",
                    }}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              );
            })}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
              className="navbar-mobile-cta"
            >
              <Link
                href="#join"
                onClick={closeMobile}
                className="btn btn-accent"
                style={{ width: "100%", textAlign: "center" }}
              >
                Join Xinity
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
