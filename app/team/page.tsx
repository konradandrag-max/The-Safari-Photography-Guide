import Image from 'next/image';

export const metadata = {
  title: "Meet the Team",
  description: "Learn about the photographers and experts behind The Photographer's Guide to Safari.",
};

export default function Team() {
  return (
    <>
      <style precedence="default" href="team-page">
        {`
          a.link-accent { color: #528519; transition: opacity 0.2s; }
          a.link-accent:hover { opacity: 0.7; }
          .section-heading { border-left: 3px solid #528519; padding-left: 12px; }
          .accent-list li:before { content: "▸"; color: #528519; margin-right: 8px; }
          .member-card { border: 1px solid #333333; padding: 24px; margin-bottom: 24px; transition: background-color 0.2s; }
          .member-card:hover { background-color: #1a1a1a; }
          .social-icon { display: inline-block; margin-right: 12px; }
          .social-icon a { display: inline-flex; align-items: center; justify-content: center; width: 32px; height: 32px; border-radius: 50%; background-color: #333333; color: #528519; text-decoration: none; transition: background-color 0.2s; }
          .social-icon a:hover { background-color: #528519; color: #ffffff; }
        `}
      </style>
      <section style={{ aspectRatio: '2.5/1', position: 'relative', display: 'flex', alignItems: 'center', overflow: 'hidden', marginBottom: '60px' }}>
        <Image
          src="/team-header.jpg"
          alt="Meet the team"
          fill
          style={{ objectFit: 'cover', objectPosition: 'center bottom' }}
        />
        <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(33, 33, 33, 0.8)' }}></div>
        <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
          <h1 className="text-4xl font-light mb-4" style={{ color: '#ffffff' }}>Meet the Team</h1>
          <p className="text-base font-light max-w-2xl" style={{ color: '#cccccc' }}>
            Learn about the photographers and experts behind The Photographer's Guide to Safari.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6 pb-24">
        <section className="mb-16">
          <h2 className="text-3xl font-light mb-12 section-heading" style={{ color: '#ffffff' }}>Founder</h2>

          <div className="member-card">
            <div className="flex gap-8 items-start">
              <div style={{ position: 'relative', width: '180px', height: '180px', flexShrink: 0 }}>
                <Image
                  src="/founder-headshot.jpg"
                  alt="Konrad Andrag"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>

              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-2xl font-light" style={{ color: '#ffffff' }}>Konrad Andrag</h3>
                  <span className="text-sm font-light px-3 py-1" style={{ backgroundColor: '#528519', color: '#ffffff' }}>Founder</span>
                </div>

                <p className="text-base font-light mb-4" style={{ color: '#cccccc' }}>
                  Award-Winning Wildlife Photographer & Safari Guide
                </p>

                <p className="text-sm font-light mb-6 leading-relaxed" style={{ color: '#999999' }}>
                  Cape Town-based wildlife photographer with hands-on experience as a ranger at Zimanga Private Game Reserve. Combining technical excellence with real-world guiding expertise.
                </p>

                <div className="flex gap-2">
                  <span className="social-icon">
                    <a href="https://linkedin.com/in/konrad-andrag" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.39v-1.2h-2.5v8.5h2.5v-4.74c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.74h2.5M6.5 8a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M7 10H6v8h1V10z"/>
                      </svg>
                    </a>
                  </span>
                  <span className="social-icon">
                    <a href="https://instagram.com/konradandrag" target="_blank" rel="noopener noreferrer" title="Instagram">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <circle cx="17.5" cy="6.5" r="1.5"></circle>
                      </svg>
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
