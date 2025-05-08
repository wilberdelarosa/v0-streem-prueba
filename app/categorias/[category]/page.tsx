import { getComics } from "@/lib/api"
import ComicGrid from "@/components/comic-grid"

export async function generateStaticParams() {
  return [
    { category: "marvel" },
    { category: "dc" },
    { category: "independientes" },
    { category: "populares" },
    { category: "nuevos" },
  ]
}

export default async function CategoryPage({ params }: { params: { category: string } }) {
  const allComics = await getComics()

  let comics = []
  let title = ""

  switch (params.category.toLowerCase()) {
    case "marvel":
      comics = allComics.filter((comic) => comic.publisher?.toLowerCase().includes("marvel"))
      title = "Marvel Comics"
      break
    case "dc":
      comics = allComics.filter((comic) => comic.publisher?.toLowerCase().includes("dc"))
      title = "DC Comics"
      break
    case "independientes":
      comics = allComics.filter(
        (comic) => !comic.publisher?.toLowerCase().includes("marvel") && !comic.publisher?.toLowerCase().includes("dc"),
      )
      title = "Comics Independientes"
      break
    case "populares":
      comics = allComics.slice(0, 20)
      title = "Comics Más Populares"
      break
    case "nuevos":
      comics = [...allComics].reverse().slice(0, 20)
      title = "Nuevos Lanzamientos"
      break
    default:
      comics = allComics
      title = "Todos los Comics"
  }

  return (
    <div className="space-y-8">
      <h1 className="text-3xl md:text-4xl font-bold">{title}</h1>
      <ComicGrid comics={comics} />
    </div>
  )
}
