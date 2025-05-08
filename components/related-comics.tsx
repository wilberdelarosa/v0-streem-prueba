import Link from "next/link"
import Image from "next/image"
import type { Comic } from "@/lib/types"

interface RelatedComicsProps {
  comics: Comic[]
}

export default function RelatedComics({ comics }: RelatedComicsProps) {
  if (comics.length === 0) return null

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
      {comics.map((comic) => (
        <Link key={comic.id} href={`/comics/${comic.id}`} className="group">
          <div className="relative aspect-[2/3] w-full rounded-md overflow-hidden">
            <Image
              src={comic.image || `/placeholder.svg?height=240&width=160&query=comic book cover ${comic.title}`}
              alt={comic.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>

          <div className="mt-2">
            <h3 className="text-sm font-medium line-clamp-1 group-hover:text-red-500 transition-colors">
              {comic.title}
            </h3>
            <p className="text-xs text-gray-400">{comic.publisher}</p>
          </div>
        </Link>
      ))}
    </div>
  )
}
