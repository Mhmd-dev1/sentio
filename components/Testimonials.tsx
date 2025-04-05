"use client";
import React from "react";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export const Testimonials = () => {
  const slides = [
    {
      image: "/youssef-rating.jpg",
      name: "Youssef Hamad",

      title: "Physical Education and Sports Instructor",

      description:
        "I often struggle with perfumes due to their limited effectiveness in handling physical conditions, especially for young athletes. I found this idea truly impressive, as it stands out by offering a unique ability to analyze all the elements an individual needs based on their body's nature. This is a groundbreaking innovation in the fragrance market.",
    },
    {
      image: "/mahdi-rating.jpg",
      name: "Mahdi Farhat",
      title: "Registered Nurse",
      description:
        "As everyone knows, nursing shifts are long and physically demanding, often leading to excessive sweating and short-lived fragrances. Nurses, like many others, struggle to find a scent that lasts throughout the day. The introduction of such a product is truly valuable, as it can analyze my body's unique chemistry and pH level to determine the most suitable, long-lasting fragrance. This innovation would be a game-changer for many men facing the same challenge.",
    },
  ];

  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section id="Testimonials" className="p-30">
      <h2 className="text-5xl font-bold text-center mb-15">
        See what people says about <span className="word">us</span>
      </h2>
      <div className="relative w-[80%] flex items-center h-[80vh] rounded-xl shadow-2xl overflow-hidden mx-auto">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={slide.image}
              alt={slide.name}
              layout="fill"
              objectFit="cover"
              className="brightness-75 rounded-xl w-full h-full object-contain"
            />
            <div className="absolute inset-0 flex items-center justify-center mt-60 p-6">
              <div className="max-w-lg text-white text-center bg-white/30 bg-opacity-20 backdrop-blur-md p-3 rounded-xl shadow-lg">
                <h2 className="text-3xl font-bold">{slide.name}</h2>
                <p className="text-lg  text-gray-200 italic">{slide.title}</p>
                <p className="mt-4 text-md " style={{ fontFamily: "Rubik" }}>
                  {slide.description}
                </p>
              </div>
            </div>
          </div>
        ))}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-700 p-2 rounded-full hover:bg-gray-900"
        >
          <ChevronLeft size={24} className="text-white" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-700 p-2 rounded-full hover:bg-gray-900"
        >
          <ChevronRight size={24} className="text-white" />
        </button>
      </div>
    </section>
  );
};
