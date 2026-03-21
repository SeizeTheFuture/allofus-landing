"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* ───── NAV ───── */}
      <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
        <div className="container nav-inner">
          <a href="#top">
            <Image
              src="/AllofUsTransparentLogo.png"
              alt="All of Us"
              width={120}
              height={36}
              className="nav-logo"
              priority
            />
          </a>
          <button
            className="nav-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
          <ul className={`nav-links ${mobileMenuOpen ? "open" : ""}`}>
            <li>
              <a href="#features" onClick={() => setMobileMenuOpen(false)}>
                Features
              </a>
            </li>
            <li>
              <a href="#how-it-works" onClick={() => setMobileMenuOpen(false)}>
                How It Works
              </a>
            </li>
            <li>
              <a href="#services" onClick={() => setMobileMenuOpen(false)}>
                Services
              </a>
            </li>
            <li>
              <Link href="/privacy" onClick={() => setMobileMenuOpen(false)}>
                Privacy
              </Link>
            </li>
            <li>
              <a
                href="mailto:support@allofusapp.com"
                className="nav-cta"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* ───── HERO ───── */}
      <section className="hero" id="top">
        <div className="hero-content">
          <div className="animate-scale-in">
            <Image
              src="/app-icon.png"
              alt="All of Us App Icon"
              width={80}
              height={80}
              className="hero-app-icon"
              priority
            />
          </div>
          <p className="hero-eyebrow animate-fade-up delay-1">
            Community-powered services
          </p>
          <h1 className="animate-fade-up delay-2">
            Your skills are someone&apos;s <em>solution</em>
          </h1>
          <p className="hero-subtitle animate-fade-up delay-3">
            All of Us connects you with trusted people in your community to
            exchange services, earn Time Credits, and get things done — together.
          </p>
          <div className="hero-actions animate-fade-up delay-4">
            <a href="#how-it-works" className="btn-primary">
              See How It Works
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
                <path
                  d="M5 12h14M12 5l7 7-7 7"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <a href="mailto:support@allofusapp.com" className="btn-secondary">
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      {/* ───── FEATURES ───── */}
      <section className="features" id="features">
        <div className="container">
          <div className="features-header">
            <p className="section-label">Features</p>
            <h2 className="section-title">
              Everything you need,
              <br />
              right in your neighborhood
            </h2>
            <p className="section-subtitle">
              Discover local talent, book services with confidence, and build
              meaningful community connections.
            </p>
          </div>
          <div className="features-grid">
            <FeatureCard
              icon={
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path
                    d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1118 0z"
                    stroke="var(--accent-dark)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle
                    cx="12"
                    cy="10"
                    r="3"
                    stroke="var(--accent-dark)"
                    strokeWidth="2"
                  />
                </svg>
              }
              title="Map Discovery"
              description="Browse an interactive map of skilled people near you. Filter by service type, distance, and rating to find exactly who you need."
            />
            <FeatureCard
              icon={
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <rect
                    x="3"
                    y="4"
                    width="18"
                    height="18"
                    rx="2"
                    stroke="var(--accent-dark)"
                    strokeWidth="2"
                  />
                  <path
                    d="M16 2v4M8 2v4M3 10h18"
                    stroke="var(--accent-dark)"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              }
              title="Easy Booking"
              description="Request services with a date, time, and location. Track your booking from pending through completion — all in the app."
            />
            <FeatureCard
              icon={
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="var(--accent-dark)"
                    strokeWidth="2"
                  />
                  <path
                    d="M12 6v6l4 2"
                    stroke="var(--accent-dark)"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              }
              title="Time Credits"
              description="Pay for services with Time Credits — a fair, flexible currency. Purchase credits or earn them by sharing your own skills."
            />
            <FeatureCard
              icon={
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path
                    d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"
                    stroke="var(--accent-dark)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              }
              title="Real-Time Chat"
              description="Message providers directly to discuss details, coordinate logistics, and build trust before and during your booking."
            />
            <FeatureCard
              icon={
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <polygon
                    points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                    stroke="var(--accent-dark)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              }
              title="Trusted Reviews"
              description="Read honest ratings and reviews from your neighbors. Every completed service builds a provider's reputation in the community."
            />
            <FeatureCard
              icon={
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path
                    d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"
                    stroke="var(--accent-dark)"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <circle
                    cx="9"
                    cy="7"
                    r="4"
                    stroke="var(--accent-dark)"
                    strokeWidth="2"
                  />
                  <path
                    d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"
                    stroke="var(--accent-dark)"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              }
              title="Two-Way Marketplace"
              description="Everyone has something to offer. List your skills, set your rates, and start earning credits from people who need your help."
            />
          </div>
        </div>
      </section>

      {/* ───── HOW IT WORKS ───── */}
      <section className="how-it-works" id="how-it-works">
        <div className="container">
          <div className="how-header">
            <p className="section-label">How It Works</p>
            <h2 className="section-title">Four steps to getting it done</h2>
            <p className="section-subtitle">
              From discovering a skill to completing a service — it&apos;s
              simple, transparent, and community-driven.
            </p>
          </div>
          <div className="steps">
            <Step
              number="1"
              title="Discover"
              description="Browse the map to find skilled community members near you."
            />
            <Step
              number="2"
              title="Book"
              description="Pick a time, set the location, and send a booking request."
            />
            <Step
              number="3"
              title="Connect"
              description="Chat with your provider, confirm details, and meet up."
            />
            <Step
              number="4"
              title="Review"
              description="Complete the service, pay with Time Credits, and leave a review."
            />
          </div>
        </div>
      </section>

      {/* ───── SERVICES ───── */}
      <section className="categories" id="services">
        <div className="container">
          <div className="categories-header">
            <p className="section-label">Services</p>
            <h2 className="section-title">60+ services across 10 categories</h2>
            <p className="section-subtitle">
              Whatever you need done, there&apos;s someone in your community who
              can help.
            </p>
          </div>
          <div className="categories-grid">
            {[
              ["Haircuts & Styling", "\u2702\uFE0F"],
              ["Plumbing", "\uD83D\uDD27"],
              ["Dog Walking", "\uD83D\uDC15"],
              ["House Cleaning", "\u2728"],
              ["Lawn Care", "\uD83C\uDF31"],
              ["Tutoring", "\uD83D\uDCDA"],
              ["Makeup & Beauty", "\uD83D\uDC84"],
              ["Electrical Work", "\u26A1"],
              ["Pet Grooming", "\uD83D\uDC3E"],
              ["Carpentry", "\uD83D\uDD28"],
              ["Landscaping", "\uD83C\uDF3F"],
              ["Music Lessons", "\uD83C\uDFB5"],
              ["Massage", "\uD83D\uDCAB"],
              ["Painting", "\uD83C\uDFA8"],
              ["Car Washing", "\uD83D\uDE97"],
              ["Moving Help", "\uD83D\uDCE6"],
              ["Computer Repair", "\uD83D\uDCBB"],
              ["Meal Prep", "\uD83C\uDF73"],
              ["Yoga & Fitness", "\uD83E\uDDD8"],
              ["Smart Home Setup", "\uD83C\uDFE0"],
            ].map(([name, emoji]) => (
              <span className="category-chip" key={name}>
                <span>{emoji}</span>
                {name}
              </span>
            ))}
            <span className="category-chip">
              <span>+</span>
              And many more
            </span>
          </div>
        </div>
      </section>

      {/* ───── CTA ───── */}
      <section className="cta-section">
        <div className="container cta-content">
          <p className="section-label" style={{ color: "rgba(230,179,30,0.8)" }}>
            Join the Community
          </p>
          <h2 className="section-title">Ready to get started?</h2>
          <p className="section-subtitle">
            Download All of Us and start discovering the skills and services
            hidden in your neighborhood.
          </p>
          <a href="mailto:support@allofusapp.com" className="btn-cta">
            Get Early Access
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
              <path
                d="M5 12h14M12 5l7 7-7 7"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </section>

      {/* ───── FOOTER ───── */}
      <footer className="footer">
        <div className="container footer-inner">
          <span className="footer-wordmark">All of Us</span>
          <ul className="footer-links">
            <li>
              <a href="#features">Features</a>
            </li>
            <li>
              <a href="#how-it-works">How It Works</a>
            </li>
            <li>
              <Link href="/privacy">Privacy</Link>
            </li>
            <li>
              <Link href="/terms">Terms</Link>
            </li>
            <li>
              <a href="mailto:support@allofusapp.com">Support</a>
            </li>
          </ul>
          <p className="footer-copy">
            &copy; {new Date().getFullYear()} All of Us App. All rights
            reserved.
          </p>
        </div>
      </footer>
    </>
  );
}

/* ───── Sub-components ───── */

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="feature-card">
      <div className="feature-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Step({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="step">
      <div className="step-number">{number}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

