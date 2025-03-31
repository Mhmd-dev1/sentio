import Image from "next/image";
import React from "react";

export const Hero = () => {
  return (
    <section className=" rounded-lg relative mx-auto w-[95%] h-[600px]  ">
      <video
        autoPlay
        loop
        muted
        playsInline
        className=" absolute top-0 left-0  -z-10 w-full h-full object-contain opacity-80"
      >
        <source src="/background-video.mp4" type="video/mp4" />
        <Image
          src="/failed-backdround-img.jpg"
          alt="Failed to load video Image"
          fill
        />
      </video>
      <div className="relative z-10 flex flex-col items-start  justify-center h-full">
        <h1 className="ml-15  mb-1 text-3xl font-bold">
          A Scent as Unique as You
        </h1>
        <p className="ml-15 font-medium text-lg mt-2 max-w-[500px] leading-relaxed text-left ">
          Men AI-Infused Fragrance Bottle: This next-generation perfume bottle
          integrates AI-driven sensors to analyze the user's skin chemistry
          before dispensing fragrance. Instead of a traditional fixed-scent
          perfume, this bottle adjusts and customizes the fragrance blend in
          real time.{" "}
        </p>
      </div>
    </section>
  );
};
