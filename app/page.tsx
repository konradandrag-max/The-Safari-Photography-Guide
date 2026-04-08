import Image from 'next/image';

export default function Home() {
  return (
    <>
      <style precedence="default" href="home-page">
        {`
          a.link-accent { color: #528519; transition: opacity 0.2s; }
          a.link-accent:hover { opacity: 0.7; }
          button.btn-primary { background-color: #528519; transition: opacity 0.2s; color: white; }
          button.btn-primary:hover { opacity: 0.9; }
          input.input-field { background-color: #333333; border: none; color: #ffffff; }
          input.input-field::placeholder { color: #888888; }
          .section-heading { border-left: 3px solid #528519; padding-left: 12px; }
        `}
      </style>
      <div className="w-full">
      {/* Hero Section */}
      <section style={{ minHeight: '500px', position: 'relative', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
        <Image
          src="/hero.jpg"
          alt="Safari photography"
          fill
          style={{ objectFit: 'cover', objectPosition: 'center 70%' }}
          priority
        />
        <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(33, 33, 33, 0.5)' }}></div>
        <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-light mb-6 leading-tight" style={{ color: '#ffffff' }}>
              Master the art of safari photography
            </h1>
            <p className="text-lg font-light mb-8 leading-relaxed" style={{ color: '#cccccc' }}>
              Learn techniques, discover Africa's finest destinations, and capture wildlife moments that tell stories.
            </p>
            <button className="px-8 py-3 text-sm font-light tracking-wide btn-primary">
              GET STARTED
            </button>
          </div>
        </div>
      </section>



      {/* Meet the Founder */}
      <section className="max-w-7xl mx-auto px-6 py-24" style={{ borderTop: '1px solid #333333', borderLeft: '3px solid #528519', paddingLeft: '24px' }}>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-light mb-6" style={{ color: '#ffffff' }}>Meet the Founder</h2>
            <p className="text-lg font-light mb-8 leading-relaxed" style={{ color: '#cccccc' }}>
              Learn about the wildlife photographer and game ranger behind The Safari Photography Guide. With a background in industrial engineering and years of experience in South Africa's most iconic reserves, I've developed a unique approach to wildlife photography that combines technical precision with artistic vision.
            </p>
            <a href="/founder" className="text-sm font-light tracking-wide link-accent inline-block">
              READ FULL STORY →
            </a>
          </div>
          <div style={{ position: 'relative', aspectRatio: '1/1' }}>
            <Image
              src="/founder-profile.jpg"
              alt="Konrad Andrag"
              fill
              style={{ objectFit: 'cover', objectPosition: 'center 40%' }}
            />
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="max-w-7xl mx-auto px-6 py-24" style={{ borderTop: '1px solid #333333' }}>
        <div className="max-w-md">
          <h2 className="text-3xl font-light mb-4" style={{ color: '#ffffff' }}>
            Stay Updated
          </h2>
          <p className="text-base font-light mb-8 leading-relaxed" style={{ color: '#cccccc' }}>
            Subscribe for weekly photography tips, destination insights, and field stories.
          </p>
          <div className="flex gap-3">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 px-4 py-3 text-sm font-light input-field"
            />
            <button className="px-6 py-3 text-sm font-light tracking-wide btn-primary">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </section>
      </div>
    </>
  );
}
