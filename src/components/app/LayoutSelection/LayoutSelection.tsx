import React, { FunctionComponent, useContext, useState } from "react";
import { AppContext } from "../../../context/context";

import { generateNewsletter } from "../../../services/generateNewsletter";

import ActionButtons from "../ActionButtons/ActionButtons";
import LayoutForm from "../LayoutForm/LayoutForm";

import { Option, Select, Wrapper } from "./styles";

const LayoutSelection: FunctionComponent = () => {
  const [contentHref, setContentHref] = useState<HTMLElement | null>(null);
  const [appContext, setAppContext] = useContext(AppContext);

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

  const updateSelectedLayout = (e: any) => {
    setAppContext({ ...appContext, currentElement: e.target.value });
  };

  return (
    <>
      <Wrapper>
        <Select
          onChange={(e: any) => updateSelectedLayout(e)}
          className="custom-select"
        >
          <Option value="default">Select a layout</Option>
          <Option value="hero">Hero</Option>
          <Option value="imageCenter">Image Center</Option>
          <Option value="4ProductsRow">4 Products Row</Option>
          <Option value="horizontalImage">Horizontal Image</Option>
        </Select>
      </Wrapper>

      <LayoutForm selectedLayout={appContext.currentElement} />

      <ActionButtons build={build} contentHref={contentHref} />
    </>
  );
};

export default LayoutSelection;
