import React, { FunctionComponent } from "react";

import { Wrapper } from "./styles";

import ShowInputs from "../ShowInputs/ShowInputs";

interface LayoutFormProps {
  selectedLayout: string;
}

const LayoutForm: FunctionComponent<LayoutFormProps> = ({ selectedLayout }) => {
  if (selectedLayout) {
    return (
      <Wrapper>
        <h1 style={{ color: "white" }}>Layout: {selectedLayout}</h1>

        <ShowInputs selectedLayout={selectedLayout} />
      </Wrapper>
    );
  } else {
    return null;
  }
};

export default LayoutForm;
