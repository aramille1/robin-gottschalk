'use client';

import Link from 'next/link';
import React, { useState, useEffect, useCallback } from 'react';

// --- Section Tracking Logic (Intersection Observer) ---

// Define the configuration for the IntersectionObserver
const observerConfig = {
  root: null, // relative to viewport
  rootMargin: '0px 0px -50% 0px', // When the section midpoint crosses the viewport center
  threshold: 0,
};

/**
 * Custom hook to track which section is currently active in the viewport.
 * It uses the Intersection Observer API.
 * @param sectionIds Array of section IDs (e.g., ['hero', 'about', 'myprogram'])
 * @returns The ID of the currently active section.
 */
const useSectionObserver = (sectionIds: string[]) => {
  const [activeSection, setActiveSection] = useState(sectionIds[0]);

  const handleIntersect = useCallback((entries: IntersectionObserverEntry[]) => {
    entries.forEach(entry => {
      // Check if the element is intersecting (i.e., in the middle of the viewport)
      if (entry.isIntersecting && entry.intersectionRatio >= 0) {
        // The ID is the section name without the '#'
        const id = entry.target.id;
        setActiveSection(id);
      }
    });
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersect, observerConfig);

    // Observe all sections listed in the navItems
    sectionIds.forEach(id => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    // Cleanup observer on component unmount
    return () => observer.disconnect();
  }, [sectionIds, handleIntersect]);

  return activeSection;
};

// --- SideNav Component ---

export default function SideNav() {
  const navItems = [
    // Note the hrefs are now hash fragments matching the target section IDs
    { label: 'Programs', href: '#myprogram', id: 'myprogram' },
    { label: 'Start Now', href: '#consultation-steps', id: 'consultation-steps' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Home', href: '#hero', id: 'hero' },
  ];

  const sectionIds = navItems.map(item => item.id);
  const activeSectionId = useSectionObserver(sectionIds);

  return (
    <nav className="fixed flex justify-between w-90 left-[-130px] top-[42%] -translate-y-1/2 z-40 -rotate-90 origin-center border-b border-white/30 !pb-4">
      {navItems.map((item) => (
        <Link
        key={item.href}
        href={item.href}
        // The Link component handles smooth scrolling automatically for hash fragments
        // The active class is determined by matching the tracked activeSectionId
        className={`
          block text-white font-[family-name:var(--font-inter)] text-base font-medium
          hover:text-white/20 transition-all text-opacity-50
          ${
            item.id === activeSectionId
              ? 'font-bold !text-white !text-opacity-100' // Active style
              : ''
          }
        `}
      >
        {item.label}
      </Link>
      ))}
    </nav>
  );
}
