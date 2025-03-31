import Link from "next/link";
import React from "react";

export const Navbar = () => {
  return (
    <>
      {" "}
      <nav className="top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            {/* Text Logo */}

            <Link href="/" className=" text-blue-900 text-xl font-bold">
              Sentio
            </Link>

            <div className="hidden md:flex space-x-8">
              <Link href="#" className="text-sm font-bold text-gray-600">
                Features
              </Link>
              <Link href="#" className="text-sm font-bold text-gray-600">
                Our Team
              </Link>
              <Link href="#" className="text-sm font-bold text-gray-600">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
