"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import type { Comic } from "@/lib/types"

interface CartItem {
  comic: Comic
  quantity: number
}

interface CartContextType {
  cart: CartItem[]
  addToCart: (comic: Comic) => void
  removeFromCart: (comicId: number | string) => void
  updateQuantity: (comicId: number | string, quantity: number) => void
  clearCart: () => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([])

  // Cargar carrito del localStorage al iniciar
  useEffect(() => {
    const savedCart = localStorage.getItem("wilberbooks-cart")
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart))
      } catch (error) {
        console.error("Error parsing cart from localStorage:", error)
      }
    }
  }, [])

  // Guardar carrito en localStorage cuando cambie
  useEffect(() => {
    localStorage.setItem("wilberbooks-cart", JSON.stringify(cart))
  }, [cart])

  const addToCart = (comic: Comic) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.comic.id === comic.id)

      if (existingItem) {
        return prevCart.map((item) => (item.comic.id === comic.id ? { ...item, quantity: item.quantity + 1 } : item))
      } else {
        return [...prevCart, { comic, quantity: 1 }]
      }
    })
  }

  const removeFromCart = (comicId: number | string) => {
    setCart((prevCart) => prevCart.filter((item) => item.comic.id !== comicId))
  }

  const updateQuantity = (comicId: number | string, quantity: number) => {
    setCart((prevCart) => prevCart.map((item) => (item.comic.id === comicId ? { ...item, quantity } : item)))
  }

  const clearCart = () => {
    setCart([])
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}
