import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "./navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Photographer's Guide to Safari",
  description: "Master safari photography with expert guides, techniques, and destination reviews for wildlife photographers.",
  keywords: ["safari photography", "wildlife photography", "photography guides", "camera settings"],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <style precedence="default" href="global-styles">
          {`
            a.nav-link { color: #ffffff; transition: color 0.2s, transform 0.2s; display: inline-block; }
            a.nav-link:hover { color: #528519; transform: scale(1.1); }
            a.link-accent { color: #528519; transition: opacity 0.2s; }
            a.link-accent:hover { opacity: 0.7; }
            button.btn-primary { background-color: #528519; transition: opacity 0.2s; }
            button.btn-primary:hover { opacity: 0.9; }
            a.logo-link { text-decoration: none; cursor: pointer; transition: opacity 0.2s; display: flex; align-items: center; gap: 12px; }
            a.logo-link:hover { opacity: 0.7; }
          `}
        </style>
      </head>
      <body className="min-h-full flex flex-col" style={{ backgroundColor: '#212121', color: '#ffffff' }}>
        <nav className="border-b" style={{ borderColor: '#333333' }}>
          <div className="max-w-7xl mx-auto px-6 py-6">
            <div className="flex justify-between items-center">
              <a href="/" className="logo-link">
                <svg width="28" height="28" viewBox="0 0 100 140" fill="currentColor" style={{ color: '#528519' }}>
                  <path d="M38 8 Q45 5 52 5 Q58 6 62 10 Q68 8 72 12 Q75 10 78 15 Q80 18 82 25 Q85 35 87 45 Q88 55 87 65 Q89 75 88 85 Q85 95 80 102 Q75 108 68 112 Q60 115 52 118 Q45 120 38 120 Q30 118 23 115 Q15 110 10 102 Q5 95 3 85 Q2 75 4 65 Q3 55 5 45 Q7 35 10 25 Q12 18 15 15 Q18 10 22 8 Q28 6 35 8 Z M45 25 L48 22 L52 20 L56 22 L58 28 L56 35 L52 38 L48 35 Z M65 40 L70 38 L75 42 L78 50 L75 58 L70 60 L65 55 Z M35 75 L40 72 L45 75 L48 82 L45 90 L40 92 L35 88 Z"/>
                </svg>
                <h1 className="text-xl font-light tracking-wide" style={{ color: '#ffffff' }}>
                  THE SAFARI PHOTOGRAPHY GUIDE
                </h1>
              </a>
              <Navigation />
            </div>
          </div>
        </nav>
        <main className="flex-1">
          {children}
        </main>
        <footer style={{ backgroundColor: '#1a1a1a', borderTop: '1px solid #333333' }}>
          <div className="max-w-7xl mx-auto px-6 py-12">
            <p className="text-sm font-light" style={{ color: '#888888' }}>© {new Date().getFullYear()} The Photographer's Guide to Safari</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
