"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Info, Play } from "lucide-react"
import Link from "next/link"
import type { Comic } from "@/lib/types"

interface HeroSectionProps {
  comics: Comic[]
}

export default function HeroSection({ comics }: HeroSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const currentComic = comics[currentIndex]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % comics.length)
    }, 8000)

    return () => clearInterval(interval)
  }, [comics.length])

  if (!currentComic) return null

  return (
    <div className="relative w-full h-[70vh] overflow-hidden rounded-lg">
      {/* Imagen de fondo */}
      <div className="absolute inset-0">
        <Image
          src={
            currentComic.image || `/placeholder.svg?height=800&width=1200&query=comic book cover ${currentComic.title}`
          }
          alt={currentComic.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
      </div>

      {/* Contenido */}
      <div className="relative h-full flex flex-col justify-center px-6 md:px-12 max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">{currentComic.title}</h1>

        <div className="flex items-center gap-2 mb-4">
          <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm">{currentComic.publisher}</span>
          {currentComic.year && (
            <span className="bg-gray-800 text-white px-3 py-1 rounded-full text-sm">{currentComic.year}</span>
          )}
        </div>

        <p className="text-gray-300 text-lg mb-8 line-clamp-3">
          {currentComic.description || "Descubre este increíble cómic en nuestra tienda."}
        </p>

        <div className="flex flex-wrap gap-4">
          <Link href={`/comics/${currentComic.id}`}>
            <Button size="lg" className="bg-red-600 hover:bg-red-700">
              <Info className="mr-2 h-5 w-5" />
              Más información
            </Button>
          </Link>
          <Link href={`/comics/${currentComic.id}`}>
            <Button variant="outline" size="lg">
              <Play className="mr-2 h-5 w-5" />
              Ver preview
            </Button>
          </Link>
        </div>
      </div>

      {/* Indicadores */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2">
        {comics.map((_, index) => (
          <button
            key={index}
            className={`h-1.5 rounded-full transition-all ${
              index === currentIndex ? "w-8 bg-red-600" : "w-2 bg-gray-500"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  )
}
