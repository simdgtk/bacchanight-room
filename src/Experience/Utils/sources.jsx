import { data } from "react-router-dom";

export const componentMapping = {
  color: [
    { label: "Blanc", color: "#dbdbdb" },
    { label: "Beige", color: "#CFC6B8" },
    { label: "Taupe", color: "#A39387" },
    { label: "Brun", color: "#8B7364" },
    { label: "Vert", color: "#A0A396" },
    { label: "Blanc cassé", color: "#A7A5A2" },
    { label: "Sable", color: "#D4C8B0" },
    { label: "Terre", color: "#C76E5A" },
    { label: "Brun terreux", color: "#9D7A60" },
    { label: "Jaune ocre", color: "#CDA449" },
    { label: "Bleu grisé", color: "#718B9C" },
    { label: "Bleu nuit", color: "#3B5360" },
    { label: "Bleu lavande", color: "#A4A8D1" },
    { label: "Pourpre", color: "#8C4A5A" },
    { label: "Mauve", color: "#B7A3B3" },
  ],
  tableau: [
    {
      id: 0,
      label: "L'Enterrement de saint Grégoire",
      author: "",
      date: "15e siècle",
      reserve: true,
      uiPath:
        "/assets/walls/paintings/textures/lenterrement-de-saint-gregoire.webp",
      modelPath: "/assets/walls/paintings/paysage-cadre.glb",
      texture:
        "/assets/walls/paintings/textures/lenterrement-de-saint-gregoire.webp",
      large: false,
      orientation: "portrait",
      sizes: [3, 3, 3],
    },
    {
      id: 1,
      label: "Paysage de montagne",
      author: "MOMPER Josse",
      date: "17e siècle",
      reserve: false,
      uiPath: "/assets/walls/paintings/textures/paysage-de-montagne.webp",
      modelPath: "/assets/walls/paintings/paysage-cadre.glb",
      texture: "/assets/walls/paintings/textures/paysage-de-montagne.webp",
      large: false,
      orientation: "paysage",
      sizes: [3, 3, 3],
    },
    {
      id: 2,
      label: "Port méditerranéen",
      author: "STORCK Jacobus",
      date: "1693",
      reserve: false,
      uiPath: "/assets/walls/paintings/textures/port-mediteraneen.webp",
      modelPath: "/assets/walls/paintings/paysage-cadre.glb",
      texture: "/assets/walls/paintings/textures/port-mediteraneen.webp",
      large: false,
      orientation: "portrait",
      sizes: [3, 3, 3],
    },
    {
      id: 3,
      label: "Portrait de Pierre Lacour fils",
      author: "LACOUR Madeleine-Aimée",
      date: "19e siècle",
      reserve: true,
      uiPath:
        "/assets/walls/paintings/textures/portrait-de-pierre-lacour-fils.webp",
      modelPath: "/assets/walls/paintings/paysage-cadre.glb",
      texture:
        "/assets/walls/paintings/textures/portrait-de-pierre-lacour-fils.webp",
      large: false,
      orientation: "portrait",
      sizes: [3, 3, 3],
    },
    {
      id: 4,
      label: "Le Vieux Port de Bristol",
      author: "LORD METHUEN",
      date: "1938",
      reserve: true,
      uiPath: "/assets/walls/paintings/textures/le-vieux-port-de-bristol.webp",
      modelPath: "/assets/walls/paintings/paysage-cadre.glb",
      texture: "/assets/walls/paintings/textures/le-vieux-port-de-bristol.webp",
      large: false,
      orientation: "paysage",
      sizes: [3, 3, 3],
    },
    {
      id: 5,
      label: "Marine, le retour de la pêche",
      author: "BELLEVOIS Jacob Adriaenz",
      date: "vers 1670",
      reserve: true,
      uiPath: "/assets/walls/paintings/textures/le-retour-de-la-peche.webp",
      modelPath: "/assets/walls/paintings/paysage-cadre.glb",
      texture: "/assets/walls/paintings/textures/le-retour-de-la-peche.webp",
      large: false,
      orientation: "paysage",
      sizes: [3, 3, 3],
    },
    {
      id: 6,
      label: "Femme accroupie (Céline)",
      author: "DORIGNAC Georges",
      date: "1912",
      reserve: true,
      uiPath: "/assets/walls/paintings/textures/femme-accroupie.webp",
      modelPath: "/assets/walls/paintings/paysage-cadre.glb",
      texture: "/assets/walls/paintings/textures/femme-accroupie.webp",
      large: false,
      orientation: "portrait",
      sizes: [3, 3, 3],
    },
    {
      id: 7,
      label: "Saint Sébastien",
      author: "Odilon et Bertrand REDON",
      date: "vers 1910",
      reserve: false,
      uiPath: "/assets/walls/paintings/textures/saint-sebastien.webp",
      modelPath: "/assets/walls/paintings/paysage-cadre.glb",
      texture: "/assets/walls/paintings/textures/saint-sebastien.webp",
      large: false,
      orientation: "portrait",
      sizes: [3, 3, 3],
    },
    {
      id: 8,
      label: "Le Martyre de saint Laurent",
      author: "BOECKHORST Johan",
      date: "1659",
      reserve: false,
      uiPath: "/assets/walls/paintings/textures/le-martyre-saint-laurent.webp",
      modelPath: "/assets/walls/paintings/paysage-cadre.glb",
      texture: "/assets/walls/paintings/textures/le-martyre-saint-laurent.webp",
      long: true,
      orientation: "portrait",
      sizes: [3, 3, 3],
    },
  ],
  statue: [
    {
      id: 11,
      label: "Avril",
      author: "PRIVAT Gilbert",
      date: "1928",
      uiPath: "/assets/floor/statues/avril.webp",
      modelPath: "/assets/floor/statues/avril.glb",
      sizes: [1.17, 1.39, 4.1],
    },
    {
      id: 12,
      label: "Dedette",
      author: "WLERICK Robert",
      date: "1939",
      uiPath: "/assets/floor/statues/dedette.webp",
      modelPath: "/assets/floor/statues/dedette.glb",
      sizes: [1.37, 0.971, 4.1],
    },
    {
      id: 13,
      label: "Les gens du port",
      author: "BLOT Eugène",
      date: "1859",
      uiPath: "/assets/floor/statues/les-gens-du-port.webp",
      modelPath: "/assets/floor/statues/les-gens-du-port.glb",
      sizes: [3.56, 2.02, 2.89],
    },
    {
      id: 14,
      label: "Napoléon 1er en 1814",
      author: "MEISSONIER Jean Louis Ernest",
      date: "1860",
      uiPath: "/assets/floor/statues/napoleon.webp",
      modelPath: "/assets/floor/statues/napoleon.glb",
      sizes: [3.32, 3, 1],
    },
    {
      id: 15,
      label: "Salmacis - Jeune fille cueillant des fleurs",
      author: "BOSIO François Joseph Baron",
      date: "1819",
      uiPath: "/assets/floor/statues/salmacis.webp",
      modelPath: "/assets/floor/statues/salmacis.glb",
      sizes: [3, 3, 4.4],
    },
  ],
  furniture: [
    {
      id: 16,
      label: "Chaise",
      uiPath: "/assets/floor/furnitures/furniture_1.webp",
      modelPath: "/assets/floor/furnitures/furniture_1.glb",
      sizes: [1, 1, 1],
    },
    {
      id: 17,
      label: "Pouf",
      uiPath: "/assets/floor/furnitures/furniture_2.webp",
      modelPath: "/assets/floor/furnitures/furniture_2.glb",
      sizes: [1, 1, 1],
    },
    {
      id: 18,
      label: "Banc moderne",
      uiPath: "/assets/floor/furnitures/furniture_3.webp",
      modelPath: "/assets/floor/furnitures/furniture_3.glb",
      sizes: [3, 3, 1],
    },
    {
      id: 19,
      label: "Canapé cosy",
      uiPath: "/assets/floor/furnitures/furniture_4.webp",
      modelPath: "/assets/floor/furnitures/furniture_4.glb",
      sizes: [2.43, 2.26, 1.27],
    },
    // {
    //   id: 20,
    //   label: "Pouf bleu",
    //   uiPath: "/assets/floor/furnitures/furniture_5.png",
    //   modelPath: "/assets/floor/furnitures/furniture_5.glb",
    //   sizes: [2.02, 2.01, 1.06],
    // },
  ],
  decoration: [
    {
      id: 21,
      label: "Plante 1",
      uiPath: "/assets/floor/flowers/plante_1.png",
      modelPath: "/assets/floor/flowers/plante_1.glb",
      sizes: [1.44, 1.27, 2],
    },
    {
      id: 22,
      label: "Plante 2",
      uiPath: "/assets/floor/flowers/plante_2.png",
      modelPath: "/assets/floor/flowers/plante_2.glb",
      sizes: [1.18, 1.19, 1.98],
    },
    {
      id: 23,
      label: "Plante 3",
      uiPath: "/assets/floor/flowers/plante_3.png",
      modelPath: "/assets/floor/flowers/plante_3.glb",
      sizes: [1.68, 1.62, 1.99],
    },
    // {
    //   id: 24,
    //   label: "Plante 4",
    //   uiPath: "/assets/floor/flowers/plante_4.png",
    //   modelPath: "/assets/floor/flowers/plante_4.glb",
    //   sizes: [1.64, 1.6, 2.43],
    // },
    // {
    //   id: 25,
    //   label: "Plante 5",
    //   uiPath: "/assets/floor/flowers/plante_5.png",
    //   modelPath: "/assets/floor/flowers/plante_5.glb",
    //   sizes: [1.86, 1.87, 1.71],
    // },
  ],
};
