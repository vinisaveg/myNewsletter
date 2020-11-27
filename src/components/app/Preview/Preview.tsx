import React, { FunctionComponent, useContext } from "react";

import { AppContext } from "../../../context/context";

import { Wrapper } from "./styles";

const Preview: FunctionComponent = () => {
  const [appContext] = useContext(AppContext);

  return (
    <Wrapper id="content">
      {appContext.elements?.map((element) => (
        <div key={element.id}>{element.component}</div>
      ))}
    </Wrapper>
  );
};

export default Preview;
