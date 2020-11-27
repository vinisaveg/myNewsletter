import Hero from "../components/layouts/Hero/Hero.component";
import React from "react";

// Set a dynamic type to the layouts
const data = [
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
];

export default data;
