'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";

export default function Navigation() {
  const pathname = usePathname();

  // Scroll state to nudge the bar up when user scrolls
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = useMemo(() => [
    { href: "/", label: "Strona główna" },
    { href: "/moduly", label: "Moduły" },
    { href: "/metody-platnosci", label: "Metody płatności" },
    { href: "/business-cases", label: "Business Cases" },
    { href: "/o-nas", label: "O nas" },
  ], []);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname?.startsWith(href);
  };

  // Sliding pill background across items
  const itemRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [pillStyle, setPillStyle] = useState<{ width: number; left: number } | null>(null);

  const activeIndex = useMemo(() => {
    const index = navItems.findIndex((i) => (i.href === "/" ? pathname === "/" : pathname?.startsWith(i.href)));
    return index === -1 ? 0 : index;
  }, [navItems, pathname]);

  useEffect(() => {
    const targetIndex = hoveredIndex ?? activeIndex;
    const container = containerRef.current;
    const el = itemRefs.current[targetIndex];
    if (!container || !el) return;
    const containerRect = container.getBoundingClientRect();
    const rect = el.getBoundingClientRect();
    const left = rect.left - containerRect.left;
    setPillStyle({ width: rect.width, left });
  }, [hoveredIndex, activeIndex, navItems.length]);

  return (
    <nav className={`fixed inset-x-0 z-40 transition-transform duration-300 ${scrolled ? "-translate-y-1" : "translate-y-3"}`} style={{ top: 20 }}>
      <div className="container mx-auto px-4 flex justify-center">
        {/* Desktop segmented control without logo */}
        <div
          className="hidden md:flex relative w-fit items-center rounded-full border border-white/20 bg-white/60 backdrop-blur-md p-1.5 shadow-sm"
          ref={containerRef}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {/* Shared sliding pill */}
          {pillStyle && (
            <div
              className="absolute top-1.5 bottom-1.5 rounded-full bg-white/60 transition-all duration-300"
              style={{ left: pillStyle.left, width: pillStyle.width }}
            />
          )}

          {navItems.map((item, idx) => (
            <Link
              key={item.href}
              href={item.href}
              ref={(el) => { itemRefs.current[idx] = el; }}
              className="relative z-[1] px-4 py-2"
              onMouseEnter={() => setHoveredIndex(idx)}
            >
              <span
                className={`relative block text-sm font-medium tracking-tight transition-colors duration-200 ${
                  (hoveredIndex ?? activeIndex) === idx ? "text-gray-900" : "text-gray-900/60 hover:text-gray-900"
                }`}
              >
                {item.label}
              </span>
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile simple list */}
      <div className="md:hidden container mx-auto px-4">
        <div className="mt-2 flex items-center justify-center">
          <div className="relative w-full max-w-md rounded-2xl border border-white/20 bg-white/60 backdrop-blur-md p-2">
            <div className="grid grid-cols-2 gap-1">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} className={`px-3 py-2 text-center rounded-xl text-sm font-medium ${isActive(item.href) ? "bg-white/60 text-gray-900" : "text-gray-900/70 hover:text-gray-900 hover:bg-white/40"}`}>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
