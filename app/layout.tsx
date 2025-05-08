import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import { CartProvider } from "@/context/cart-context"
import { FavoritesProvider } from "@/context/favorites-context"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "WilberBooks - Tu tienda de cómics",
  description: "Descubre y compra los mejores cómics en WilberBooks",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${inter.className} bg-black text-white`}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <CartProvider>
            <FavoritesProvider>
              <Navbar />
              <main className="container mx-auto px-4 pt-20 pb-10">{children}</main>
            </FavoritesProvider>
          </CartProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
