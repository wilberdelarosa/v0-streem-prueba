import type { Comic } from "./types"

// Datos de ejemplo para simular una API
const mockComics: Comic[] = [
  {
    id: 1,
    title: "Spider-Man: No Way Home",
    publisher: "Marvel",
    description:
      "Después de que Mysterio revelara la identidad de Spider-Man, Peter Parker busca la ayuda del Doctor Strange para hacer que el mundo olvide su identidad secreta.",
    price: "24.99",
    image: "/spider-man-comic-cover.png",
    year: 2022,
    author: "Stan Lee, Steve Ditko",
    pages: 120,
    isbn: "978-1302927043",
  },
  {
    id: 2,
    title: "Batman: The Dark Knight Returns",
    publisher: "DC Comics",
    description:
      "Después de diez años de retiro, Bruce Wayne regresa como Batman para enfrentarse a una nueva generación de criminales.",
    price: "29.99",
    image: "/batman-dark-knight-returns-inspired.png",
    year: 1986,
    author: "Frank Miller",
    pages: 224,
    isbn: "978-1401263119",
  },
  {
    id: 3,
    title: "Watchmen",
    publisher: "DC Comics",
    description:
      "En un mundo alternativo donde los superhéroes existen, un grupo de vigilantes retirados investiga una conspiración tras el asesinato de uno de los suyos.",
    price: "19.99",
    image: "/watchmen-comic-cover.png",
    year: 1986,
    author: "Alan Moore, Dave Gibbons",
    pages: 416,
    isbn: "978-1401245252",
  },
  {
    id: 4,
    title: "The Walking Dead: Compendium One",
    publisher: "Image Comics",
    description:
      "Sigue a Rick Grimes y su grupo mientras navegan por un mundo post-apocalíptico lleno de zombies y humanos hostiles.",
    price: "59.99",
    image: "/generic-zombie-comic-cover.png",
    year: 2009,
    author: "Robert Kirkman, Tony Moore",
    pages: 1088,
    isbn: "978-1607060765",
  },
  {
    id: 5,
    title: "Saga: Volume One",
    publisher: "Image Comics",
    description:
      "Una épica historia de ciencia ficción y fantasía sobre una familia que lucha por sobrevivir en medio de una guerra galáctica.",
    price: "14.99",
    image: "/saga-comic-cover.png",
    year: 2012,
    author: "Brian K. Vaughan, Fiona Staples",
    pages: 160,
    isbn: "978-1607066019",
  },
  {
    id: 6,
    title: "X-Men: Dark Phoenix Saga",
    publisher: "Marvel",
    description: "Jean Grey obtiene poderes cósmicos y se convierte en Dark Phoenix, amenazando al universo entero.",
    price: "34.99",
    image: "/x-men-dark-phoenix-comic-cover.png",
    year: 1980,
    author: "Chris Claremont, John Byrne",
    pages: 352,
    isbn: "978-0785164210",
  },
  {
    id: 7,
    title: "Superman: Red Son",
    publisher: "DC Comics",
    description: "¿Qué hubiera pasado si Superman hubiera aterrizado en la Unión Soviética en lugar de Kansas?",
    price: "17.99",
    image: "/superman-red-son-cover.png",
    year: 2003,
    author: "Mark Millar, Dave Johnson",
    pages: 168,
    isbn: "978-1401247119",
  },
  {
    id: 8,
    title: "Maus",
    publisher: "Pantheon Books",
    description:
      "Una poderosa historia gráfica sobre el Holocausto, donde los judíos son representados como ratones y los nazis como gatos.",
    price: "15.99",
    image: "/maus-comic-cover.png",
    year: 1991,
    author: "Art Spiegelman",
    pages: 296,
    isbn: "978-0679406419",
  },
  {
    id: 9,
    title: "Daredevil: Born Again",
    publisher: "Marvel",
    description:
      "Kingpin descubre la identidad secreta de Daredevil y procede a destruir sistemáticamente la vida de Matt Murdock.",
    price: "19.99",
    image: "/daredevil-born-again-cover.png",
    year: 1986,
    author: "Frank Miller, David Mazzucchelli",
    pages: 256,
    isbn: "978-0785134817",
  },
  {
    id: 10,
    title: "V for Vendetta",
    publisher: "Vertigo",
    description:
      "En un futuro distópico, un misterioso revolucionario conocido como 'V' trabaja para derrocar un régimen totalitario en el Reino Unido.",
    price: "16.99",
    image: "/v-for-vendetta-cover.png",
    year: 1988,
    author: "Alan Moore, David Lloyd",
    pages: 296,
    isbn: "978-1401207922",
  },
  {
    id: 11,
    title: "The Sandman: Preludes & Nocturnes",
    publisher: "Vertigo",
    description:
      "Sigue las aventuras de Dream, uno de los Eternos, mientras recupera sus objetos de poder después de décadas de cautiverio.",
    price: "19.99",
    image: "/sandman-comic-cover.png",
    year: 1989,
    author: "Neil Gaiman, Sam Kieth",
    pages: 240,
    isbn: "978-1401225759",
  },
  {
    id: 12,
    title: "Hellboy: Seed of Destruction",
    publisher: "Dark Horse Comics",
    description:
      "Un demonio criado como humano trabaja para la Oficina de Investigación y Defensa Paranormal, combatiendo fuerzas sobrenaturales.",
    price: "17.99",
    image: "/hellboy-comic-cover.png",
    year: 1994,
    author: "Mike Mignola",
    pages: 128,
    isbn: "978-1593070946",
  },
  {
    id: 13,
    title: "Akira",
    publisher: "Kodansha",
    description:
      "En un Neo-Tokio post-apocalíptico, un miembro de una pandilla de motociclistas adquiere poderes psíquicos después de un accidente.",
    price: "24.99",
    image: "/akira-manga-cover.png",
    year: 1982,
    author: "Katsuhiro Otomo",
    pages: 368,
    isbn: "978-1935429005",
  },
  {
    id: 14,
    title: "Preacher: Gone to Texas",
    publisher: "Vertigo",
    description:
      "Un predicador con poderes sobrenaturales, su ex-novia y un vampiro irlandés buscan a Dios para hacerle rendir cuentas.",
    price: "14.99",
    image: "/preacher-comic-cover.png",
    year: 1996,
    author: "Garth Ennis, Steve Dillon",
    pages: 136,
    isbn: "978-1563892615",
  },
  {
    id: 15,
    title: "Y: The Last Man",
    publisher: "Vertigo",
    description:
      "Un misterioso evento mata simultáneamente a todos los mamíferos con cromosoma Y en la Tierra, excepto a un hombre y su mono mascota.",
    price: "14.99",
    image: "/y-last-man-comic-cover.png",
    year: 2002,
    author: "Brian K. Vaughan, Pia Guerra",
    pages: 128,
    isbn: "978-1563899805",
  },
  {
    id: 16,
    title: "Black Panther: A Nation Under Our Feet",
    publisher: "Marvel",
    description: "T'Challa regresa a Wakanda para encontrar su nación al borde de la guerra civil.",
    price: "16.99",
    image: "/black-panther-comic-cover.png",
    year: 2016,
    author: "Ta-Nehisi Coates, Brian Stelfreeze",
    pages: 144,
    isbn: "978-1302900533",
  },
  {
    id: 17,
    title: "Persepolis",
    publisher: "Pantheon Books",
    description:
      "Una autobiografía gráfica que narra la infancia y juventud de Marjane Satrapi durante y después de la Revolución Islámica en Irán.",
    price: "14.99",
    image: "/persepolis-comic-cover.png",
    year: 2000,
    author: "Marjane Satrapi",
    pages: 160,
    isbn: "978-0375714573",
  },
  {
    id: 18,
    title: "Transmetropolitan: Back on the Street",
    publisher: "Vertigo",
    description:
      "Un periodista gonzo en un futuro distópico lucha contra la corrupción política y los abusos de poder.",
    price: "14.99",
    image: "/transmetropolitan-comic-cover.png",
    year: 1997,
    author: "Warren Ellis, Darick Robertson",
    pages: 144,
    isbn: "978-1401220846",
  },
  {
    id: 19,
    title: "Fables: Legends in Exile",
    publisher: "Vertigo",
    description:
      "Personajes de cuentos de hadas viven en secreto en Nueva York después de ser expulsados de sus tierras mágicas.",
    price: "12.99",
    image: "/fables-comic-cover.png",
    year: 2002,
    author: "Bill Willingham, Lan Medina",
    pages: 128,
    isbn: "978-1401237554",
  },
  {
    id: 20,
    title: "Invincible: Family Matters",
    publisher: "Image Comics",
    description:
      "El hijo adolescente del superhéroe más poderoso del mundo comienza a desarrollar sus propios poderes.",
    price: "14.99",
    image: "/invincible-comic-cover.png",
    year: 2003,
    author: "Robert Kirkman, Cory Walker",
    pages: 128,
    isbn: "978-1582407111",
  },
  {
    id: 21,
    title: "Captain America: Winter Soldier",
    publisher: "Marvel",
    description:
      "Steve Rogers se enfrenta a un fantasma de su pasado cuando un asesino soviético conocido como el Soldado de Invierno reaparece.",
    price: "19.99",
    image: "/captain-america-winter-soldier-cover.png",
    year: 2005,
    author: "Ed Brubaker, Steve Epting",
    pages: 304,
    isbn: "978-0785143413",
  },
  {
    id: 22,
    title: "Locke & Key: Welcome to Lovecraft",
    publisher: "IDW Publishing",
    description:
      "Después de un trágico evento, tres hermanos se mudan a la antigua casa familiar donde descubren llaves mágicas con poderes extraordinarios.",
    price: "19.99",
    image: "/locke-and-key-comic-cover.png",
    year: 2008,
    author: "Joe Hill, Gabriel Rodríguez",
    pages: 152,
    isbn: "978-1600103841",
  },
  {
    id: 23,
    title: "Bone: Out from Boneville",
    publisher: "Cartoon Books",
    description: "Tres primos Bone son expulsados de Boneville y se encuentran perdidos en un vasto desierto.",
    price: "12.99",
    image: "/bone-comic-cover.png",
    year: 1991,
    author: "Jeff Smith",
    pages: 144,
    isbn: "978-0439706407",
  },
  {
    id: 24,
    title: "Scott Pilgrim's Precious Little Life",
    publisher: "Oni Press",
    description:
      "Scott Pilgrim debe derrotar a los siete ex-novios malvados de su nueva novia para poder salir con ella.",
    price: "14.99",
    image: "/scott-pilgrim-comic-cover.png",
    year: 2004,
    author: "Bryan Lee O'Malley",
    pages: 168,
    isbn: "978-1932664089",
  },
  {
    id: 25,
    title: "The Umbrella Academy: Apocalypse Suite",
    publisher: "Dark Horse Comics",
    description:
      "Un grupo disfuncional de superhéroes adoptados se reúne tras la muerte de su padre para salvar al mundo.",
    price: "17.99",
    image: "/umbrella-academy-comic-cover.png",
    year: 2007,
    author: "Gerard Way, Gabriel Bá",
    pages: 184,
    isbn: "978-1593079789",
  },
  {
    id: 26,
    title: "Deadpool: The Complete Collection",
    publisher: "Marvel",
    description:
      "Sigue las aventuras del mercenario bocazas mientras rompe la cuarta pared y se enfrenta a todo tipo de amenazas.",
    price: "34.99",
    image: "/deadpool-comic-cover.png",
    year: 2013,
    author: "Daniel Way, Paco Medina",
    pages: 472,
    isbn: "978-0785188882",
  },
  {
    id: 27,
    title: "Descender: Tin Stars",
    publisher: "Image Comics",
    description:
      "En un futuro donde los robots son perseguidos, un niño androide despierta y podría ser la clave para salvar a la galaxia.",
    price: "9.99",
    image: "/descender-comic-cover.png",
    year: 2015,
    author: "Jeff Lemire, Dustin Nguyen",
    pages: 160,
    isbn: "978-1632154262",
  },
  {
    id: 28,
    title: "Blackest Night",
    publisher: "DC Comics",
    description:
      "Una fuerza oscura resucita a héroes y villanos caídos, obligando a los Linternas Verdes a enfrentarse a una amenaza sin precedentes.",
    price: "19.99",
    image: "/blackest-night-comic-cover.png",
    year: 2009,
    author: "Geoff Johns, Ivan Reis",
    pages: 304,
    isbn: "978-1401229535",
  },
  {
    id: 29,
    title: "Astro City: Life in the Big City",
    publisher: "Vertigo",
    description:
      "Explora la vida cotidiana en una ciudad llena de superhéroes, desde la perspectiva de héroes, villanos y ciudadanos comunes.",
    price: "16.99",
    image: "/astro-city-comic-cover.png",
    year: 1995,
    author: "Kurt Busiek, Brent Anderson",
    pages: 192,
    isbn: "978-1401232627",
  },
  {
    id: 30,
    title: "Hawkeye: My Life as a Weapon",
    publisher: "Marvel",
    description:
      "Clint Barton, también conocido como Hawkeye, lucha contra el crimen en su vecindario cuando no está con los Vengadores.",
    price: "16.99",
    image: "/hawkeye-comic-cover.png",
    year: 2012,
    author: "Matt Fraction, David Aja",
    pages: 136,
    isbn: "978-0785165620",
  },
]

// Función para obtener todos los cómics
export async function getComics(): Promise<Comic[]> {
  // Simular una llamada a API con un pequeño retraso
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockComics)
    }, 300)
  })
}

// Función para obtener un cómic por ID
export async function getComic(id: string | number): Promise<Comic> {
  // Simular una llamada a API con un pequeño retraso
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const comic = mockComics.find((c) => c.id.toString() === id.toString())

      if (comic) {
        resolve(comic)
      } else {
        reject(new Error(`Comic with ID ${id} not found`))
      }
    }, 300)
  })
}
