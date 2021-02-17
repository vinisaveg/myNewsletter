import React, { FunctionComponent, useContext, useEffect } from "react";

import { AppContext } from "../../../context/context";
import data from "../../../data/layouts";

const UpdateModal: FunctionComponent = () => {
  const [appContext, setAppContext] = useContext(AppContext);

  useEffect(() => {
    console.log("Updating element has changed");
  }, [appContext.updatingId]);

  const handleUpdateElement = () => {
    // Grab the new values from the inputs

    // Find element Index to update
    let elementIndexToUpdate = appContext.elements.findIndex(
      (element) => element.id === "appContext.updatingId"
    );

    // Find the element name to update
    let elementNameToUpdate = appContext.elements[elementIndexToUpdate].name;

    // Grab the correspondig Layout
    let layoutToUpdate = data.find(
      (layout) => layout.name === elementNameToUpdate
    );

    // Return the new element with the fresh props from the inputs
    let updatedElement = layoutToUpdate?.element({ props: "" });

    // Create a new Elements Array to set the updated element
    let updatedElementsArray = appContext.elements;

    // Set the Updated Component into the new Elements array
    if (updatedElement) {
      updatedElementsArray[elementIndexToUpdate].component = updatedElement;

      // Update the Context with the new Elements Array
      setAppContext({ ...appContext, elements: updatedElementsArray });
    }
  };

  // Show the inputs to be updated
  if (appContext.isUpdating) {
    return (
      <div>
        <span>Update Element</span>
      </div>
    );
  }

  return null;
};

export default UpdateModal;
