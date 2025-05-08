import Link from "next/link"
import Image from "next/image"
import { ChevronRight } from "lucide-react"
import type { Comic } from "@/lib/types"

interface CategoryRowProps {
  title: string
  comics: Comic[]
}

export default function CategoryRow({ title, comics }: CategoryRowProps) {
  if (comics.length === 0) return null

  // Convertir el título a un slug para la navegación
  const categorySlug = title.toLowerCase().replace(/\s+/g, "-")

  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">{title}</h2>
        <Link href={`/categorias/${categorySlug}`} className="flex items-center text-sm text-gray-400 hover:text-white">
          Ver todos <ChevronRight className="h-4 w-4 ml-1" />
        </Link>
      </div>

      <div className="grid grid-flow-col auto-cols-max gap-4 overflow-x-auto pb-4 snap-x">
        {comics.map((comic) => (
          <Link
            key={comic.id}
            href={`/comics/${comic.id}`}
            className="w-36 md:w-44 snap-start hover:scale-105 transition-transform duration-200"
          >
            <div className="relative aspect-[2/3] w-full rounded-md overflow-hidden">
              <Image
                src={comic.image || `/placeholder.svg?height=264&width=176&query=comic book cover ${comic.title}`}
                alt={comic.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end p-3">
                <div className="text-sm font-medium line-clamp-2">{comic.title}</div>
              </div>
            </div>
            <div className="mt-2">
              <h3 className="text-sm font-medium line-clamp-1">{comic.title}</h3>
              <p className="text-xs text-gray-400">{comic.publisher}</p>
              <p className="text-sm font-bold text-red-500 mt-1">${comic.price || "19.99"}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
