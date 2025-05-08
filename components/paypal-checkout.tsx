"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"

interface PayPalCheckoutProps {
  amount: string
  onSuccess: () => void
}

export default function PayPalCheckout({ amount, onSuccess }: PayPalCheckoutProps) {
  const paypalButtonsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Simulación de PayPal - En un entorno real, aquí se cargaría el SDK de PayPal
    const mockPayPalCheckout = () => {
      // Simular proceso de pago
      setTimeout(() => {
        onSuccess()
      }, 2000)
    }

    return () => {
      // Cleanup
    }
  }, [onSuccess])

  return (
    <div className="space-y-4">
      <div ref={paypalButtonsRef} className="w-full">
        {/* En un entorno real, aquí se renderizarían los botones de PayPal */}
        <Button
          className="w-full bg-[#0070ba] hover:bg-[#005ea6]"
          onClick={() => {
            // Simular proceso de pago
            setTimeout(() => {
              onSuccess()
            }, 2000)
          }}
        >
          Pagar con PayPal (${amount})
        </Button>
      </div>
      <div className="text-xs text-center text-gray-400">
        Al completar tu compra, aceptas nuestros términos y condiciones.
      </div>
    </div>
  )
}
