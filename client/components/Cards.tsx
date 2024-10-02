'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { Upload, ChevronLeft, ChevronRight } from 'lucide-react'

type CardItem = {
  _id: string;
  category: string;
  images: string[];
  heading1: string;
  heading2: string;
  description: string;
};

type CardsProps = {
  data: { cards: CardItem[] } | undefined; // Data structure
  isLoading: boolean;
  error: Error | null;
};

export default function CustomCarouselCard({ data, isLoading, error }: CardsProps) {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleTransitionEnd = () => setIsTransitioning(false);
    const carousel = carouselRef.current;
    carousel?.addEventListener('transitionend', handleTransitionEnd);
    return () => carousel?.removeEventListener('transitionend', handleTransitionEnd);
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!data || data.cards.length === 0) return <div>No data available</div>;

  const currentCard = data.cards[currentCardIndex];

  if (!currentCard) return <div>No card data available</div>;

  const handlePreviousCard = () => {
    if (isTransitioning || currentCardIndex === 0) return;
    setIsTransitioning(true);
    setCurrentCardIndex((prevIndex) => prevIndex - 1);
    setCurrentImageIndex(0); // Reset image index when changing cards
  };

  const handleNextCard = () => {
    if (isTransitioning || currentCardIndex === data.cards.length - 1) return;
    setIsTransitioning(true);
    setCurrentCardIndex((prevIndex) => prevIndex + 1);
    setCurrentImageIndex(0); // Reset image index when changing cards
  };

  const handlePreviousImage = () => {
    if (isTransitioning || currentImageIndex === 0) return;
    setIsTransitioning(true);
    setCurrentImageIndex((prevIndex) => prevIndex - 1);
  };

  const handleNextImage = () => {
    if (isTransitioning || currentImageIndex === currentCard.images.length - 1) return;
    setIsTransitioning(true);
    setCurrentImageIndex((prevIndex) => prevIndex + 1);
  };

  const handleDotClick = (index: number) => {
    if (isTransitioning || index === currentImageIndex) return;
    setIsTransitioning(true);
    setCurrentImageIndex(index);
  };

  const showPreviousImageButton = currentImageIndex > 0;
  const showNextImageButton = currentImageIndex < currentCard.images.length - 1;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-4">
      {data.cards.map((card, cardIndex) => (
        <div key={card._id} className={cardIndex === currentCardIndex ? 'relative rounded-xl overflow-hidden' : 'hidden'}>
          <div className="flex transition-transform duration-300 ease-in-out" ref={carouselRef} style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}>
            {card.images.map((src, imageIndex) => (
              <div key={imageIndex} className="w-full flex-shrink-0 overflow-hidden">
                <Image
                  src={`/assets/card/${src}`}
                  alt={`${card.heading1} ${imageIndex + 1}`}
                  width={300}
                  height={200}
                  className="w-full h-72 object-cover"
                />
              </div>
            ))}
          </div>
          {showPreviousImageButton && (
            <button
              onClick={handlePreviousImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 transition-colors duration-200"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          )}
          {showNextImageButton && (
            <button
              onClick={handleNextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 transition-colors duration-200"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          )}
          <div className="absolute top-3 right-3 bg-white rounded-full p-2 ">
            <Upload className="w-4 h-4 text-gray-600 " />
          </div>
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {card.images.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-colors ${index === currentImageIndex ? 'bg-white' : 'bg-white/50'}`}
                onClick={() => handleDotClick(index)}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
          <div className="py-4">
            <h2 className="text-lg font-semibold">{card.heading1}</h2>
            <p className="text-sm text-gray-500">{card.heading2}</p>
            <p className="text-sm font-semibold text-gray-700 m-0">{card.description}</p>
          </div>
        </div>
      ))}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {data.cards.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-colors ${index === currentCardIndex ? 'bg-white' : 'bg-white/50'}`}
            onClick={() => setCurrentCardIndex(index)}
            aria-label={`Go to card ${index + 1}`}
          />
        ))}
      </div>
      {currentCardIndex > 0 && (
        <button
          onClick={handlePreviousCard}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 transition-colors duration-200"
          aria-label="Previous card"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      )}
      {currentCardIndex < data.cards.length - 1 && (
        <button
          onClick={handleNextCard}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 transition-colors duration-200"
          aria-label="Next card"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      )}
    </div>
  );
}
