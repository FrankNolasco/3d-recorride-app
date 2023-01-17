import {
  FourRunnerImages,
  Images,
} from "../components/molecules/ImagesCoches/data";
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
  colors: [],
  interiorImg: insideOne,
  images: Images,
  video: video,
};

export const ListCoches = [
  {
    id: 1,
    name: "4 Runner",
    img: "//s3-us-west-2.amazonaws.com/static.izmocars.com/webimages/150/2022/toyota/4runner/4runner_angularleft.webp",
    model: 1,
    colors: [
      {
        id: 1,
        name: "Lime Rush 36",
        color: "rgb(139, 153, 82)",
        baseUrl:
          "https://s3-us-west-2.amazonaws.com/static.izmocars.com/toolkit/newgen/US/2022/22toyota/22toyota4runnertrdpro4wdsu5fa/22toyota4runnertrdpro4wdsu5fa_animations/_360color/_660x440/lime-rush/",
        prefix: "angle",
        suffix: ".webp",
        size: 36,
      },
      {
        id: 2,
        name: "Magnetic Gray Metallic",
        color: "rgb(73, 72, 72)",
        baseUrl:
          "https://s3-us-west-2.amazonaws.com/static.izmocars.com/toolkit/newgen/US/2022/22toyota/22toyota4runnertrdpro4wdsu5fa/22toyota4runnertrdpro4wdsu5fa_animations/_360color/_660x440/magnetic-gray-metallic/",
        prefix: "angle",
        suffix: ".webp",
        size: 36,
      },
      {
        id: 3,
        name: "Midnigth Black Metallic",
        color: "rgb(0, 3, 30)",
        baseUrl:
          "https://s3-us-west-2.amazonaws.com/static.izmocars.com/toolkit/newgen/US/2022/22toyota/22toyota4runnertrdpro4wdsu5fa/22toyota4runnertrdpro4wdsu5fa_animations/_360color/_660x440/midnight-black-metallic/",
        prefix: "angle",
        suffix: ".webp",
        size: 36,
      },

      {
        id: 4,
        name: "White",
        color: "#fff",
        baseUrl:
          "https://s3-us-west-2.amazonaws.com/static.izmocars.com/toolkit/newgen/US/2022/22toyota/22toyota4runnertrdpro4wdsu5fa/22toyota4runnertrdpro4wdsu5fa_animations/_360color/_660x440/white/",
        prefix: "angle",
        suffix: ".webp",
        size: 36,
      },
    ],
    interiorImg: insideOne,
    images: FourRunnerImages,
    video: video,
  },
  {
    id: 2,
    name: "Avalon",
    img: "//s3-us-west-2.amazonaws.com/static.izmocars.com/webimages/150/2022/toyota/avalon/avalon_angularleft.webp",
    model: 2,
    ...detail,
  },
  // {
  //   id: 1,
  //   name: "Toyota 1",
  //   img: CocheImg,
  //   model: 3,
  //   ...detail,
  // },
  // {
  //   id: 2,
  //   name: "Toyota 2",
  //   img: CocheImg,
  //   model: 6,
  //   ...detail,
  // },
  // {
  //   id: 3,
  //   name: "Toyota 3",
  //   img: CocheImg,
  //   model: 3,
  //   ...detail,
  // },
];
