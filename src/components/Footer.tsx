"use client";

import Link from "next/link";
import { Linkedin, Instagram } from "lucide-react";
import { FOOTER_LINKS } from "@/lib/data";
import "./Footer.css";

const SOCIAL_LINKS = [
  // { icon: Github, href: "https://github.com/xinity", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/company/xinity/", label: "LinkedIn" },
  { icon: Instagram, href: "https://instagram.com/xinity", label: "Instagram" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-wrapper">
      <div className="container-wide">
        {/* Outline Title Marquee */}
        <div className="footer-hero-marquee">
          We Build Together
        </div>

        {/* Top grid */}
        <div className="footer-grid">
          {/* Brand column */}
          <div className="footer-brand-wrap">
            <Link href="/" className="footer-logo-text">
              Xinity
            </Link>
            <p className="footer-brand-desc">
              The world&rsquo;s first product-oriented tech community. We build
              things that matter — and we do it together.
            </p>

            {/* Social icons */}
            <div className="footer-socials">
              {SOCIAL_LINKS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="footer-social-btn"
                >
                  <s.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          <FooterLinkColumn title="Quick Links" links={FOOTER_LINKS.quickLinks} />
          <FooterLinkColumn title="Community" links={FOOTER_LINKS.community} />
          <FooterLinkColumn title="Resources" links={FOOTER_LINKS.resources} />
        </div>

        {/* Divider */}
        <div className="footer-divider" />

        {/* Bottom bar */}
        <div className="footer-bottom-row">
          <p className="footer-bottom-copyright">
            &copy; {currentYear} Xinity Hackathon Community. Most content available under a Creative Commons license.
          </p>
          <div className="footer-bottom-links">
            <a href="#" className="footer-bottom-link-a">
              Privacy Policy
            </a>
            <a href="#" className="footer-bottom-link-a">
              Terms of Use
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ---------- Footer Link Column Sub-component ---------- */

function FooterLinkColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h4 className="footer-column-title">
        {title}
      </h4>
      <ul className="footer-links-list">
        {links.map((link) => (
          <li key={link.label} className="footer-link-item">
            <Link href={link.href} className="footer-link-a">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
