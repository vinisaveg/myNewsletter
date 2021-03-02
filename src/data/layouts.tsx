import React from "react";

import ButtonPrimary from "../components/layouts/ButtonPrimary/ButtonPrimary.component";
import Hero from "../components/layouts/Hero/Hero.component";
import Product from "../components/layouts/Product/Product.component";

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
    imagePreview:
      "https://raw.githubusercontent.com/vinisaveg/myNewsletter/main/preview/img/test.jpg",
    fields: {
      imageName: "",
      link: "",
      copy: "",
      subCopy: "",
    },
    element: (props: any) => <Hero {...props} />,
  },
  {
    name: "product",
    fields: {
      productLink: "",
      productImage: "",
      productDescription: "",
      product2Link: "",
      product2Image: "",
      product2Description: "",
      product3Link: "",
      product3Image: "",
      product3Description: "",
      product4Link: "",
      product4Image: "",
      product4Description: "",
    },
    element: (props: any) => <Product {...props} />,
  },
];

export default data;
