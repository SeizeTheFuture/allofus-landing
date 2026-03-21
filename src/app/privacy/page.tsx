import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Privacy Policy — All of Us",
  description: "Privacy Policy for the All of Us mobile application.",
};

export default function PrivacyPage() {
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
              <Link href="/terms">Terms</Link>
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
            <h1>Privacy Policy</h1>
            <p className="legal-updated">Last updated: March 21, 2026</p>

            <p>
              All of Us App (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;)
              respects your privacy. This Privacy Policy explains how we collect,
              use, and protect your personal information when you use the All of
              Us mobile application (the &quot;App&quot;).
            </p>

            <h3>1. Information We Collect</h3>
            <p>
              <strong>Account Information:</strong> When you create an account, we
              collect your name, email address, username, profile photo, and a
              short bio or description you choose to provide.
            </p>
            <p>
              <strong>Location Data:</strong> With your permission, we collect
              your device&apos;s location to show you service providers nearby and
              to display your approximate location to other users on the community
              map. Location is collected while the app is in use.
            </p>
            <p>
              <strong>Skills &amp; Services:</strong> Information you provide
              about your skills, service offerings, pricing, and proficiency
              levels.
            </p>
            <p>
              <strong>Booking &amp; Transaction Data:</strong> Details of service
              bookings you create or receive, including dates, times, locations,
              pricing, and booking status. We also store records of Time Credit
              purchases and peer-to-peer transfers.
            </p>
            <p>
              <strong>Messages:</strong> Content of messages exchanged between
              users through the in-app chat feature.
            </p>
            <p>
              <strong>Reviews &amp; Ratings:</strong> Reviews and star ratings you
              leave for other users, which are visible to the community.
            </p>
            <p>
              <strong>Device Information:</strong> We collect push notification
              tokens to deliver notifications about bookings, messages, and other
              updates.
            </p>
            <p>
              <strong>Calendar Access:</strong> With your permission, we may
              access your device calendar solely to add booking appointments for
              your convenience.
            </p>

            <h3>2. How We Use Your Information</h3>
            <ul>
              <li>To provide and operate the All of Us marketplace</li>
              <li>To show you relevant service providers in your area</li>
              <li>
                To facilitate bookings, payments, and messaging between users
              </li>
              <li>
                To send you push notifications about booking updates, new
                messages, and important account activity
              </li>
              <li>
                To display your profile, skills, and ratings to other community
                members
              </li>
              <li>To process Time Credit purchases and transfers</li>
              <li>To improve and maintain the App</li>
            </ul>

            <h3>3. Information Sharing</h3>
            <p>
              We do not sell your personal information. We share data only as
              follows:
            </p>
            <ul>
              <li>
                <strong>With Other Users:</strong> Your profile information,
                skills, approximate location, ratings, and reviews are visible to
                other App users to facilitate the marketplace.
              </li>
              <li>
                <strong>Service Providers:</strong> We use Amazon Web Services
                (AWS) for hosting, data storage, and authentication. We use Square
                for payment processing. These providers access data only as
                necessary to perform services on our behalf.
              </li>
              <li>
                <strong>Legal Requirements:</strong> We may disclose information
                if required by law or to protect the rights, safety, or property
                of our users or the public.
              </li>
            </ul>

            <h3>4. Data Storage &amp; Security</h3>
            <p>
              Your data is stored securely using AWS infrastructure, including
              Amazon DynamoDB for application data, Amazon S3 for profile photos
              and media, and Amazon Cognito for authentication credentials. We use
              industry-standard encryption and security practices to protect your
              information. However, no method of electronic transmission or
              storage is 100% secure.
            </p>

            <h3>5. Your Choices</h3>
            <ul>
              <li>
                <strong>Location:</strong> You can disable location permissions in
                your device settings at any time. Note that this will limit the
                App&apos;s ability to show you nearby providers.
              </li>
              <li>
                <strong>Notifications:</strong> You can manage push notification
                preferences in your device settings.
              </li>
              <li>
                <strong>Calendar:</strong> Calendar access is optional and can be
                revoked at any time through your device settings.
              </li>
              <li>
                <strong>Account Deletion:</strong> You may request deletion of
                your account and associated data by contacting us at{" "}
                <a href="mailto:support@allofusapp.com">
                  support@allofusapp.com
                </a>
                .
              </li>
            </ul>

            <h3>6. Children&apos;s Privacy</h3>
            <p>
              The App is not intended for children under 18. We do not knowingly
              collect personal information from anyone under the age of 18. If we
              learn that we have collected data from a child, we will delete it
              promptly.
            </p>

            <h3>7. Changes to This Policy</h3>
            <p>
              We may update this Privacy Policy from time to time. We will notify
              you of material changes through the App or via email. Your continued
              use of the App after changes constitutes acceptance of the updated
              policy.
            </p>

            <h3>8. Contact Us</h3>
            <p>
              If you have questions about this Privacy Policy or your data,
              contact us at{" "}
              <a href="mailto:support@allofusapp.com">support@allofusapp.com</a>.
            </p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-inner">
          <span className="footer-wordmark">All of Us</span>
          <ul className="footer-links">
            <li>
              <Link href="/#features">Features</Link>
            </li>
            <li>
              <Link href="/#how-it-works">How It Works</Link>
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
            &copy; {new Date().getFullYear()} All of Us App. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
