import Image from 'next/image';

export const metadata = {
  title: "Blog",
  description: "Safari photography tips, wildlife insights, and destination guides.",
};

export default function Blog() {
  return (
    <>
      <style precedence="default" href="blog-page">
        {`
          a.link-accent { color: #528519; transition: opacity 0.2s; }
          a.link-accent:hover { opacity: 0.7; }
        `}
      </style>
      <section style={{ aspectRatio: '2.5/1', position: 'relative', display: 'flex', alignItems: 'center', overflow: 'hidden', marginBottom: '60px' }}>
        <Image
          src="/blog-header.jpg"
          alt="Safari photography stories"
          fill
          style={{ objectFit: 'cover', objectPosition: 'center 94%' }}
        />
        <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(33, 33, 33, 0.5)' }}></div>
        <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
          <h1 className="text-4xl font-light mb-4" style={{ color: '#ffffff' }}>Stories</h1>
          <p className="text-base font-light max-w-2xl" style={{ color: '#cccccc' }}>
            Insights, tips, and stories from the field to improve your safari photography.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 pb-24">
        <div style={{ textAlign: 'center', padding: '60px 0' }}>
          <p className="text-lg font-light" style={{ color: '#888888' }}>
            No stories yet. Check back soon!
          </p>
        </div>
      </div>
    </>
  );
}
