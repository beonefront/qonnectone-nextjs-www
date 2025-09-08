'use client';

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

export default function Navigation() {
  useEffect(() => {
    // Mobile menu toggle
    const mobileMenuButton = document.getElementById("mobileMenuButton");
    const mobileMenu = document.getElementById("mobileMenu");

    const handleMobileMenuClick = () => {
      mobileMenu?.classList.toggle("open");
    };

    if (mobileMenuButton) {
      mobileMenuButton.addEventListener("click", handleMobileMenuClick);
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (this: HTMLAnchorElement, e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href") || '');
        target?.scrollIntoView({
          behavior: "smooth",
        });
      });
    });

    // Cleanup
    return () => {
      if (mobileMenuButton) {
        mobileMenuButton.removeEventListener("click", handleMobileMenuClick);
      }
    };
  }, []);

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md sticky top-0 z-40">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image src="/logo.png" alt="Qonnect Logo" width={200} height={30} className="h-10" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="nav-link font-medium hover:text-primary">Strona główna</Link>
            <Link href="/moduly" className="nav-link font-medium hover:text-primary">Moduły</Link>
            <Link href="/metody-platnosci" className="nav-link font-medium hover:text-primary">Metody płatności</Link>
            <Link href="/business-cases" className="nav-link font-medium hover:text-primary">Business Cases</Link>
            <Link href="/o-nas" className="nav-link font-medium hover:text-primary">O nas</Link>
          </div>

          {/* Mobile Menu Button */}
          <button id="mobileMenuButton" className="md:hidden text-gray-600 dark:text-gray-300">
            <i className="fas fa-bars text-2xl"></i>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div id="mobileMenu" className="mobile-menu md:hidden">
          <div className="flex flex-col space-y-4 pb-4">
            <Link href="/" className="py-2 font-medium hover:text-primary">Strona główna</Link>
            <Link href="/moduly" className="py-2 font-medium hover:text-primary">Moduły</Link>
            <Link href="/metody-platnosci" className="py-2 font-medium hover:text-primary">Metody płatności</Link>
            <Link href="/business-cases" className="py-2 font-medium hover:text-primary">Business Cases</Link>
            <Link href="/o-nas" className="py-2 font-medium hover:text-primary">O nas</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
