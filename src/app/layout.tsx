import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "All of Us — Your Community Skills Marketplace",
  description:
    "Find trusted help and share your skills within your community. Book local services, earn Time Credits, and build real connections — all in one app.",
  openGraph: {
    title: "All of Us — Your Community Skills Marketplace",
    description:
      "Find trusted help and share your skills within your community.",
    type: "website",
    images: [{ url: "/app-icon.png", width: 1024, height: 1024 }],
  },
  icons: {
    icon: "/app-icon.png",
    apple: "/app-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Outfit:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
