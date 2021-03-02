import React, { FunctionComponent, useContext } from "react";

import { Wrapper, ImagePreview } from "./styles";

import ShowInputs from "../ShowInputs/ShowInputs";
import { AppContext } from "../../../context/context";

import data from "../../../data/layouts";

const LayoutForm: FunctionComponent = () => {
  const [appContext] = useContext(AppContext);

  const layoutImagePreview = data.find(
    (layout) => layout.name === appContext.currentElement
  );

  if (appContext.currentElement) {
    return (
      <Wrapper>
        {layoutImagePreview?.imagePreview ? (
          <ImagePreview
            src={layoutImagePreview?.imagePreview}
            alt="Layout preview"
          />
        ) : null}

        <h1 style={{ color: "white" }}>Layout: {appContext.currentElement}</h1>

        <ShowInputs />
      </Wrapper>
    );
  } else {
    return null;
  }
};

export default LayoutForm;
