"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import type { Comic } from "@/lib/types"

interface FavoritesContextType {
  favorites: Comic[]
  addToFavorites: (comic: Comic) => void
  removeFromFavorites: (comicId: number | string) => void
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined)

export function FavoritesProvider({ children }: { children: ReactNode }) {
  const [favorites, setFavorites] = useState<Comic[]>([])

  // Cargar favoritos del localStorage al iniciar
  useEffect(() => {
    const savedFavorites = localStorage.getItem("wilberbooks-favorites")
    if (savedFavorites) {
      try {
        setFavorites(JSON.parse(savedFavorites))
      } catch (error) {
        console.error("Error parsing favorites from localStorage:", error)
      }
    }
  }, [])

  // Guardar favoritos en localStorage cuando cambien
  useEffect(() => {
    localStorage.setItem("wilberbooks-favorites", JSON.stringify(favorites))
  }, [favorites])

  const addToFavorites = (comic: Comic) => {
    setFavorites((prev) => {
      if (prev.some((item) => item.id === comic.id)) {
        return prev
      }
      return [...prev, comic]
    })
  }

  const removeFromFavorites = (comicId: number | string) => {
    setFavorites((prev) => prev.filter((comic) => comic.id !== comicId))
  }

  return (
    <FavoritesContext.Provider value={{ favorites, addToFavorites, removeFromFavorites }}>
      {children}
    </FavoritesContext.Provider>
  )
}

export function useFavorites() {
  const context = useContext(FavoritesContext)
  if (context === undefined) {
    throw new Error("useFavorites must be used within a FavoritesProvider")
  }
  return context
}
