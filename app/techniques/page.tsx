import Image from 'next/image';

export const metadata = {
  title: "Photography Techniques",
  description: "Master safari photography with guides on composition, lighting, and camera settings.",
};

export default function Techniques() {
  return (
    <>
      <style precedence="default" href="techniques-page">
        {`
          a.link-accent { color: #528519; transition: opacity 0.2s; }
          a.link-accent:hover { opacity: 0.7; }
        `}
      </style>
      <section style={{ aspectRatio: '2.5/1', position: 'relative', display: 'flex', alignItems: 'center', overflow: 'hidden', marginBottom: '60px' }}>
        <Image
          src="/techniques-header.jpg"
          alt="Photography techniques"
          fill
          style={{ objectFit: 'cover', objectPosition: 'center bottom' }}
        />
        <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(33, 33, 33, 0.5)' }}></div>
        <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
          <h1 className="text-4xl font-light mb-4" style={{ color: '#ffffff' }}>Techniques</h1>
          <p className="text-base font-light max-w-2xl" style={{ color: '#cccccc' }}>
            Master the fundamental techniques used by professional wildlife photographers.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 pb-24">
        <div style={{ textAlign: 'center', padding: '60px 0' }}>
          <p className="text-lg font-light" style={{ color: '#888888' }}>
            Techniques coming soon. Check back soon!
          </p>
        </div>
      </div>
    </>
  );
}
