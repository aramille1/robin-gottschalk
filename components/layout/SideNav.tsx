'use client';

import React, { useState, useEffect } from 'react';

export default function SideNav() {
  const navItems = [
    { label: 'Programs', href: '#myprogram', id: 'myprogram' },
    { label: 'Start Now', href: '#consultation-steps', id: 'consultation-steps' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Home', href: '#hero', id: 'hero' },
  ];

  const [activeId, setActiveId] = useState('hero');

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '0px 0px -50% 0px' }
    );

    navItems.forEach(item => {
      const section = document.getElementById(item.id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const handleClick = (id: string) => {
    setActiveId(id); // instantly activate clicked link
  };

  return (
    <nav className="fixed flex justify-between w-96 left-[-130px] top-[42%] -translate-y-1/2 z-40 -rotate-90 origin-center border-b border-white/30 pb-4 pl-4">
      {navItems.map(item => (
        <a
          key={item.id}
          href={item.href}
          onClick={() => handleClick(item.id)}
          className={`
            block font-[family-name:var(--font-inter)] text-base font-medium
            transition-all
            ${item.id === activeId ? 'text-white font-bold' : 'text-white/20 hover:text-white'}
          `}
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
}
