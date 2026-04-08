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
                <img
                  src="/africa icon.png"
                  alt="Africa"
                  width="24"
                  height="28"
                  style={{
                    objectFit: 'contain',
                    mixBlendMode: 'darken'
                  }}
                />
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
