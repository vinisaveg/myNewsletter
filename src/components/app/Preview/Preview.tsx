import React, { FunctionComponent, useContext } from "react";

import { AppContext } from "../../../context/context";
import data from "../../../data/layouts";

import { Wrapper, DeleteLayoutButton, UpdateLayoutButton } from "./styles";

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

  const handleShowUpdateModal = (id: string) => {
    // Find element Index to update
    let elementIndexToUpdate = appContext.elements.findIndex(
      (element) => element.id === id
    );

    // Find the element to update
    let elementNameToUpdate = appContext.elements[elementIndexToUpdate].name;

    // Grab the correspondig Layout
    let layoutToUpdate = data.find(
      (layout) => layout.name === elementNameToUpdate
    );

    if (layoutToUpdate) {
      let layoutFields = Object.keys(layoutToUpdate?.fields);

      // Set isUpdating to true inside the context
      // Set updatingId inside the context
      // Set the fields to be updated inside the context
      setAppContext({
        ...appContext,
        isUpdating: true,
        updatingId: id,
        updatingLayoutFields: layoutFields,
      });
    }
  };

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

          <UpdateLayoutButton
            className="delete-component"
            onClick={() => handleShowUpdateModal(element.id)}
            color="#222222"
            bgColor="#f2ff80;"
          >
            Update
          </UpdateLayoutButton>
        </div>
      ))}
    </Wrapper>
  );
};

export default Preview;
