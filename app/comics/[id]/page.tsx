import Image from "next/image"
import { getComic, getComics } from "@/lib/api"
import AddToCartButton from "@/components/add-to-cart-button"
import AddToFavoritesButton from "@/components/add-to-favorites-button"
import RelatedComics from "@/components/related-comics"

export async function generateStaticParams() {
  const comics = await getComics()
  return comics.map((comic) => ({
    id: comic.id.toString(),
  }))
}

export default async function ComicPage({ params }: { params: { id: string } }) {
  const comic = await getComic(params.id)
  const allComics = await getComics()
  const relatedComics = allComics.filter((c) => c.id !== comic.id && c.publisher === comic.publisher).slice(0, 6)

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8">
      <div className="relative aspect-[2/3] w-full max-w-md mx-auto">
        <Image
          src={comic.image || `/placeholder.svg?height=600&width=400&query=comic book cover ${comic.title}`}
          alt={comic.title}
          fill
          className="object-cover rounded-md shadow-lg"
          priority
        />
      </div>

      <div className="space-y-6">
        <h1 className="text-3xl md:text-4xl font-bold">{comic.title}</h1>

        <div className="flex items-center gap-2">
          <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm">{comic.publisher}</span>
          {comic.year && <span className="bg-gray-800 text-white px-3 py-1 rounded-full text-sm">{comic.year}</span>}
        </div>

        <p className="text-gray-300 text-lg">{comic.description || "Sin descripción disponible."}</p>

        <div className="text-2xl font-bold text-red-500">${comic.price || "19.99"}</div>

        <div className="flex flex-wrap gap-4">
          <AddToCartButton comic={comic} />
          <AddToFavoritesButton comic={comic} />
        </div>

        <div className="pt-8">
          <h2 className="text-xl font-semibold mb-4">Detalles</h2>
          <ul className="space-y-2 text-gray-300">
            <li>
              <span className="font-medium">Autor:</span> {comic.author || "Desconocido"}
            </li>
            <li>
              <span className="font-medium">Páginas:</span> {comic.pages || "Desconocido"}
            </li>
            <li>
              <span className="font-medium">ISBN:</span> {comic.isbn || "Desconocido"}
            </li>
          </ul>
        </div>
      </div>

      <div className="md:col-span-2 mt-12">
        <h2 className="text-2xl font-bold mb-6">Cómics relacionados</h2>
        <RelatedComics comics={relatedComics} />
      </div>
    </div>
  )
}
