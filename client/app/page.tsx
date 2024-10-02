'use client'

import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import LongCarousel from "@/components/LongCarousel"
import Cards from "@/components/Cards";

const fetchFilteredResults = async (category: string) => {
  const response = await axios.get(`http://localhost:3001/api/filter?category=${encodeURIComponent(category)}`)
  return response.data.payload
}

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const { data, isLoading, error } = useQuery({
    queryKey: ['filteredResults', selectedCategory],
    queryFn: () => selectedCategory ? fetchFilteredResults(selectedCategory) : null,
    enabled: !!selectedCategory,
  })

  console.log(data);

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category)
  }

  return (
    <div className="max-w-bigScreen mx-auto">
      <LongCarousel handleCategoryClick={handleCategoryClick} />
      <Cards data={data} isLoading={isLoading} error={error as Error} />
    </div>
  )
}
