import React, { FunctionComponent, useContext } from "react";

import { AppContext } from "../../../context/context";

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

  const handleUpdateLayout = (id: string) => {
    // Find element Index to update
    // let elementIndexToUpdate = appContext.elements.findIndex(
    //   (element) => element.id === id
    // );
    // Find the element to update
    // let elementNameToUpdate = appContext.elements[elementIndexToUpdate].name;
    // TODO
    // Grab the new props from the UI (Create a modal on screen)
    // Function to return a new component with the updated props (elementName, newProps)
    // Create a new Elements Array to set the updated element
    // let updatedElementsArray = appContext.elements;
    // Set the Updated Component into the new Elements array
    // updatedElementsArray[elementIndexToUpdate].component = (
    //   <span>New Component</span>
    // );
    // Update the Context with the new Elements Array
    // setAppContext({ ...appContext, elements: updatedElementsArray });s
  };

  return (
    <Wrapper id="content">
      {appContext.elements?.map((element) => (
        <div className="layout" key={element.id}>
          {element.component}

          {/* {console.log(Object.entries(element.component?.props))} */}

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
            onClick={() => handleUpdateLayout(element.id)}
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
