"use client"

import { useCart } from "@/context/cart-context"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { Trash2 } from "lucide-react"
import { useState } from "react"
import PayPalCheckout from "@/components/paypal-checkout"

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCart()
  const [isCheckingOut, setIsCheckingOut] = useState(false)

  const subtotal = cart.reduce((total, item) => {
    return total + Number.parseFloat(item.comic.price || "19.99") * item.quantity
  }, 0)

  if (cart.length === 0) {
    return (
      <div className="text-center py-16 space-y-6">
        <h1 className="text-3xl font-bold">Tu carrito está vacío</h1>
        <p className="text-gray-400">Parece que aún no has añadido ningún cómic a tu carrito.</p>
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
      <h1 className="text-3xl md:text-4xl font-bold">Tu carrito</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4">
          {cart.map((item) => (
            <div key={item.comic.id} className="flex gap-4 bg-gray-900 p-4 rounded-lg">
              <div className="relative w-24 h-36 flex-shrink-0">
                <Image
                  src={
                    item.comic.image ||
                    `/placeholder.svg?height=144&width=96&query=comic book cover ${item.comic.title}`
                  }
                  alt={item.comic.title}
                  fill
                  className="object-cover rounded-md"
                />
              </div>

              <div className="flex-1 flex flex-col">
                <h3 className="font-semibold text-lg">{item.comic.title}</h3>
                <p className="text-gray-400">{item.comic.publisher}</p>
                <div className="text-red-500 font-bold mt-1">${item.comic.price || "19.99"}</div>

                <div className="flex items-center gap-4 mt-auto">
                  <div className="flex items-center">
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8 rounded-r-none"
                      onClick={() => updateQuantity(item.comic.id, Math.max(1, item.quantity - 1))}
                    >
                      -
                    </Button>
                    <div className="h-8 px-4 flex items-center justify-center border border-input bg-background">
                      {item.quantity}
                    </div>
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8 rounded-l-none"
                      onClick={() => updateQuantity(item.comic.id, item.quantity + 1)}
                    >
                      +
                    </Button>
                  </div>

                  <Button variant="ghost" size="icon" onClick={() => removeFromCart(item.comic.id)}>
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gray-900 p-6 rounded-lg h-fit">
          <h2 className="text-xl font-bold mb-4">Resumen del pedido</h2>

          <div className="space-y-2 mb-4">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Envío</span>
              <span>$5.00</span>
            </div>
            <div className="border-t border-gray-700 my-2 pt-2 flex justify-between font-bold">
              <span>Total</span>
              <span>${(subtotal + 5).toFixed(2)}</span>
            </div>
          </div>

          {isCheckingOut ? (
            <div className="space-y-4">
              <PayPalCheckout
                amount={(subtotal + 5).toFixed(2)}
                onSuccess={() => {
                  clearCart()
                  // Redirigir a página de confirmación
                }}
              />
              <Button variant="outline" className="w-full" onClick={() => setIsCheckingOut(false)}>
                Cancelar
              </Button>
            </div>
          ) : (
            <Button className="w-full bg-red-600 hover:bg-red-700" onClick={() => setIsCheckingOut(true)}>
              Proceder al pago
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
