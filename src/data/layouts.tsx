import React from "react";

import ButtonPrimary from "../components/layouts/ButtonPrimary/ButtonPrimary.component";
import Hero from "../components/layouts/Hero/Hero.component";
import Products from "../components/layouts/Products/Products.component";

import { Layout } from "../interfaces/Layout";

const data: Array<Layout> = [
  {
    name: "buttonPrimary",
    fields: {
      text: "",
      link: "",
    },
    element: (props: any) => <ButtonPrimary {...props} />,
  },
  {
    name: "hero",
    fields: {
      imageName: "",
      link: "",
      copy: "",
      subCopy: "",
    },
    element: (props: any) => <Hero {...props} />,
  },
  {
    name: "products",
    fields: {
      product1Link: "",
      product1Description: "",
      product1Image: "",
      product2Link: "",
      product2Description: "",
      product2Image: "",
      product3Link: "",
      product3Description: "",
      product3Image: "",
      product4Link: "",
      product4Description: "",
      product4Image: "",
    },
    element: (props: any) => <Products {...props} />,
  },
];

export default data;
