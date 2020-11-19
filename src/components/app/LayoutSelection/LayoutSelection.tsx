import React, { FunctionComponent, useState } from "react";

import { Element } from "../../../interfaces/Element";
import { generate } from "../../../services/generateEmail";

import Hero from "../../layouts/Hero/Hero.component";
import LayoutForm from "../LayoutForm/LayoutForm";

import { Option, Select, Wrapper } from "./styles";

const LayoutSelection: FunctionComponent = () => {
  // Gather the content created from UI
  const [elements, setElements] = useState<Array<Element>>([]);
  const [contentHref, setContentHref] = useState<HTMLElement | null>(null);

  //We need to create a select that will show all Layouts available
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
    <>
      <Wrapper>
        <Select
          onChange={(e) => console.log(e.target.value)}
          className="custom-select"
        >
          <Option value="default">Select a layout</Option>
          <Option value="hero">Hero</Option>
          <Option value="imageCenter">Image Center</Option>
          <Option value="4ProductsRow">4 Products Row</Option>
          <Option value="horizontalImage">Horizontal Image</Option>
        </Select>
      </Wrapper>

      <LayoutForm />

      <div>
        <br />
        <button onClick={addElements}>Add Content Element</button>
        <br />
        <button onClick={build}>Prepare!</button>
        <br />
        <a
          download="export.html"
          target="_blank"
          href={`data:text/html, ${contentHref?.innerHTML}`}
          id="buildBtn"
          rel="noreferrer"
        >
          Build
        </a>

        <div id="content">
          {elements.map((element) => (
            <div key={element.id}>{element.element}</div>
          ))}
        </div>
      </div>
    </>
  );
};

export default LayoutSelection;
