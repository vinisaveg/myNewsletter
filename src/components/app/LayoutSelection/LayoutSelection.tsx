import React, { FunctionComponent, useContext, useState } from "react";

import { Element } from "../../../interfaces/Element";
import { generateNewsletter } from "../../../services/generateNewsletter";

import ActionButtons from "../ActionButtons/ActionButtons";
import LayoutForm from "../LayoutForm/LayoutForm";

import { Option, Select, Wrapper } from "./styles";

import layouts from "../../../data/layouts";

import { AppContext } from "../../../context/context";

const LayoutSelection: FunctionComponent = () => {
  // Gather the content created from UI
  const [elements, setElements] = useState<Array<Element>>([]);
  const [contentHref, setContentHref] = useState<HTMLElement | null>(null);
  const [selectedLayout, setSelectedLayout] = useState("");
  const [appContext] = useContext(AppContext);

  //We need to create a select that will show all Layouts available

  const addElements = () => {
    const layout = layouts.find(
      (layout) => (layout.name = appContext.currentElement)
    );

    const elementOptions = appContext.currentElementOptions;

    let newElement: Element = {
      id: Math.random() * 1000000,
      name: "hero",
      element: layout?.element(elementOptions),
    };

    console.log(appContext);
    setElements([...elements, newElement]);
  };

  const build = async () => {
    // Update all image elements src to the correct folder

    //get inserted content from UI
    let content = document.querySelector("#content")?.innerHTML;

    if (content) {
      //send content fetched from ui
      let page = await generateNewsletter(content);
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
          onChange={(e) => setSelectedLayout(e.target.value)}
          className="custom-select"
        >
          <Option value="default">Select a layout</Option>
          <Option value="hero">Hero</Option>
          <Option value="imageCenter">Image Center</Option>
          <Option value="4ProductsRow">4 Products Row</Option>
          <Option value="horizontalImage">Horizontal Image</Option>
        </Select>
      </Wrapper>

      <LayoutForm selectedLayout={selectedLayout} />

      <ActionButtons
        addElements={addElements}
        build={build}
        elements={elements}
        contentHref={contentHref}
      />
    </>
  );
};

export default LayoutSelection;
