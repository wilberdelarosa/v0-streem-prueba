"use client"

import { Button } from "@/components/ui/button"
import { ShoppingCart, Plus } from "lucide-react"
import { useCart } from "@/context/cart-context"
import type { Comic } from "@/lib/types"
import { useState } from "react"

interface AddToCartButtonProps {
  comic: Comic
  variant?: "default" | "small" | "icon"
}

export default function AddToCartButton({ comic, variant = "default" }: AddToCartButtonProps) {
  const { addToCart } = useCart()
  const [isAdding, setIsAdding] = useState(false)

  const handleAddToCart = () => {
    setIsAdding(true)
    addToCart(comic)

    setTimeout(() => {
      setIsAdding(false)
    }, 1000)
  }

  if (variant === "small") {
    return (
      <Button
        size="sm"
        className="w-full bg-red-600 hover:bg-red-700 text-xs"
        onClick={handleAddToCart}
        disabled={isAdding}
      >
        {isAdding ? "¡Añadido!" : "Añadir al carrito"}
      </Button>
    )
  }

  if (variant === "icon") {
    return (
      <Button variant="secondary" size="icon" className="h-8 w-8" onClick={handleAddToCart} disabled={isAdding}>
        {isAdding ? <Plus className="h-4 w-4" /> : <ShoppingCart className="h-4 w-4" />}
      </Button>
    )
  }

  return (
    <Button className="bg-red-600 hover:bg-red-700" onClick={handleAddToCart} disabled={isAdding}>
      {isAdding ? (
        "¡Añadido al carrito!"
      ) : (
        <>
          <ShoppingCart className="mr-2 h-5 w-5" />
          Añadir al carrito
        </>
      )}
    </Button>
  )
}
