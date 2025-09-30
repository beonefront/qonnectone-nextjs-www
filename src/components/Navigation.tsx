'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";

export default function Navigation() {
  const pathname = usePathname();

  // Scroll state to nudge the bar up when user scrolls
  const [scrolled, setScrolled] = useState(false);
  // Mobile menu state
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const navItems = useMemo(() => [
    { href: "/", label: "Strona główna" },
    { href: "/moduly", label: "Moduły" },
    { href: "/modele-wspolpracy", label: "Modele współpracy" },
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
    <>
      <nav className={`fixed inset-x-0 z-40 transition-transform duration-300 ${scrolled ? "-translate-y-1" : "translate-y-3"}`} style={{ top: 20 }}>
        <div className="container mx-auto px-4 flex justify-center">
          {/* Desktop segmented control with logo */}
          <div
            className="hidden md:flex relative w-fit items-center rounded-full border border-white/20 bg-white/60 backdrop-blur-sm p-1.5 shadow-sm"
            ref={containerRef}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* Logo */}
            <div className="flex items-center px-3 py-1">
              <Link href="/">
                <Image
                  src="/logo.png"
                  alt="Qonnect"
                  width={100}
                  height={28}
                  className="h-7 w-auto cursor-pointer"
                  priority
                />
              </Link>
            </div>

            {/* Divider */}
            <div className="h-6 w-px bg-gray-300/50 mx-1" />

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

        {/* Mobile Navigation Header */}
        <div className="md:hidden container mx-auto px-4">
          <div className="flex items-center justify-between rounded-2xl border border-white/20 bg-white/80 backdrop-blur-md p-3 shadow-sm">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/">
                <Image
                  src="/logo.png"
                  alt="Qonnect"
                  width={120}
                  height={32}
                  className="h-8 w-auto cursor-pointer"
                  priority
                />
              </Link>
            </div>

            {/* Hamburger Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="relative z-50 flex h-10 w-10 items-center justify-center rounded-lg bg-white/60 transition-colors hover:bg-white/80"
              aria-label="Toggle menu"
            >
              <div className="flex flex-col space-y-1">
                <span
                  className={`block h-0.5 w-5 bg-gray-900 transition-all duration-300 ${
                    isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
                  }`}
                />
                <span
                  className={`block h-0.5 w-5 bg-gray-900 transition-all duration-300 ${
                    isMobileMenuOpen ? 'opacity-0' : ''
                  }`}
                />
                <span
                  className={`block h-0.5 w-5 bg-gray-900 transition-all duration-300 ${
                    isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/20 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Menu Content */}
          <div className="absolute inset-x-4 top-20 mt-4 rounded-2xl border border-white/20 bg-white/95 backdrop-blur-md shadow-2xl">
            <div className="p-6">
              <div className="space-y-1">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center rounded-xl px-4 py-3 text-left font-medium transition-colors ${
                      isActive(item.href)
                        ? "bg-blue-50 text-blue-700"
                        : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                    }`}
                  >
                    <span className="text-base">{item.label}</span>
                    {isActive(item.href) && (
                      <svg
                        className="ml-auto h-5 w-5 text-blue-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
