'use client';
import Image from "next/image";
import React, { useState, useEffect } from 'react';
import { useTypewriter, Cursor } from "react-simple-typewriter";

const ImageSlider = () => {
  const [text] = useTypewriter({
    words: [
      "Welcome To My Blogs",
      "I Write About Programming",
      "UiUx Designer",
      "web Designer",
    ],
    loop: true,
    typeSpeed: 30,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });

  const images = [
    "/datascience.jpg",
    "/python6.webp",
    "/uiux4.jpg",
    "/nextjs7.jpeg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex + 1 === images.length ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full h-[440px] overflow-hidden">
      {/* Image Slider */}
      {images.map((image, index) => (
        <Image
          key={index}
          src={image}
          alt={`banner-${index}`}
          layout="fill"
          objectFit="cover"
          className={`transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Centered Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-[#5e376c] text-center">
        <h1 className="text-4xl font-bold mb-2">
          {text}
          <Cursor cursorBlinking cursorStyle="|" cursorColor="#5e376c" />
        </h1>
      </div>
    </div>
  );
};

export default ImageSlider;
