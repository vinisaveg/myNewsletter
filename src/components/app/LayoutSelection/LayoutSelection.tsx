import React, { FunctionComponent, useState } from "react";

import { generateNewsletter } from "../../../services/generateNewsletter";

import ActionButtons from "../ActionButtons/ActionButtons";
import LayoutForm from "../LayoutForm/LayoutForm";

import { Option, Select, Wrapper } from "./styles";

const LayoutSelection: FunctionComponent = () => {
  const [selectedLayout, setSelectedLayout] = useState("");
  const [contentHref, setContentHref] = useState<HTMLElement | null>(null);

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

      <ActionButtons build={build} contentHref={contentHref} />
    </>
  );
};

export default LayoutSelection;
