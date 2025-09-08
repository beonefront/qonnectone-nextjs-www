'use client';

import { useEffect } from "react";

export default function DarkModeToggle() {
  useEffect(() => {
    // Dark mode toggle
    const darkModeToggle = document.getElementById("darkModeToggle");
    const htmlElement = document.documentElement;

    const handleDarkModeToggle = () => {
      htmlElement.classList.toggle("dark");

      // Update button icon
      const icon = darkModeToggle?.querySelector("i");
      if (htmlElement.classList.contains("dark")) {
        icon?.classList.remove("fa-moon");
        icon?.classList.add("fa-sun");
        localStorage.setItem("darkMode", "enabled");
      } else {
        icon?.classList.remove("fa-sun");
        icon?.classList.add("fa-moon");
        localStorage.setItem("darkMode", "disabled");
      }
    };

    if (darkModeToggle) {
      darkModeToggle.addEventListener("click", handleDarkModeToggle);
    }

    // Check for saved dark mode preference
    if (localStorage.getItem("darkMode") === "enabled") {
      htmlElement.classList.add("dark");
      const icon = darkModeToggle?.querySelector("i");
      icon?.classList.remove("fa-moon");
      icon?.classList.add("fa-sun");
    }

    // Cleanup
    return () => {
      if (darkModeToggle) {
        darkModeToggle.removeEventListener("click", handleDarkModeToggle);
      }
    };
  }, []);

  return (
    <button id="darkModeToggle" className="dark-mode-toggle bg-gray-800 text-white rounded-full p-3 shadow-lg fixed top-4 right-4 z-50">
      <i className="fas fa-moon"></i>
    </button>
  );
}
