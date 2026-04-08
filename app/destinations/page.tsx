import Image from 'next/image';

export const metadata = {
  title: "Safari Destinations",
  description: "Expert guides for the best African safari locations for wildlife photography.",
};

export default function Destinations() {
  return (
    <>
      <style precedence="default" href="destinations-page">
        {`
          a.link-accent { color: #528519; transition: opacity 0.2s; }
          a.link-accent:hover { opacity: 0.7; }
        `}
      </style>
      <section style={{ minHeight: '350px', position: 'relative', display: 'flex', alignItems: 'center', overflow: 'hidden', marginBottom: '60px' }}>
        <Image
          src="/destinations-header.jpg"
          alt="Safari destinations"
          fill
          style={{ objectFit: 'cover', objectPosition: 'center 70%' }}
        />
        <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(33, 33, 33, 0.5)' }}></div>
        <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
          <h1 className="text-4xl font-light mb-4" style={{ color: '#ffffff' }}>Destinations</h1>
          <p className="text-base font-light max-w-2xl" style={{ color: '#cccccc' }}>
            Discover Africa's premier safari locations and plan your photography journey.
          </p>
        </div>
      </section>
      <div>

        <div className="max-w-7xl mx-auto px-6 pb-24">
          <div style={{ textAlign: 'center', padding: '60px 0' }}>
            <p className="text-lg font-light" style={{ color: '#888888' }}>
              Destinations coming soon. Check back soon!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
