import React, { FunctionComponent, useState } from "react";

import { AppContext, InitialAppContext } from "../../../context/context";

import Form from "../Form/Form";
import { Wrapper } from "./styles";

const Builder: FunctionComponent = () => {
  const appContext = useState(InitialAppContext);

  return (
    <AppContext.Provider value={appContext}>
      <Wrapper className="App">
        <h1 style={{ color: "white" }}>Hello myNewsletter!</h1>

        <Form />
      </Wrapper>
    </AppContext.Provider>
  );
};

export default Builder;
