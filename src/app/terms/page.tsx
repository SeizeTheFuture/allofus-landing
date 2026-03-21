import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Terms of Service — All of Us",
  description: "Terms of Service for the All of Us mobile application.",
};

export default function TermsPage() {
  return (
    <>
      <nav className="nav scrolled">
        <div className="container nav-inner">
          <Link href="/">
            <Image
              src="/AllofUsTransparentLogo.png"
              alt="All of Us"
              width={120}
              height={36}
              className="nav-logo"
              priority
            />
          </Link>
          <ul className="nav-links">
            <li>
              <Link href="/#features">Features</Link>
            </li>
            <li>
              <Link href="/#how-it-works">How It Works</Link>
            </li>
            <li>
              <Link href="/#services">Services</Link>
            </li>
            <li>
              <Link href="/privacy">Privacy</Link>
            </li>
            <li>
              <a href="mailto:support@allofusapp.com" className="nav-cta">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <section className="legal-page">
        <div className="container">
          <div className="legal-content">
            <h1>Terms of Service</h1>
            <p className="legal-updated">Last updated: March 21, 2026</p>

            <p>
              Welcome to All of Us. By downloading, accessing, or using the All
              of Us mobile application (the &quot;App&quot;), you agree to be
              bound by these Terms of Service (&quot;Terms&quot;). If you do not
              agree, do not use the App.
            </p>

            <h3>1. About the Service</h3>
            <p>
              All of Us is a peer-to-peer marketplace that connects community
              members who offer services (&quot;Providers&quot;) with community
              members who need services (&quot;Clients&quot;). We provide the
              platform — we are not a party to the service agreements between
              Providers and Clients.
            </p>

            <h3>2. Eligibility</h3>
            <p>
              You must be at least 18 years old to create an account and use the
              App. By using the App, you represent that you meet this requirement.
            </p>

            <h3>3. Account Responsibilities</h3>
            <ul>
              <li>
                You are responsible for maintaining the confidentiality of your
                account credentials.
              </li>
              <li>
                You agree to provide accurate and complete profile information,
                including your skills, service descriptions, and pricing.
              </li>
              <li>
                You are responsible for all activity that occurs under your
                account.
              </li>
            </ul>

            <h3>4. Time Credits</h3>
            <ul>
              <li>
                Time Credits (&quot;TC&quot;) are the in-app currency used to pay
                for services on the platform.
              </li>
              <li>
                Time Credits can be purchased through the App via secure payment
                processing (powered by Square).
              </li>
              <li>
                Time Credits are non-refundable once purchased, except where
                required by applicable law or in cases of service failure as
                determined by us.
              </li>
              <li>
                Time Credits may be transferred to other users and are used to
                compensate Providers for completed services.
              </li>
              <li>
                Time Credits hold no cash value outside the App and cannot be
                redeemed for cash.
              </li>
            </ul>

            <h3>5. Bookings &amp; Services</h3>
            <ul>
              <li>
                Providers set their own rates (hourly or fixed price),
                availability, and service descriptions.
              </li>
              <li>
                Clients submit booking requests which Providers may accept or
                decline.
              </li>
              <li>
                Once a Provider confirms a booking, both parties are expected to
                honor the commitment. Repeated cancellations or no-shows may
                result in account restrictions.
              </li>
              <li>
                All of Us is not responsible for the quality, safety, or legality
                of services performed. Users engage with each other at their own
                discretion and risk.
              </li>
            </ul>

            <h3>6. Reviews &amp; Ratings</h3>
            <ul>
              <li>
                After a completed booking, Clients may leave a rating (1&ndash;5
                stars) and a written review for the Provider.
              </li>
              <li>
                Reviews must be honest, relevant, and based on your actual
                experience.
              </li>
              <li>
                We reserve the right to remove reviews that are abusive,
                fraudulent, or violate these Terms.
              </li>
            </ul>

            <h3>7. Community Standards</h3>
            <p>By using the App, you agree to:</p>
            <ul>
              <li>
                Treat all community members with respect and professionalism.
              </li>
              <li>
                Not discriminate against any user based on race, gender, religion,
                sexual orientation, disability, or any other protected
                characteristic.
              </li>
              <li>
                Not use the App for any unlawful purpose or to facilitate illegal
                services.
              </li>
              <li>
                Not harass, threaten, or send inappropriate messages to other
                users.
              </li>
              <li>
                Not create fake accounts, post misleading information, or
                manipulate ratings.
              </li>
            </ul>

            <h3>8. Intellectual Property</h3>
            <p>
              The App, including its design, features, code, and content
              (excluding user-generated content), is owned by All of Us App and
              protected by applicable intellectual property laws. You retain
              ownership of content you create (profiles, reviews, messages) but
              grant us a license to display and use it within the App.
            </p>

            <h3>9. Limitation of Liability</h3>
            <p>
              To the maximum extent permitted by law, All of Us App shall not be
              liable for any indirect, incidental, special, or consequential
              damages arising from your use of the App or any services arranged
              through it. Our total liability shall not exceed the amount of Time
              Credits you have purchased in the preceding 12 months.
            </p>

            <h3>10. Dispute Resolution</h3>
            <p>
              If a dispute arises between users regarding a booking or service, we
              encourage users to resolve it through direct communication first.
              You may contact us at{" "}
              <a href="mailto:support@allofusapp.com">support@allofusapp.com</a>{" "}
              for assistance. We may, at our discretion, mediate disputes or issue
              credit adjustments, but we are not obligated to do so.
            </p>

            <h3>11. Account Termination</h3>
            <p>
              We reserve the right to suspend or terminate your account at any
              time for violations of these Terms, fraudulent activity, or behavior
              that harms the community. You may also delete your account at any
              time by contacting support.
            </p>

            <h3>12. Changes to These Terms</h3>
            <p>
              We may update these Terms from time to time. We will notify you of
              material changes through the App. Continued use after changes
              constitutes acceptance.
            </p>

            <h3>13. Contact</h3>
            <p>
              For questions about these Terms, reach out to{" "}
              <a href="mailto:support@allofusapp.com">support@allofusapp.com</a>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
