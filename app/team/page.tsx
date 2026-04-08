'use client';

import Image from 'next/image';
import { useState } from 'react';

export const metadata = {
  title: "Meet the Team",
  description: "Learn about the photographers and experts behind The Photographer's Guide to Safari.",
};

export default function Team() {
  const [expandedMember, setExpandedMember] = useState<string | null>(null);

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
        {/* Founder Section */}
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

                <p className="text-sm font-light mb-4 leading-relaxed" style={{ color: '#999999' }}>
                  Cape Town-based wildlife photographer with hands-on experience as a ranger at Zimanga Private Game Reserve. Combining technical excellence with real-world guiding expertise.
                </p>

                {/* Social Links */}
                <div className="flex gap-2 mb-6">
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

                <button
                  className="dropdown-btn"
                  onClick={() => setExpandedMember(expandedMember === 'konrad' ? null : 'konrad')}
                >
                  {expandedMember === 'konrad' ? '▼ Hide Details' : '▶ View Full Profile'}
                </button>
              </div>
            </div>

            {/* Expandable Details */}
            {expandedMember === 'konrad' && (
              <div style={{ marginTop: '24px', paddingTop: '24px', borderTop: '1px solid #333333' }}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  {/* Left Column */}
                  <div>
                    <h4 className="text-lg font-light mb-4 section-heading" style={{ color: '#ffffff' }}>Photography Highlights</h4>
                    <ul style={{ color: '#cccccc' }} className="font-light space-y-2 accent-list text-sm">
                      <li><strong style={{ color: '#ffffff' }}>BirdLife SA Birds in the Environment Category Winner</strong> – 2025</li>
                      <li><strong style={{ color: '#ffffff' }}>BirdLife SA Youth Category Winner</strong> – 2024</li>
                      <li><strong style={{ color: '#ffffff' }}>Featured on NatGeoWild Instagram</strong></li>
                      <li><strong style={{ color: '#ffffff' }}>BirdLife SA Magazine Cover</strong></li>
                    </ul>

                    <h4 className="text-lg font-light mb-4 mt-8 section-heading" style={{ color: '#ffffff' }}>Certifications</h4>
                    <ul style={{ color: '#cccccc' }} className="font-light space-y-2 accent-list text-sm">
                      <li>NQF2 Guiding Qualification</li>
                      <li>First Aid Level 2 Certified</li>
                      <li>Zimanga Private Game Reserve Ranger</li>
                    </ul>
                  </div>

                  {/* Right Column */}
                  <div>
                    <h4 className="text-lg font-light mb-4 section-heading" style={{ color: '#ffffff' }}>Experience</h4>
                    <div style={{ color: '#cccccc' }} className="font-light space-y-4 text-sm">
                      <div>
                        <p style={{ color: '#ffffff', marginBottom: '4px' }}>Ranger / Guide Intern</p>
                        <p>Zimanga Private Game Reserve</p>
                        <p style={{ color: '#888888' }}>April 2025 – Present</p>
                      </div>
                      <div>
                        <p style={{ color: '#ffffff', marginBottom: '4px' }}>Co-Founder, YouthPOTY</p>
                        <p>Southern African youth wildlife photography competition</p>
                        <p style={{ color: '#888888' }}>2024 – Present</p>
                      </div>
                    </div>

                    <h4 className="text-lg font-light mb-4 mt-8 section-heading" style={{ color: '#ffffff' }}>Education</h4>
                    <ul style={{ color: '#cccccc' }} className="font-light space-y-2 accent-list text-sm">
                      <li>German International School Cape Town – 2024</li>
                      <li>BEng Industrial Engineering, Stellenbosch University – 2026-2029</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      </div>
    </>
  );
}
