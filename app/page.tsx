import HeroSection from "@/components/hero-section"
import CategoryRow from "@/components/category-row"
import { getComics } from "@/lib/api"

export default async function Home() {
  const allComics = await getComics()

  // Agrupar cómics por categoría
  const marvelComics = allComics.filter((comic) => comic.publisher?.toLowerCase().includes("marvel"))
  const dcComics = allComics.filter((comic) => comic.publisher?.toLowerCase().includes("dc"))
  const indieComics = allComics.filter(
    (comic) => !comic.publisher?.toLowerCase().includes("marvel") && !comic.publisher?.toLowerCase().includes("dc"),
  )

  // Obtener cómics destacados (los 5 primeros)
  const featuredComics = allComics.slice(0, 5)

  return (
    <div className="space-y-12">
      <HeroSection comics={featuredComics} />

      <CategoryRow title="Marvel" comics={marvelComics} />
      <CategoryRow title="DC Comics" comics={dcComics} />
      <CategoryRow title="Comics Independientes" comics={indieComics} />
      <CategoryRow title="Más Populares" comics={allComics.slice(5, 15)} />
      <CategoryRow title="Nuevos Lanzamientos" comics={allComics.slice(15, 25)} />
    </div>
  )
}
