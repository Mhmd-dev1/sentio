"use client";
import { useEffect, useState } from "react";

export default function MobilePopupModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if mobile/tablet (you can adjust breakpoints)
    const checkIfMobile = () => {
      const isMobileDevice = window.innerWidth <= 1024; // Adjust breakpoint as needed
      setIsMobile(isMobileDevice);

      if (isMobileDevice) {
        setIsOpen(true);
      }
    };

    // Initial check
    checkIfMobile();

    // Optional: Re-check on resize
    window.addEventListener("resize", checkIfMobile);
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  if (!isOpen || !isMobile) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-md w-full p-6 animate-fade-in">
        <div role="alert" className="alert alert-error">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 shrink-0 stroke-current"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>
            Alert! The website is not ready for mobile phones right now Open it
            on your Laptop
          </span>
        </div>

        <button
          onClick={() => setIsOpen(false)}
          className="w-full py-2 bg-blue-600 text-white rounded-md"
          aria-label="Close modal"
        ></button>
      </div>
    </div>
  );
}
