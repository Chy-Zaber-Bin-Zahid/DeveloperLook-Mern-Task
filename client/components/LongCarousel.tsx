"use client"

import * as React from "react"
import { ChevronLeftIcon, ChevronRightIcon, HomeIcon, BedIcon, StarIcon, CastleIcon, SunIcon, ImageIcon, CoffeeIcon, MountainIcon, SnowflakeIcon, PianoIcon } from "lucide-react"

const categories = [
    { icon: <HomeIcon />, name: "Fashion" },
    { icon: <BedIcon />, name: "Rooms" },
    { icon: <StarIcon />, name: "Luxury escapes" },
    { icon: <CastleIcon />, name: "Mansions" },
    { icon: <SunIcon />, name: "Sunny beaches" },
    { icon: <ImageIcon />, name: "Amazing views" },
    { icon: <CoffeeIcon />, name: "Bed & breakfasts" },
    { icon: <MountainIcon />, name: "Mountain lodges" },
    { icon: <SnowflakeIcon />, name: "Winter wonderlands" },
    { icon: <PianoIcon />, name: "Grand pianos" },
    { icon: <HomeIcon />, name: "Cozy cabins" },
    { icon: <CastleIcon />, name: "Historic castles" },
    { icon: <StarIcon />, name: "OMG!" },
    { icon: <ImageIcon />, name: "Artistic spaces" },
    { icon: <CoffeeIcon />, name: "Charming inns" },
    { icon: <MountainIcon />, name: "Top of the world" },
    { icon: <SnowflakeIcon />, name: "Arctic" },
    { icon: <PianoIcon />, name: "Musical havens" },
    { icon: <HomeIcon />, name: "Unique stays" },
    { icon: <HomeIcon />, name: "Urban lofts" },
    { icon: <BedIcon />, name: "Stylish suites" },
    { icon: <StarIcon />, name: "Exclusive retreats" },
    { icon: <CastleIcon />, name: "Fairy tale castles" },
    { icon: <SunIcon />, name: "Tropical escapes" },
    { icon: <ImageIcon />, name: "Inspiring studios" },
    { icon: <CoffeeIcon />, name: "Charming cafes" },
    { icon: <MountainIcon />, name: "Scenic cabins" },
    { icon: <SnowflakeIcon />, name: "Frosty hideaways" },
    { icon: <PianoIcon />, name: "Melodic getaways" },
    { icon: <StarIcon />, name: "Starry nights" },
    { icon: <HomeIcon />, name: "Rural retreats" },
    { icon: <CastleIcon />, name: "Grand estates" },
    { icon: <SunIcon />, name: "Beachfront properties" },
    { icon: <ImageIcon />, name: "Creative spaces" },
    { icon: <CoffeeIcon />, name: "Hipster hangouts" },
    { icon: <MountainIcon />, name: "Adventurous lodges" },
    { icon: <SnowflakeIcon />, name: "Igloo experiences" },
    { icon: <PianoIcon />, name: "Concert venues" },
    { icon: <HomeIcon />, name: "Heritage homes" },
    { icon: <BedIcon />, name: "Family suites" },
]

type LongCarousel = {
    handleCategoryClick: (category: string) => void;
}

export default function LongCarousel({ handleCategoryClick }: LongCarousel) {
    const [currentIndex, setCurrentIndex] = React.useState(0)
    const itemsPerPage = 10
    const totalPages = Math.ceil(categories.length / itemsPerPage)

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalPages)
    }

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + totalPages) % totalPages)
    }

    return (
        <div className="relative w-full overflow-hidden py-2">
            <div
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {Array.from({ length: totalPages }).map((_, pageIndex) => (
                    <div key={pageIndex} className="flex-shrink-0 w-full">
                        <div className="flex justify-between items-center">
                            {categories.slice(pageIndex * itemsPerPage, (pageIndex + 1) * itemsPerPage).map((category, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col items-center justify-center mx-2 cursor-pointer"
                                    onClick={() => handleCategoryClick(category.name)}
                                >
                                    <div className="text-3xl">{category.icon}</div>
                                    <div className="text-xs text-center font-medium">{category.name}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            {currentIndex > 0 && (
                <button
                    onClick={prevSlide}
                    className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white p-2 text-gray-800 shadow-md z-10"
                    aria-label="Previous slide"
                >
                    <ChevronLeftIcon className="h-6 w-6" />
                </button>
            )}
            {currentIndex < totalPages - 1 && (
                <button
                    onClick={nextSlide}
                    className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white p-2 text-gray-800 shadow-md z-10"
                    aria-label="Next slide"
                >
                    <ChevronRightIcon className="h-6 w-6" />
                </button>
            )}
        </div>
    )
}