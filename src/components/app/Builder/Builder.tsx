import React, { FunctionComponent } from "react";

import Form from "../Form/Form";

import { Wrapper } from "./styles";

const Builder: FunctionComponent = () => {
  return (
    <Wrapper className="App">
      <h1>Hello newsletter builder!</h1>

      <Form />
    </Wrapper>
  );
};

export default Builder;
