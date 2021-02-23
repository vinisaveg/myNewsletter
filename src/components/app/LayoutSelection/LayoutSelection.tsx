import React, { FunctionComponent, useContext } from "react";
import { AppContext } from "../../../context/context";

import { Option, Select, Wrapper } from "./styles";

const LayoutSelection: FunctionComponent = () => {
  const [appContext, setAppContext] = useContext(AppContext);

  const updateSelectedLayout = (e: any) => {
    if (e.target.value === "default") {
      setAppContext({ ...appContext, currentElement: "" });
    } else {
      setAppContext({ ...appContext, currentElement: e.target.value });
    }
  };

  return (
    <>
      <Wrapper>
        <Select
          onChange={(e: any) => updateSelectedLayout(e)}
          onClick={(e: any) => updateSelectedLayout(e)}
          className="custom-select"
          defaultValue={"default"}
        >
          <Option disabled value="default">
            Select a layout
          </Option>
          <Option value="buttonPrimary">Button Primary</Option>
          <Option value="hero">Hero</Option>
          <Option value="product">4 Products Row</Option>
        </Select>
      </Wrapper>
    </>
  );
};

export default LayoutSelection;
