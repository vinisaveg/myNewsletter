import React, { FunctionComponent, useContext } from "react";

import { Wrapper } from "./styles";

import ShowInputs from "../ShowInputs/ShowInputs";
import { AppContext } from "../../../context/context";

interface LayoutFormProps {}

const LayoutForm: FunctionComponent<LayoutFormProps> = () => {
  const [appContext] = useContext(AppContext);

  if (appContext.currentElement) {
    return (
      <Wrapper>
        <h1 style={{ color: "white" }}>Layout: {appContext.currentElement}</h1>

        <ShowInputs currentElementSelected={appContext.currentElement} />
      </Wrapper>
    );
  } else {
    return null;
  }
};

export default LayoutForm;
