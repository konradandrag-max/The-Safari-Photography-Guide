import Image from 'next/image';

export const metadata = {
  title: "Meet the Founder",
  description: "Learn about Konrad Andrag, award-winning wildlife photographer and founder of The Safari Photography Guide.",
};

export default function Founder() {
  return (
    <>
      <style precedence="default" href="founder-page">
        {`
          a.link-accent { color: #528519; transition: opacity 0.2s; }
          a.link-accent:hover { opacity: 0.7; }
          button.btn-primary { background-color: #528519; transition: opacity 0.2s; color: white; }
          button.btn-primary:hover { opacity: 0.9; }
          input.input-field { background-color: #333333; border: none; color: #ffffff; }
          input.input-field::placeholder { color: #888888; }
          a.instagram-link { color: #528519; transition: opacity 0.2s; }
          a.instagram-link:hover { opacity: 0.7; }
          .section-heading { border-left: 3px solid #528519; padding-left: 12px; }
          .accent-list li:before { content: "▸"; color: #528519; margin-right: 8px; }
        `}
      </style>

      {/* Hero Section */}
      <section className="flex justify-center py-20" style={{ borderBottom: '1px solid #333333' }}>
        <div className="flex gap-12 items-center max-w-3xl px-6">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <h1 className="text-4xl font-light leading-tight" style={{ color: '#ffffff' }}>
                Konrad Andrag
              </h1>
              <a href="https://instagram.com/konradandrag" target="_blank" rel="noopener noreferrer" className="instagram-link">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <circle cx="17.5" cy="6.5" r="1.5"></circle>
                </svg>
              </a>
            </div>
            <p className="text-lg font-light" style={{ color: '#cccccc' }}>
              Award-Winning Wildlife Photographer & Safari Guide
            </p>
          </div>
          <div style={{ position: 'relative', width: '280px', height: '380px', flexShrink: 0 }}>
            <Image
              src="/founder-headshot.jpg"
              alt="Konrad Andrag"
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-24">
        {/* Introduction Section */}
        <section className="mb-24" style={{ borderBottom: '1px solid #333333', paddingBottom: '24px', borderLeft: '3px solid #528519', paddingLeft: '24px' }}>
          <p className="text-lg font-light leading-relaxed mb-6" style={{ color: '#cccccc' }}>
            I'm a Cape Town-based wildlife photographer passionate about storytelling through imagery. My journey combines hands-on experience as a ranger at Zimanga Private Game Reserve with a deep commitment to advancing wildlife photography in Southern Africa—particularly through mentoring the next generation.
          </p>
          <p className="text-lg font-light leading-relaxed mb-6" style={{ color: '#cccccc' }}>
            As someone pursuing an industrial engineering degree at Stellenbosch University, I bring analytical thinking to the craft of photography. This combination of technical precision and artistic vision shapes how I approach every shot and teach others to do the same.
          </p>
          <p className="text-lg font-light leading-relaxed" style={{ color: '#cccccc' }}>
            The Safari Photography Guide exists because wildlife photography shouldn't be mysterious. It's a craft that can be learned, refined, and perfected. Through competition wins, real-world guiding experience, and thousands of hours in the field, I've developed a systematic approach to capturing extraordinary images.
          </p>
        </section>

        {/* Photography Achievements */}
        <section className="mb-24">
          <h2 className="text-3xl font-light mb-12 section-heading" style={{ color: '#ffffff' }}>Photography Achievements</h2>

          {/* Awards */}
          <div className="mb-16" style={{ paddingBottom: '24px', borderBottom: '1px solid #333333' }}>
            <h3 className="text-2xl font-light mb-6 section-heading" style={{ color: '#ffffff' }}>Awards & Recognition</h3>
            <ul style={{ color: '#cccccc' }} className="font-light leading-relaxed space-y-3 accent-list">
              <li><strong style={{ color: '#ffffff' }}>BirdLife SA Magazine Cover</strong> – Feature photography recognized for publication</li>
              <li><strong style={{ color: '#ffffff' }}>BirdLife SA Birds in the Environment Category Winner</strong> – 2025</li>
              <li><strong style={{ color: '#ffffff' }}>BirdLife SA Youth Category Winner</strong> – 2024</li>
              <li><strong style={{ color: '#ffffff' }}>Featured on NatGeoWild Instagram</strong> – Recognition for wildlife imagery</li>
            </ul>
          </div>

          {/* Publications */}
          <div>
            <h3 className="text-2xl font-light mb-6 section-heading" style={{ color: '#ffffff' }}>Publications & Features</h3>
            <p style={{ color: '#cccccc' }} className="font-light leading-relaxed">
              My work has been featured by National Geographic Wild and recognized by BirdLife SA, documenting wildlife behavior across South African reserves. Follow my journey on Instagram @konradandrag for recent work and field updates.
            </p>
          </div>
        </section>

        {/* YouthPoty */}
        <section className="mb-24" style={{ paddingBottom: '24px', borderBottom: '1px solid #333333' }}>
          <h2 className="text-3xl font-light mb-6 section-heading" style={{ color: '#ffffff' }}>YouthPOTY Photography Competition</h2>
          <p className="text-lg font-light mb-6 leading-relaxed" style={{ color: '#cccccc' }}>
            In 2024, I co-founded YouthPOTY, a Southern African photography competition dedicated to encouraging creative wildlife photography in youth (25 and under). This competition represents my commitment to building a supportive community of emerging photographers and providing a platform for the next generation to showcase their talent.
          </p>
          <ul style={{ color: '#cccccc' }} className="font-light leading-relaxed space-y-3 accent-list">
            <li><strong style={{ color: '#ffffff' }}>Year Founded:</strong> 2024</li>
            <li><strong style={{ color: '#ffffff' }}>Focus:</strong> Southern African youth wildlife photographers (25 & under)</li>
            <li><strong style={{ color: '#ffffff' }}>Responsibilities:</strong> Managing submissions, coordinating judging, building community</li>
            <li><strong style={{ color: '#ffffff' }}>Mission:</strong> Promote excellence in wildlife photography and nurture emerging talent</li>
          </ul>
        </section>

        {/* Background & Experience */}
        <section className="mb-24">
          <h2 className="text-3xl font-light mb-12 section-heading" style={{ color: '#ffffff' }}>Background & Experience</h2>

          <div className="mb-12">
            <h3 className="text-xl font-light mb-4" style={{ color: '#ffffff' }}>Education</h3>
            <ul style={{ color: '#cccccc' }} className="font-light space-y-2">
              <li>• <strong style={{ color: '#ffffff' }}>German International School Cape Town</strong> – Matriculated 2024</li>
              <li>• <strong style={{ color: '#ffffff' }}>BEng Industrial Engineering, Stellenbosch University</strong> – 2026-2029</li>
            </ul>
          </div>

          <div className="mb-12">
            <h3 className="text-xl font-light mb-4" style={{ color: '#ffffff' }}>Current Experience</h3>
            <p style={{ color: '#cccccc' }} className="font-light leading-relaxed mb-4">
              <strong style={{ color: '#ffffff' }}>Ranger / Guide Intern, Zimanga Private Game Reserve</strong> (April 2025 – Present)
            </p>
            <p style={{ color: '#cccccc' }} className="font-light leading-relaxed">
              Working hands-on with wildlife tracking, guest interactions, and conservation. This real-world experience informs everything I teach—I'm not just reading about wildlife behavior; I'm living it daily. My NQF2 Guiding Qualification and First Aid Level 2 certification ensure I can safely and effectively guide others through the African bush.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-light mb-4" style={{ color: '#ffffff' }}>The Engineering + Photography Blend</h3>
            <p style={{ color: '#cccccc' }} className="font-light leading-relaxed">
              My industrial engineering background isn't separate from my photography—it's fundamental to my approach. I treat composition with systematic thinking, camera settings with precision, and problem-solving with logic. This analytical mindset, combined with hands-on wildlife experience, creates a framework for technical excellence that I share in every guide and lesson.
            </p>
          </div>
        </section>

        {/* Contact & Social */}
        <section className="mb-24" style={{ paddingBottom: '24px', borderBottom: '1px solid #333333' }}>
          <h2 className="text-3xl font-light mb-6 section-heading" style={{ color: '#ffffff' }}>Get in Touch</h2>
          <ul style={{ color: '#cccccc' }} className="font-light space-y-3 accent-list">
            <li><strong style={{ color: '#ffffff' }}>Email:</strong> konrad.andrag@gmail.com</li>
            <li><strong style={{ color: '#ffffff' }}>Phone:</strong> +27 79 817 6926</li>
            <li><strong style={{ color: '#ffffff' }}>Instagram:</strong> <a href="https://instagram.com/konradandrag" className="link-accent">@konradandrag</a></li>
            <li><strong style={{ color: '#ffffff' }}>Location:</strong> Cape Town, South Africa</li>
          </ul>
        </section>

        {/* Call to Action */}
        <section>
          <h2 className="text-3xl font-light mb-8 section-heading" style={{ color: '#ffffff' }}>Ready to Improve Your Safari Photography?</h2>
          <div className="mb-12">
            <p className="text-lg font-light mb-6" style={{ color: '#cccccc' }}>
              Explore our guides, destination reviews, and technical resources to take your wildlife photography to the next level.
            </p>
            <div className="flex gap-4 flex-wrap">
              <a href="/techniques" className="px-8 py-3 text-sm font-light tracking-wide link-accent">
                VIEW TECHNIQUES →
              </a>
              <a href="/destinations" className="px-8 py-3 text-sm font-light tracking-wide link-accent">
                EXPLORE DESTINATIONS →
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-2xl font-light mb-4 section-heading" style={{ color: '#ffffff' }}>Get Weekly Updates</h3>
            <p className="text-base font-light mb-6" style={{ color: '#cccccc' }}>
              Subscribe for photography tips, competition announcements, field stories, and YouthPOTY updates.
            </p>
            <div className="flex gap-3 max-w-md">
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
