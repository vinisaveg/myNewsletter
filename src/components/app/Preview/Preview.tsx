import React, { FunctionComponent, useContext } from "react";

import { AppContext } from "../../../context/context";
import data from "../../../data/layouts";

import {
  Wrapper,
  OptionsButtonWrapper,
  UpDownButtonsWrapper,
  UpDownButton,
} from "./styles";

const Preview: FunctionComponent = () => {
  const [appContext, setAppContext] = useContext(AppContext);

  const handleDeleteLayout = (id: string) => {
    let updatedElementsArray = appContext.elements.filter(
      (layout) => layout.id !== id
    );

    if (updatedElementsArray) {
      // Update the cache with the net Elements Array
      window.localStorage.setItem(
        "myNewsletterElements",
        JSON.stringify(updatedElementsArray)
      );

      // Update the Context with the new Elements Array
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

    // Grab the element props
    let elementPropsToUpdate =
      appContext.elements[elementIndexToUpdate].component?.props;

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
        updatingLayoutFieldsValues: [elementPropsToUpdate],
      });
    }
  };

  const handleUpAndDown = (id: string, direction: string) => {
    let elementToMove = appContext.elements.find(
      (element) => element.id === id
    );

    if (elementToMove) {
      let elementToMoveIndex = appContext.elements.indexOf(elementToMove);

      if (elementToMoveIndex === 0 && direction === "up") {
        return;
      }

      if (
        elementToMoveIndex === appContext.elements.length - 1 &&
        direction === "down"
      ) {
        return;
      }

      let nextElementToMove =
        direction === "up"
          ? appContext.elements[elementToMoveIndex - 1]
          : appContext.elements[elementToMoveIndex + 1];

      let nextElementToMoveIndex = appContext.elements.indexOf(
        nextElementToMove
      );

      const elementsArrayToUpdate = appContext.elements;

      elementsArrayToUpdate[elementToMoveIndex] = nextElementToMove;
      elementsArrayToUpdate[nextElementToMoveIndex] = elementToMove;

      setAppContext({
        ...appContext,
        elements: elementsArrayToUpdate,
      });

      window.localStorage.setItem(
        "myNewsletterElements",
        JSON.stringify(elementsArrayToUpdate)
      );
    }
  };

  return (
    <Wrapper id="content">
      {appContext.elements?.map((element) => (
        <div className="layout" key={element.id}>
          {element.component}

          <OptionsButtonWrapper className="delete-component">
            <UpDownButton onClick={() => handleShowUpdateModal(element.id)}>
              &#9997;
            </UpDownButton>

            <UpDownButton onClick={() => handleDeleteLayout(element.id)}>
              &#10060;
            </UpDownButton>
          </OptionsButtonWrapper>

          <UpDownButtonsWrapper className="delete-component">
            <UpDownButton onClick={() => handleUpAndDown(element.id, "up")}>
              &#128070;
            </UpDownButton>
            <UpDownButton onClick={() => handleUpAndDown(element.id, "down")}>
              &#128071;
            </UpDownButton>
          </UpDownButtonsWrapper>
        </div>
      ))}
    </Wrapper>
  );
};

export default Preview;
