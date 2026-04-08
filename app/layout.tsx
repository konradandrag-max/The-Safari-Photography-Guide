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
                <svg width="24" height="28" viewBox="0 0 110 130" fill="currentColor" style={{ color: '#528519' }}>
                  <path d="M42 2 L54 0 L64 2 L72 0 L78 4 L84 2 L90 6 L94 10 L98 8 L100 14 L102 20 L100 28 L104 34 L106 42 L108 50 L106 56 L108 62 L110 68 L108 72 L104 70 L100 74 L96 72 L92 76 L90 82 L86 88 L82 94 L78 100 L74 104 L68 108 L62 112 L56 114 L50 118 L46 122 L42 126 L38 124 L36 118 L38 112 L36 106 L32 100 L28 94 L24 88 L18 82 L14 76 L10 70 L6 62 L4 54 L2 46 L4 40 L6 34 L4 28 L8 22 L14 16 L20 12 L26 8 L32 6 L38 4 Z"/>
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
