"use client";
import React from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import { IoIosArrowRoundDown } from "react-icons/io";
import { motion } from "framer-motion";
import Image from "next/image";

export const Hero = () => {
  return (
    <section className="relative flex h-screen w-full overflow-hidden">
      {/* Full Background Image */}
      <div className="absolute inset-0 z-0 bg-[url('/HERO.jpg')] bg-cover bg-center bg-no-repeat" />

      {/* Dark Overlay */}
      <div className="absolute inset-0 z-10 bg-black/10" />

      {/* Main Content Container */}
      <div className="relative z-20 mx-auto flex h-full w-full max-w-7xl">
        {/* Left Content Area (wider) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="flex h-full w-full flex-col items-start justify-center p-8 text-center mt-3 text-white lg:w-4/5"
        >
          <div className="max-w-2xl flex flex-col items-start ">
            <h1 className="mb-4 text-5xl font-light">
              A Scent as Unique as You
            </h1>
            <p className="hero-desc mb-8 text-lg text-start leading-relaxed ">
              Introducing the world&apos;s first smart fragrance—an AI-powered
              scent system that learns and evolves with you. This revolutionary
              bottle analyzes your body chemistry and wellness signals in real
              time, crafting a scent that adapts to your skin,mood,and
              wellbeing. No static perfumes,no wrong choices—just a fragrance
              that intuitively supports you throughout your day.
            </p>
            <Link href="#features">
              <Button className="hero-btn w-[170px] rounded-[24px]  px-4 py-2 font-medium border-transparent cursor-pointer  text-lg  transition-all  hover:shadow-lg hover:z-10 hover:scale-110">
                Learn More
                <IoIosArrowRoundDown className="text-xl" />
              </Button>
            </Link>
          </div>
        </motion.div>

        {/* Right Sidebar (narrower) */}
        <motion.aside
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="hidden h-full w-1/5 flex-col items-center justify-center border-l-2 border-white/30 bg-black/10 p-4 backdrop-blur-[2px] lg:flex"
        >
          <div className="w-full max-w-[700px] ">
            <h2 className="mb-3 text-lg font-medium  text-white text-center flex justify-center items-center">
              DISCOVER THE FUTURE OF FRAGRANCE
            </h2>

            <div className="mb-2">
              <h3 className="mb-3 text-xs font-semibold text-white/80  text-center flex justify-center items-center">
                LIMITED COLLECTION
              </h3>

              {/* <div className="space-y-3">
                <div className="flex justify-between border-b border-white/20 pb-2">
                  <span className="text-sm font-medium text-white">
                    Night in Paris
                  </span>
                  <span className="text-sm text-white/90">$42.00</span>
                </div>

                <div className="flex justify-between border-b border-white/20 pb-2">
                  <span className="text-sm font-medium text-white">
                    Black Rose Pelot
                  </span>
                  <span className="text-sm text-white/90">$32.50</span>
                </div>
              </div> */}
            </div>

            {/* <Button className="w-full rounded-md bg-white/90 px-4 py-2 text-sm font-medium text-black transition-all hover:bg-white hover:shadow-md">
              EXPLORE MORE
            </Button> */}
            <Image
              width={1500}
              height={1500}
              src="/product-img.jpg"
              className="rotate-30 mt-10  transition-transform duration-300 hover:rotate-0 hover:scale-110 hover:z-10"
              alt="AI bottle product "
            />
          </div>
        </motion.aside>
      </div>
    </section>
  );
};
