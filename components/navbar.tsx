"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { Search, ShoppingCart, Heart, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useCart } from "@/context/cart-context"
import { Badge } from "@/components/ui/badge"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const pathname = usePathname()
  const { cart } = useCart()

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/90 backdrop-blur-sm" : "bg-gradient-to-b from-black/80 to-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center gap-8">
            <Link href="/" className="text-red-600 font-bold text-2xl">
              WilberBooks
            </Link>

            <nav className="hidden md:flex items-center gap-6">
              <Link
                href="/"
                className={`text-sm ${pathname === "/" ? "text-white font-medium" : "text-gray-300 hover:text-white"}`}
              >
                Inicio
              </Link>
              <Link
                href="/categorias/marvel"
                className={`text-sm ${pathname === "/categorias/marvel" ? "text-white font-medium" : "text-gray-300 hover:text-white"}`}
              >
                Marvel
              </Link>
              <Link
                href="/categorias/dc"
                className={`text-sm ${pathname === "/categorias/dc" ? "text-white font-medium" : "text-gray-300 hover:text-white"}`}
              >
                DC Comics
              </Link>
              <Link
                href="/categorias/independientes"
                className={`text-sm ${pathname === "/categorias/independientes" ? "text-white font-medium" : "text-gray-300 hover:text-white"}`}
              >
                Independientes
              </Link>
              <Link
                href="/categorias/nuevos"
                className={`text-sm ${pathname === "/categorias/nuevos" ? "text-white font-medium" : "text-gray-300 hover:text-white"}`}
              >
                Nuevos
              </Link>
            </nav>
          </div>

          <div className="flex items-center gap-2">
            {isSearchOpen ? (
              <div className="flex items-center">
                <Input type="search" placeholder="Buscar cómics..." className="w-full md:w-64 bg-gray-900" autoFocus />
                <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(false)}>
                  <X className="h-5 w-5" />
                </Button>
              </div>
            ) : (
              <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(true)}>
                <Search className="h-5 w-5" />
              </Button>
            )}

            <Link href="/favoritos">
              <Button variant="ghost" size="icon">
                <Heart className="h-5 w-5" />
              </Button>
            </Link>

            <Link href="/carrito">
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                {totalItems > 0 && (
                  <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 bg-red-600">
                    {totalItems}
                  </Badge>
                )}
              </Button>
            </Link>

            <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-sm">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <Link href="/" className="text-gray-300 hover:text-white py-2">
              Inicio
            </Link>
            <Link href="/categorias/marvel" className="text-gray-300 hover:text-white py-2">
              Marvel
            </Link>
            <Link href="/categorias/dc" className="text-gray-300 hover:text-white py-2">
              DC Comics
            </Link>
            <Link href="/categorias/independientes" className="text-gray-300 hover:text-white py-2">
              Independientes
            </Link>
            <Link href="/categorias/nuevos" className="text-gray-300 hover:text-white py-2">
              Nuevos
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
