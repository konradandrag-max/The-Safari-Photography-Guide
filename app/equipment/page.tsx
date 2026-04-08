import Image from 'next/image';

export const metadata = {
  title: "Camera Equipment & Gear",
  description: "Safari camera and lens recommendations for wildlife photography.",
};

export default function Equipment() {
  return (
    <>
      <style precedence="default" href="equipment-page">
        {`
          a.link-accent { color: #528519; transition: opacity 0.2s; }
          a.link-accent:hover { opacity: 0.7; }
        `}
      </style>
      <section style={{ minHeight: '350px', position: 'relative', display: 'flex', alignItems: 'center', overflow: 'hidden', marginBottom: '60px' }}>
        <Image
          src="/equipment-header.jpg"
          alt="Camera equipment"
          fill
          style={{ objectFit: 'cover', objectPosition: 'center 80%' }}
        />
        <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(33, 33, 33, 0.5)' }}></div>
        <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
          <h1 className="text-4xl font-light mb-4" style={{ color: '#ffffff' }}>Equipment</h1>
          <p className="text-base font-light max-w-2xl" style={{ color: '#cccccc' }}>
            Find the right gear for your safari photography needs and budget.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 pb-24">
        <div style={{ textAlign: 'center', padding: '60px 0' }}>
          <p className="text-lg font-light" style={{ color: '#888888' }}>
            Equipment coming soon. Check back soon!
          </p>
        </div>
      </div>
    </>
  );
}
