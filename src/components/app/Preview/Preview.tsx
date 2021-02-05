import React, { FunctionComponent, useContext } from "react";

import { AppContext } from "../../../context/context";

import { Wrapper, DeleteLayoutButton } from "./styles";

const Preview: FunctionComponent = () => {
  const [appContext, setAppContext] = useContext(AppContext);

  const handleDeleteLayout = (id: string) => {
    let updatedElementsArray = appContext.elements.filter(
      (layout) => layout.id !== id
    );

    if (updatedElementsArray) {
      setAppContext({ ...appContext, elements: [...updatedElementsArray] });
    }
  };

  // TODO
  // const handleUpdateLayout = () => {};

  return (
    <Wrapper id="content">
      {appContext.elements?.map((element) => (
        <div className="layout" key={element.id}>
          {element.component}

          <DeleteLayoutButton
            className="delete-component"
            onClick={() => handleDeleteLayout(element.id)}
            color="white"
            bgColor="#f5476a;"
          >
            Remove
          </DeleteLayoutButton>
        </div>
      ))}
    </Wrapper>
  );
};

export default Preview;
