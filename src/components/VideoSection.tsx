"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import "./VideoSection.css";

interface SingleVideo {
  title: string;
  embedUrl: string;
  thumbnail: string;
}

const SINGLE_VIDEO_DATA: SingleVideo = {
  title: "Xinity Summer Sprint 2024 Highlight Reel",
  embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1", // placeholder/rickroll or any tech event stream URL
  thumbnail: "/events/event6.png"
};

export default function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="video-section">
      {/* Dynamic abstract floating backgrounds */}
      <div className="video-shape-1"></div>
      <div className="video-shape-2"></div>

      <div className="container-wide">
        <div className="video-header">
          <span className="video-eyebrow">Watch Our Journey</span>
          <h2 className="video-title">Building Alternative Futures</h2>
          <p className="video-desc">
            Watch how our community turns hackathon ideas into open-source products that solve real problems.
          </p>
        </div>

        <div className="video-showcase-container">
          <motion.div
            className="video-player-wrap"
            onClick={() => setIsPlaying(true)}
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
          >
            {isPlaying ? (
              <iframe
                className="video-iframe"
                src={SINGLE_VIDEO_DATA.embedUrl}
                title={SINGLE_VIDEO_DATA.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            ) : (
              <>
                <img
                  src={SINGLE_VIDEO_DATA.thumbnail}
                  alt={SINGLE_VIDEO_DATA.title}
                  className="video-poster-img"
                />
                <div className="video-play-btn">
                  <Play size={32} style={{ fill: "currentColor", marginLeft: "4px" }} />
                  <div className="video-play-btn-pulse"></div>
                </div>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
