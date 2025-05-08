"use client"

import { Button } from "@/components/ui/button"
import { Heart } from "lucide-react"
import { useFavorites } from "@/context/favorites-context"
import type { Comic } from "@/lib/types"
import { useState, useEffect } from "react"

interface AddToFavoritesButtonProps {
  comic: Comic
  variant?: "default" | "icon"
}

export default function AddToFavoritesButton({ comic, variant = "default" }: AddToFavoritesButtonProps) {
  const { favorites, addToFavorites, removeFromFavorites } = useFavorites()
  const [isFavorite, setIsFavorite] = useState(false)

  useEffect(() => {
    setIsFavorite(favorites.some((fav) => fav.id === comic.id))
  }, [favorites, comic.id])

  const toggleFavorite = () => {
    if (isFavorite) {
      removeFromFavorites(comic.id)
    } else {
      addToFavorites(comic)
    }
  }

  if (variant === "icon") {
    return (
      <Button variant="secondary" size="icon" className="h-8 w-8" onClick={toggleFavorite}>
        <Heart className={`h-4 w-4 ${isFavorite ? "fill-red-500 text-red-500" : ""}`} />
      </Button>
    )
  }

  return (
    <Button variant="outline" onClick={toggleFavorite}>
      <Heart className={`mr-2 h-5 w-5 ${isFavorite ? "fill-red-500 text-red-500" : ""}`} />
      {isFavorite ? "Quitar de favoritos" : "Añadir a favoritos"}
    </Button>
  )
}
