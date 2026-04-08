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
          `}
        </style>
      </head>
      <body className="min-h-full flex flex-col" style={{ backgroundColor: '#212121', color: '#ffffff' }}>
        <nav className="border-b" style={{ borderColor: '#333333' }}>
          <div className="max-w-7xl mx-auto px-6 py-6">
            <div className="flex justify-between items-center">
              <a href="/" className="flex items-center gap-3" style={{ textDecoration: 'none', cursor: 'pointer', transition: 'opacity 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.opacity = '0.7'} onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}>
                <svg width="28" height="28" viewBox="0 0 100 100" fill="currentColor" style={{ color: '#528519' }}>
                  <path d="M50 10 L65 15 L70 25 L75 20 L78 30 L80 25 L82 35 L80 45 L85 55 L83 65 L75 70 L70 75 L65 72 L60 80 L55 75 L50 78 L45 75 L40 80 L35 72 L30 75 L25 70 L17 65 L15 55 L20 45 L18 35 L20 25 L22 30 L25 20 L30 25 L35 15 Z"/>
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
