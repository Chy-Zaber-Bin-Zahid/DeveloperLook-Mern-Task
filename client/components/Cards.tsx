"use client"

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { Upload, ChevronLeft, ChevronRight } from 'lucide-react'

const cardImages = [
  "/assets/card/c1.webp",
  "/assets/card/c2.jpeg",
  "/assets/card/c3.webp",
  "/assets/card/c4.jpeg",
]

export default function CustomCarouselCard() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const carouselRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleTransitionEnd = () => setIsTransitioning(false)
    const carousel = carouselRef.current
    carousel?.addEventListener('transitionend', handleTransitionEnd)
    return () => carousel?.removeEventListener('transitionend', handleTransitionEnd)
  }, [])

  const handlePrevious = () => {
    if (isTransitioning || currentIndex === 0) return
    setIsTransitioning(true)
    setCurrentIndex((prevIndex) => prevIndex - 1)
  }

  const handleNext = () => {
    if (isTransitioning || currentIndex === cardImages.length - 1) return
    setIsTransitioning(true)
    setCurrentIndex((prevIndex) => prevIndex + 1)
  }

  const handleDotClick = (index: number) => {
    if (isTransitioning || index === currentIndex) return
    setIsTransitioning(true)
    setCurrentIndex(index)
  }

  const showPreviousButton = currentIndex > 0
  const showNextButton = currentIndex < cardImages.length - 1

  return (
    <div className="grid grid-cols-4 gap-4 mt-4">
      <div>
        <div className="relative rounded-xl overflow-hidden">
        <div 
          ref={carouselRef}
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {cardImages.map((src, index) => (
            <div key={index} className="w-full flex-shrink-0 overflow-hidden">
              <Image
                src={src}
                alt={`Sleepover at Polly Pocket's Compact ${index + 1}`}
                width={300}
                height={200}
                className="w-full h-72 object-cover"
              />
            </div>
          ))}
        </div>
        {showPreviousButton && (
          <button
            onClick={handlePrevious}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 transition-colors duration-200"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        )}
        {showNextButton && (
          <button
            onClick={handleNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 transition-colors duration-200"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        )}
        <div className="absolute top-3 right-3 bg-white rounded-full p-2">
          <Upload className="w-4 h-4 text-gray-600" />
        </div>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {cardImages.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex ? 'bg-white' : 'bg-white/50'
              }`}
              onClick={() => handleDotClick(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
      <div className="py-4">
        <h2 className="text-lg font-semibold">Sleepover at Polly Compact</h2>
        <p className="text-sm text-gray-500">Hosted by Polly Pocket</p>
        <p className="text-sm font-semibold text-red-500 m-0">Sold out</p>
      </div>
      </div>
    </div>
  )
}


