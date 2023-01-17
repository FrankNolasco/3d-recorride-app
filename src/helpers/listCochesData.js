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
      id: 5,
      name: "Blanco 28",
      color: "red",
      baseUrl:
        "https://stimg.cardekho.com/images/feelthecar360view/Exterior/Citroen/Citroen-C3/images/img_0_0_",
      prefix: "",
      suffix: ".jpg",
      size: 28,
    },
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
    // {
    //   id: 2,
    //   name: "Magnetic Gray Metallic",
    //   color: "rgb(73, 72, 72)",
    //   baseUrl:
    //     "https://s3-us-west-2.amazonaws.com/static.izmocars.com/toolkit/newgen/US/2022/22toyota/22toyota4runnertrdpro4wdsu5fa/22toyota4runnertrdpro4wdsu5fa_animations/_360color/_660x440/magnetic-gray-metallic/",
    //   prefix: "angle",
    //   suffix: ".webp",
    //   size: 36,
    // },
    // {
    //   id: 3,
    //   name: "Midnigth Black Metallic",
    //   color: "rgb(0, 3, 30)",
    //   baseUrl:
    //     "https://s3-us-west-2.amazonaws.com/static.izmocars.com/toolkit/newgen/US/2022/22toyota/22toyota4runnertrdpro4wdsu5fa/22toyota4runnertrdpro4wdsu5fa_animations/_360color/_660x440/midnight-black-metallic/",
    //   prefix: "angle",
    //   suffix: ".webp",
    //   size: 36,
    // },

    // {
    //   id: 4,
    //   name: "White",
    //   color: "#fff",
    //   baseUrl:
    //     "https://s3-us-west-2.amazonaws.com/static.izmocars.com/toolkit/newgen/US/2022/22toyota/22toyotarav4limitedsu5fa/22toyotarav4limitedsu5fa_animations/_360color/_660x440/blizzard-pearl/",
    //   prefix: "angle",
    //   suffix: ".webp",
    //   size: 36,
    // },
  ],

  interiorImg: insideOne,
  images: Images,
  video: video,
};

export const ListCoches = [
  {
    id: 13,
    name: "Citroen c3",
    img: "https://visuel3d-secure.citroen.com/V3DImage.ashx?client=CFGAP3D&ratio=1&format=jpg&quality=90&version=1CB6A5HM9JB0B460&color=0MM00NEU&trim=0P230RFR&mkt=ES&env=PROD&opt1=D3DG&width=1280&view=001",
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
