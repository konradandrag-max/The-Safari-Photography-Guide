import Image from 'next/image';
import FounderCard from './founder-card';

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
          button.dropdown-btn { background: none; border: none; cursor: pointer; color: #528519; font-size: 0.875rem; font-weight: 300; text-decoration: underline; padding: 0; margin-top: 12px; transition: opacity 0.2s; }
          button.dropdown-btn:hover { opacity: 0.7; }
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
        <FounderCard />
      </div>
    </>
  );
}
