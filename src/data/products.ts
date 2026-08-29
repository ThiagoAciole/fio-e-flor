import type { Product } from "../types/product";
export const products: Product[] = [
  {
    id: "buque-aurora",
    name: "Buquê Aurora",
    description:
      "Buquê artesanal em tons delicados, produzido manualmente com hastes de chenille.",
    category: { id: "buques", name: "Buquês" },
    price: 89.9,
    priceLabel: "A partir de",
    sellable: true,
    image: "/products/buque-aurora.webp",
  },
  {
    id: "jardim-lilas",
    name: "Buquê Jardim Lilás",
    description:
      "Composição artesanal com flores em tons de lilás, branco e verde.",
    category: { id: "buques", name: "Buquês" },
    price: 119.9,
    priceLabel: "A partir de",
    sellable: true,
    image: "/products/jardim-lilas.webp",
  },
  {
    id: "tulipa-artesanal",
    name: "Tulipa Artesanal",
    description:
      "Tulipa feita à mão, ideal para presentes, lembranças e composições.",
    category: { id: "flores", name: "Flores" },
    price: 14.9,
    sellable: true,
    image: "/products/tulipa-artesanal.webp",
  },
  {
    id: "lirio-artesanal",
    name: "Lírio Artesanal",
    description:
      "Lírio decorativo produzido manualmente com acabamento delicado.",
    category: { id: "flores", name: "Flores" },
    price: 18.9,
    sellable: true,
    image: "/products/lirio-artesanal.webp",
  },
  {
    id: "arranjo-primavera",
    name: "Arranjo Primavera",
    description:
      "Arranjo artesanal com diferentes flores e composição colorida.",
    category: { id: "arranjos", name: "Arranjos" },
    price: 79.9,
    priceLabel: "A partir de",
    sellable: true,
    image: "/products/arranjo-primavera.webp",
  },
  {
    id: "mini-buque-carinho",
    name: "Mini Buquê Carinho",
    description: "Mini buquê artesanal para presentear em momentos especiais.",
    category: { id: "presentes", name: "Presentes" },
    price: 39.9,
    sellable: true,
    image: "/products/mini-buque-carinho.webp",
  },
  {
    id: "vaso-encanto",
    name: "Vaso Encanto",
    description:
      "Pequeno arranjo em vaso para deixar qualquer cantinho mais especial.",
    category: { id: "arranjos", name: "Arranjos" },
    price: 64.9,
    sellable: true,
    image: "/products/vaso-encanto.webp",
  },
  {
    id: "rosa-unica",
    name: "Rosa Única",
    description: "Rosa artesanal com acabamento cuidadoso para presentear.",
    category: { id: "flores", name: "Flores" },
    price: 16.9,
    sellable: true,
    image: "/products/rosa-unica.webp",
  },
  {
    id: "kit-afeto",
    name: "Kit Afeto",
    description:
      "Flores artesanais e cartão para uma lembrança cheia de carinho.",
    category: { id: "presentes", name: "Presentes" },
    price: 54.9,
    sellable: false,
    image: "/products/kit-afeto.webp",
  },
];
