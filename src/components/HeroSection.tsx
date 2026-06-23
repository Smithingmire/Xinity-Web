"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import "./HeroSection.css";

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % 2);
    }, 3200);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" className="bg-grid-pattern hero-section">
      {/* Decorative Mozilla DNA geometric and blob elements */}
      <div className="hero-blob-1"></div>
      <div className="hero-blob-2"></div>
      <div className="hero-blob-3"></div>
      <div className="hero-geo-square"></div>
      <div className="hero-geo-circle"></div>

      <div className="container-wide hero-container">
        <div className="hero-content-wrap">
          {/* Animated Headline */}
          <div className="hero-headline-container">
            <AnimatePresence mode="wait">
              <motion.h1
                key={currentIndex}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="hero-title"
              >
                {currentIndex === 0 && (
                  <>
                    𝖳𝗁𝖾 𝖶𝗈𝗋𝗅𝖽&rsquo;s 𝖥𝗂𝗋𝗌𝗍{" "}
                    <span className="hero-title-yellow-highlight">
                      𝖯𝗋𝗈𝖽𝗎𝖼𝗍-𝖮𝗋𝗂𝖾𝗇𝗍𝖾𝖽
                    </span>{" "}
                    𝖳𝖾𝖼𝗁 𝖢𝗈𝗆𝗆𝗎𝗇𝗂𝗍𝗒.
                  </>
                )}
                {currentIndex === 1 && (
                  <>
                    𝗟𝗲𝘁&rsquo;𝘀 !{" "}
                    <span className="hero-title-teal-highlight">
                      𝗖𝗼𝗺𝗽𝗲𝘁𝗲.𝗷𝘂𝗱𝗴𝗲.𝗰𝗼𝗻𝗾𝘂𝗲𝗿
                    </span>{" "}
                    together.
                  </>
                )}
              </motion.h1>
            </AnimatePresence>
          </div>

          {/* Sub-headline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="hero-subtitle"
          >
            The World&rsquo;s First Product-Oriented Tech Community. We believe technology should serve the public interest, and we build alternative digital futures by turning hackathon ideas into open-source products.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="hero-ctas"
          >
            <Link href="#join" className="btn btn-accent">
              Join Xinity
            </Link>
            <Link href="/projects" className="btn btn-outline">
              Explore Projects
            </Link>
          </motion.div>

          {/* Premium builders badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="hero-stats-badge"
          >
            <span className="hero-stats-badge-dot"></span>
            2,500+ BUILDERS REGISTERED & SHIPPING
          </motion.div>
        </div>
      </div>
    </section>
  );
}
