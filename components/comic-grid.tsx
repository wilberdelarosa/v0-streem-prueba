import Link from "next/link"
import Image from "next/image"
import type { Comic } from "@/lib/types"
import AddToCartButton from "@/components/add-to-cart-button"
import AddToFavoritesButton from "@/components/add-to-favorites-button"

interface ComicGridProps {
  comics: Comic[]
}

export default function ComicGrid({ comics }: ComicGridProps) {
  if (comics.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-400">No se encontraron cómics.</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
      {comics.map((comic) => (
        <div key={comic.id} className="group">
          <div className="relative aspect-[2/3] w-full rounded-md overflow-hidden">
            <Link href={`/comics/${comic.id}`}>
              <Image
                src={comic.image || `/placeholder.svg?height=300&width=200&query=comic book cover ${comic.title}`}
                alt={comic.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </Link>

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-3 gap-2">
              <AddToFavoritesButton comic={comic} variant="icon" />
              <AddToCartButton comic={comic} variant="small" />
            </div>
          </div>

          <div className="mt-2">
            <Link href={`/comics/${comic.id}`}>
              <h3 className="text-sm font-medium line-clamp-1 hover:text-red-500 transition-colors">{comic.title}</h3>
            </Link>
            <p className="text-xs text-gray-400">{comic.publisher}</p>
            <p className="text-sm font-bold text-red-500 mt-1">${comic.price || "19.99"}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
