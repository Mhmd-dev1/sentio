"use client";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { SlideBottom } from "../utility/animation";

export const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 w-full bg-transparent z-50 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo - Left Aligned */}
          <motion.div
            variants={SlideBottom(0)}
            initial="hidden"
            animate="visible"
            className="flex-1"
          >
            <Link href="/" className="text-gray-100 text-xl font-bold">
              Sentio
            </Link>
          </motion.div>

          {/* Centered Navigation Links */}
          <div className="hidden md:flex flex-1 justify-center">
            <div className="flex space-x-8">
              <motion.div
                variants={SlideBottom(0.2)}
                initial="hidden"
                animate="visible"
              >
                <Link
                  href="#features"
                  className="text-[16px] font-bold text-gray-100 hover:underline hover:underline-offset-8 cursor-pointer"
                >
                  Features
                </Link>
              </motion.div>
              <motion.div
                variants={SlideBottom(0.4)}
                initial="hidden"
                animate="visible"
              >
                <Link
                  href="#MobileApp"
                  className="text-[16px] font-bold text-gray-100 hover:underline hover:underline-offset-8 cursor-pointer whitespace-nowrap"
                >
                  The&nbsp;Mobile&nbsp;App
                </Link>
              </motion.div>
              {/* <motion.div
                variants={SlideBottom(0.6)}
                initial="hidden"
                animate="visible"
              >
                <Link
                  href="#OurTeam"
                  className="text-[16px] font-bold text-gray-100 hover:underline hover:underline-offset-8 cursor-pointer whitespace-nowrap"
                >
                  Our&nbsp;Team
                </Link>
              </motion.div> */}
              <motion.div
                variants={SlideBottom(0.8)}
                initial="hidden"
                animate="visible"
              >
                <Link
                  href="#Testimonials"
                  className="text-[16px] font-bold text-gray-100 hover:underline hover:underline-offset-8 cursor-pointer"
                >
                  Testimonials
                </Link>
              </motion.div>
            </div>
          </div>

          {/* Empty div to balance flex layout */}
          <div className="flex-1"></div>
        </div>
      </div>
    </nav>
  );
};
