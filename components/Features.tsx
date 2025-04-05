"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      when: "beforeChildren",
    },
  },
};

const textVariants = {
  hidden: { x: -50, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100 },
  },
};

const imageVariants = {
  hidden: { x: 50, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100 },
  },
};

const quoteVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};
export const Features = () => {
  return (
    <section className="section-how px-15 py-20" id="features">
      <motion.div
        className="container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <span className="subheading text-lg">How it works</span>
        <h2 className="heading-secondary text-6xl mb-30">
          Discover The Innovative <span className="word">Features</span>
        </h2>
      </motion.div>
      <motion.div
        className="container grid gap-y-40 gap-x-2 grid-cols-2 items-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* <!-- STEP 01 --> */}
        <motion.div className="step-text-box" variants={textVariants}>
          <p className="step-number text-7xl mb-1">01</p>
          <h3 className="heading-tertiary mb-4 text-4xl">
            Confidence in every spray
          </h3>
          <p className="step-description text-lg ">
            This revolutionary system scans your skin in real time, analyzing pH
            levels (to tailor notes to your skin&apos;s acidity), moisture and
            oil content (for lasting wear), and body temperature (to amplify or
            soften notes). The advanced model even detects sweat and hormone
            shifts, adapting intensity to your stress, mood, or activity.
            (Bonus: Pair it with the sleek magnetic charging base for effortless
            eco-friendly use.)
          </p>
        </motion.div>
        <motion.div className="step-img-box" variants={imageVariants}>
          <Image
            width={320}
            height={320}
            src="/tool-label.jpg"
            className="step-img rounded-[14px] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.08)] transition-all "
            alt="AI Bottle features image"
          />
        </motion.div>

        <motion.div className="step-img-box " variants={imageVariants}>
          {/* <!-- STEP 02 --> */}

          <Image
            src="/analyzing-pic-1.jpg"
            width={320}
            height={320}
            className="step-img rounded-[14px] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.08)] transition-all "
            alt="Analyzing process image"
          />
        </motion.div>
        <motion.div className="step-text-box" variants={textVariants}>
          <p className="step-number text-7xl mb-1 ">02</p>
          <h3 className="heading-tertiary mb-4 text-4xl">
            Smart Skin Analysis
          </h3>
          <p className="step-description text-lg">
            Precision Sensors: Contactless scanning measures: Our fragrance tool
            has a pH balance (like the 6.9 shown) to adapt fragrance notes to
            your skin type Moisture, oil levels, and temperature for lasting
            wear, via interacting with the AI the Algorithms instantly adjust
            scent composition—for example, balancing brighter top notes if your
            pH leans acidic. Since the skin pH affects how perfume develops—our
            system ensures your scent smells exactly as intended, for you.
          </p>
        </motion.div>

        {/* <!-- STEP 03 --> */}
        <motion.div className="step-text-box" variants={textVariants}>
          <p className="step-number text-7xl mb-1 ">03</p>
          <h3 className="heading-tertiary mb-4 text-4xl">
            Smart Scent Blending
          </h3>
          <p className="step-description text-lg">
            The system calculates the ideal ratio of notes based on your skin
            chemistry and preferences. Micro-pumps release precise amounts from
            each chamber (visible as swirling liquids in the vial). Unlike
            static perfumes, your scent is mixed fresh before each spray for
            optimal adaptation.
          </p>
        </motion.div>
        <motion.div className="step-img-box " variants={imageVariants}>
          <Image
            width={320}
            height={320}
            src="/blending-img22.jpg"
            className="step-img  rounded-[14px] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.08)] transition-all "
            alt="Blending process image"
          />
        </motion.div>
      </motion.div>
      <motion.div
        className=" pt-34 text-center"
        variants={quoteVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        <p className="text-2xl italic  text-gray-700">
          "Where technology meets artistry: watch your signature scent come to
          life."
        </p>
      </motion.div>
    </section>
  );
};
