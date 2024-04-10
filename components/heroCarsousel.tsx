"use client";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
const HeroCarsousel = () => {
  const heroImage = [
    {
      uRl: "/assets/images/hero-1.svg",
      alt: "smartWatch",
    },
    {
      uRl: "/assets/images/hero-2.svg",
      alt: "bag",
    },
    {
      uRl: "/assets/images/hero-3.svg",
      alt: "lamp",
    },
    {
      uRl: "/assets/images/hero-4.svg",
      alt: "air-fryer",
    },
  ];
  return (
    <div className="hero-carousel">
      {" "}
      <Carousel
        showThumbs={false}
        autoPlay
        infiniteLoop
        interval={2000}
        showArrows={false}
        showStatus={false}
      >
        {heroImage.map((image) => (
          <Image
            src={image.uRl}
            alt={image.alt}
            width={484}
            height={484}
            className="object-contain"
            key={image.alt}
          />
        ))}
      </Carousel>
    </div>
  );
};

export default HeroCarsousel;
