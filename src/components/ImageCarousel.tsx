"use client";

import Image from "next/image";
import { useState } from "react";

interface ImageCarouselProps {
  images: string[];
  alt: string;
}

export default function ImageCarousel({ images, alt }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!images || images.length === 0) {
    return null;
  }

  if (images.length === 1) {
    return (
      <div className="project-image-wrapper">
        <Image
          src={images[0]}
          alt={alt}
          width={800}
          height={450}
          className="project-image"
        />
      </div>
    );
  }

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="carousel-container">
      <div className="project-image-wrapper">
        <Image
          src={images[currentIndex]}
          alt={`${alt} - Image ${currentIndex + 1}`}
          width={800}
          height={450}
          className="project-image"
        />
      </div>
      
      {/* Navigation buttons */}
      <button
        onClick={goToPrevious}
        className="carousel-button carousel-button-prev"
        aria-label="Previous image"
      >
        ‹
      </button>
      <button
        onClick={goToNext}
        className="carousel-button carousel-button-next"
        aria-label="Next image"
      >
        ›
      </button>

      {/* Dots indicator */}
      <div className="carousel-dots">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`carousel-dot ${index === currentIndex ? "active" : ""}`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>

      {/* Image counter */}
      <div className="carousel-counter">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
}
