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

      <div className="max-w-7xl mx-auto px-6 pb-24">
        <div style={{ textAlign: 'center', padding: '60px 0' }}>
          <p className="text-lg font-light" style={{ color: '#888888' }}>
            Team members coming soon. Check back soon!
          </p>
        </div>
      </div>
    </>
  );
}
