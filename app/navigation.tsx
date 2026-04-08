'use client';

import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();

  const links = [
    { href: '/', label: 'HOME' },
    { href: '/destinations', label: 'DESTINATIONS' },
    { href: '/techniques', label: 'TECHNIQUES' },
    { href: '/equipment', label: 'EQUIPMENT' },
    { href: '/blog', label: 'BLOG' },
    { href: '/founder', label: 'FOUNDER' },
  ];

  return (
    <ul className="flex gap-8 text-sm font-light">
      {links.map((link) => {
        const isActive = pathname === link.href;
        return (
          <li key={link.href}>
            <a
              href={link.href}
              className="nav-link"
              style={{
                color: isActive ? '#528519' : '#ffffff',
              }}
            >
              {link.label}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
