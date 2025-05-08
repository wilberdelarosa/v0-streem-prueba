"use client"

import { useFavorites } from "@/context/favorites-context"
import ComicGrid from "@/components/comic-grid"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function FavoritesPage() {
  const { favorites } = useFavorites()

  if (favorites.length === 0) {
    return (
      <div className="text-center py-16 space-y-6">
        <h1 className="text-3xl font-bold">No tienes favoritos</h1>
        <p className="text-gray-400">Añade cómics a tus favoritos para verlos aquí.</p>
        <Link href="/">
          <Button size="lg" className="mt-4">
            Explorar cómics
          </Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      <h1 className="text-3xl md:text-4xl font-bold">Tus favoritos</h1>
      <ComicGrid comics={favorites} />
    </div>
  )
}
