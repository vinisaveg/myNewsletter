import React, { FunctionComponent, useContext } from "react";
import { AppContext } from "../../../context/context";

import { Option, Select, Wrapper } from "./styles";

const LayoutSelection: FunctionComponent = () => {
  const [appContext, setAppContext] = useContext(AppContext);

  const updateSelectedLayout = (e: any) => {
    setAppContext({ ...appContext, currentElement: e.target.value });
  };

  return (
    <>
      <Wrapper>
        <Select
          onChange={(e: any) => updateSelectedLayout(e)}
          className="custom-select"
          defaultValue={"default"}
        >
          <Option disabled value="default">
            Select a layout
          </Option>
          <Option value="hero">Hero</Option>
          <Option value="imageCenter">Image Center</Option>
          <Option value="4ProductsRow">4 Products Row</Option>
          <Option value="horizontalImage">Horizontal Image</Option>
        </Select>
      </Wrapper>
    </>
  );
};

export default LayoutSelection;
