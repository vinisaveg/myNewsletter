import React, { FunctionComponent, useState } from "react";

import { AppContext, InitialAppContext } from "../../../context/context";

import { Wrapper } from "./styles";

import LayoutSelection from "../LayoutSelection/LayoutSelection";
import Info from "../Info/Info";

const Builder: FunctionComponent = () => {
  const appContext = useState(InitialAppContext);

  return (
    <AppContext.Provider value={appContext}>
      <Wrapper className="App">
        <h1 style={{ color: "white" }}>Hello myNewsletter!</h1>

        <Info />

        <LayoutSelection />
      </Wrapper>
    </AppContext.Provider>
  );
};

export default Builder;
