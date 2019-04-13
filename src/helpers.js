export function formatPrice(cents) {
  return (cents / 100).toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
  });
}

export function rando(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
}

export function getRandomName() {
  const names = [
    "Stewart Mcgreevy",
    "Matilde Lemmer",
    "Teresita Sprouse",
    "Louella Mulhern",
    "Laronda Harness",
    "Nelson Fix",
    "Viki Moctezuma",
    "Vesta Abeyta",
    "Shad Holt",
    "Yee Troester",
    "Philip Rowlett",
    "Makeda Dalzell",
    "Tisa Moneypenny",
    "Dorothea Fagen",
    "Seymour Coltrane",
    "Stasia Congdon",
    "Renae Serafini",
    "Anh Cregan",
    "Merrilee Yamashiro",
    "Alice Vannorman",
    "Luciano Cleavenger",
    "Jeni Willilams",
    "Karol Dillman",
    "Terry Sanden",
    "Myrtis Liss",
    "Giselle Fryman",
    "Lenore Knicely",
    "Nedra Barrentine",
    "Elina Danley",
    "Lorene Breckenridge",
    "Krystina Maeda",
    "Georgina Zeh",
    "Rona Tolan",
    "Catherine Corley",
    "Fernande Kavanaugh",
    "Jeff Moreles",
    "Scottie Manchester",
    "Noemi Lauria",
    "Regina Gemmill",
    "Dewitt Moos",
    "Armanda Chalker",
    "Marquerite Broker",
    "Cecily Maire",
    "Dianna Vialpando",
    "Carolyne Pratts",
    "Albertha Kistler",
    "Annice Klippel",
    "Venetta Greenhill",
    "Gaylene Easton",
    "Annalisa Husbands"
  ];

  return rando(names);
}

export function getBusinessName() {
  const adjectives = [
    "adorable",
    "beautiful",
    "clean",
    "drab",
    "elegant",
    "fancy",
    "glamorous",
    "handsome",
    "long",
    "magnificent",
    "old-fashioned",
    "plain",
    "quaint",
    "sparkling",
    "ugliest",
    "unsightly",
    "angry",
    "bewildered",
    "clumsy",
    "defeated",
    "embarrassed",
    "fierce",
    "grumpy",
    "helpless",
    "itchy",
    "jealous",
    "lazy",
    "mysterious",
    "nervous",
    "obnoxious",
    "panicky",
    "repulsive",
    "scary",
    "thoughtless",
    "uptight",
    "worried"
  ];

  const nouns = [
    "women",
    "men",
    "children",
    "teeth",
    "feet",
    "people",
    "leaves",
    "mice",
    "geese",
    "halves",
    "knives",
    "wives",
    "lives",
    "elves",
    "loaves",
    "potatoes",
    "tomatoes",
    "cacti",
    "foci",
    "fungi",
    "nuclei",
    "syllabuses",
    "analyses",
    "diagnoses",
    "oases",
    "theses",
    "crises",
    "phenomena",
    "criteria",
    "data"
  ];

  return `${rando(adjectives)} ${rando(nouns)}`;
}
