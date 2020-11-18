import React, { FunctionComponent, useState } from "react";

import { Element } from "../../../interfaces/Element";
import { generate } from "../../../services/generateEmail";

import Hero from "../../layouts/Hero/Hero.component";
import Info from "../Info/Info";

// import { Button } from "../../../styles/shared/Button";
import { Wrapper } from "./styles";

const Form: FunctionComponent = () => {
  // Gather the content created from UI
  const [elements, setElements] = useState<Array<Element>>([]);
  const [contentHref, setContentHref] = useState<HTMLElement | null>(null);

  let newElement: Element = {
    id: Math.random() * 1000000,
    name: "input",
    element: <Hero />,
  };

  const addElements = () => {
    setElements([...elements, newElement]);
  };

  const build = async () => {
    // Update all image elements src to the correct folder

    //get inserted content from UI
    let content = document.querySelector("#content")?.innerHTML;

    if (content) {
      //send content fetched from ui
      let page = await generate(content);
      // generate function returns the full document with all the content

      // set href to download the html file
      setContentHref(page.documentElement);
    }

    //DONE!
  };

  return (
    <Wrapper>
      <Info />
    </Wrapper>
  );
};

export default Form;
