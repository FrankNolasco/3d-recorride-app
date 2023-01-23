import { Images } from "../components/molecules/ImagesCoches/data";
import { video } from "../components/molecules/VideoCoches/data";
import CocheImg from "../images/4runner_angularleft.webp";
import insideOne from "../images/cochePanoramaInterior360.jpg";

export const Models = [
  { id: 1, name: "Todos" },
  { id: 2, name: "SUV" },
  { id: 3, name: "Hatchback" },
  { id: 4, name: "Coupe" },
  { id: 5, name: "Convertible" },
  { id: 6, name: "Sedan" },
  { id: 7, name: "Wagon" },
  { id: 8, name: "Van" },
  { id: 9, name: "Pickup" },
  { id: 10, name: "Minivan" },
  { id: 11, name: "Crossover" },
  { id: 12, name: "Hybrid" },
];

const detail = {
  colors: [
    {
      id: 1,
      name: "Lime Rush",
      color: "rgb(139, 153, 82)",
      baseUrl:
        "https://s3-us-west-2.amazonaws.com/static.izmocars.com/toolkit/newgen/US/2022/22toyota/22toyota4runnertrdpro4wdsu5fa/22toyota4runnertrdpro4wdsu5fa_animations/_360color/_660x440/lime-rush/",
    },
    {
      id: 2,
      name: "Magnetic Gray Metallic",
      color: "rgb(73, 72, 72)",
      baseUrl:
        "https://s3-us-west-2.amazonaws.com/static.izmocars.com/toolkit/newgen/US/2022/22toyota/22toyota4runnertrdpro4wdsu5fa/22toyota4runnertrdpro4wdsu5fa_animations/_360color/_660x440/magnetic-gray-metallic/",
    },
    {
      id: 3,
      name: "Midnigth Black Metallic",
      color: "rgb(0, 3, 30)",
      baseUrl:
        "https://s3-us-west-2.amazonaws.com/static.izmocars.com/toolkit/newgen/US/2022/22toyota/22toyota4runnertrdpro4wdsu5fa/22toyota4runnertrdpro4wdsu5fa_animations/_360color/_660x440/midnight-black-metallic/",
    },
    {
      id: 4,
      name: "White",
      color: "#fff",
      baseUrl:
        "https://s3-us-west-2.amazonaws.com/static.izmocars.com/toolkit/newgen/US/2022/22toyota/22toyotarav4limitedsu5fa/22toyotarav4limitedsu5fa_animations/_360color/_660x440/blizzard-pearl/",
    },
  ],
  interiorImg: insideOne,
  images: Images,
  video: video,
};

export const ListCoches = [
  {
    id: 1,
    name: "Audi A3",
    img: CocheImg,
    model: 3,
    ...detail,
  },
  {
    id: 2,
    name: "Audi A4",
    img: CocheImg,
    model: 6,
    ...detail,
  },
  {
    id: 3,
    name: "Audi A5",
    img: CocheImg,
    model: 3,
    ...detail,
  },

  {
    id: 4,
    name: "Coche 4",
    img: CocheImg,
    model: 3,
    ...detail,
  },

  {
    id: 5,
    name: "Coche 5",
    img: CocheImg,
    model: 3,
    ...detail,
  },

  {
    id: 6,
    name: "Coche 6",
    img: CocheImg,
    model: 3,
    ...detail,
  },

  {
    id: 7,
    name: "Coche 7",
    img: CocheImg,
    model: 3,
    ...detail,
  },

  {
    id: 8,
    name: "Coche 8",
    img: CocheImg,
    model: 3,
    ...detail,
  },

  {
    id: 9,
    name: "Coche 9",
    img: CocheImg,
    model: 3,
    ...detail,
  },

  {
    id: 10,
    name: "Coche 10",
    img: CocheImg,
    model: 3,
    ...detail,
  },

  {
    id: 11,
    name: "Coche 11",
    img: CocheImg,
    model: 3,
    ...detail,
  },

  {
    id: 12,
    name: "Coche 12",
    img: CocheImg,
    model: 3,
    ...detail,
  },
];