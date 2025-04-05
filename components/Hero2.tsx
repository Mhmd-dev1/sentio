import React from "react";
import { FaEnvira } from "react-icons/fa";
import { IoFitnessOutline } from "react-icons/io5";
import { MdBiotech } from "react-icons/md";

export const Hero2 = () => {
  return (
    <section className="hero-2 bg-gray-50 w-full h-auto">
      <div className="flex justify-center items-center space-x-8 ">
        <div className="p-2 text-center flex flex-col justify-center items-center">
          <FaEnvira className=" text-black mb-2.5 text-center " size={48} />
          <h1 className="mt-1   font-bold text-2xl title">Sustainability</h1>
          <p className="w-[350px] text-gray-700 mt-3 text-lg">
            waste-free fragrance: refillable pods + personalized scents
            eliminate guesswork and reduce waste.
          </p>
        </div>
        <div className="p-3 text-center flex flex-col items-center justify-center">
          <IoFitnessOutline className="mr-4 text-black mb-2.5" size={48} />
          <h1 className=" title mt-1 font-bold text-2xl">Wellness Angle</h1>
          <p className="w-[350px] text-gray-700 mt-3 text-lg">
            Fragrance that fights stress and anxiety—powered by biometrics and
            aromatherapy.
          </p>
        </div>
        <div className="p-3 text-center flex flex-col items-center justify-center">
          <MdBiotech className="mr-4 text-black mb-1" size={48} />
          <h1 className="title  font-bold text-2xl">AI-Powered Precision</h1>
          <p className="w-[425px] mt-1 text-gray-700 text-lg">
            Scans your skin (pH, moisture, temp) to craft custom fragrances.
            Your evolving scent profile saves as an NFT—securely stored and
            managed in the mobile app.
          </p>
        </div>
      </div>
    </section>
  );
};
