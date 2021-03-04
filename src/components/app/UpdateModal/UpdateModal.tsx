import { useFormik } from "formik";
import React, {
  FunctionComponent,
  useContext,
  useEffect,
  useState,
} from "react";

import { AppContext } from "../../../context/context";
import data from "../../../data/layouts";
import { Wrapper, Input, ButtonWrapper } from "./styles";
import { Button } from "../../../styles/shared/Button";

const UpdateModal: FunctionComponent = () => {
  const [appContext, setAppContext] = useContext(AppContext);
  const [initialValuesFormik, setInitialValuesFormik] = useState<any>({});

  useEffect(() => {
    // Set the Formik Object Type to handle the inputs fields values to update
    appContext.updatingLayoutFieldsValues?.forEach((key) => {
      setInitialValuesFormik({ ...key });
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [appContext.updatingId]);

  const formik = useFormik({
    initialValues: initialValuesFormik,
    enableReinitialize: true,
    onSubmit: (formikValues) => handleUpdateElement(formikValues),
  });

  const handleUpdateElement = (formikValues: any) => {
    // Find element Index to update
    let elementIndexToUpdate = appContext.elements.findIndex(
      (element) => element.id === appContext.updatingId
    );

    // Find the element name to update
    let elementNameToUpdate = appContext.elements[elementIndexToUpdate].name;

    // Grab the correspondig Layout
    let layoutToUpdate = data.find(
      (layout) => layout.name === elementNameToUpdate
    );

    // Return the new element with the fresh props from the inputs
    if (layoutToUpdate) {
      // Get the new values from the inputs
      let newElementProps = formikValues;

      newElementProps.id = appContext.updatingId;

      // Create the element with the new props
      let updatedElement = layoutToUpdate.element(newElementProps);

      // Create a new Elements Array to set the updated element
      let updatedElementsArray = appContext.elements;

      // Set the Updated Component into the new Elements array
      if (updatedElement) {
        updatedElementsArray[elementIndexToUpdate].component = updatedElement;

        // Update the cache with the net Elements Array
        window.localStorage.setItem(
          "myNewsletterElements",
          JSON.stringify(updatedElementsArray)
        );

        // Update the Context with the new Elements Array
        setAppContext({ ...appContext, elements: updatedElementsArray });

        handleCloseUpdateModal();
      }
    }
  };

  const handleCloseUpdateModal = () => {
    setAppContext({
      ...appContext,
      isUpdating: false,
      updatingId: "",
      updatingLayoutFields: [],
      updatingLayoutFieldsValues: [{}],
    });

    setInitialValuesFormik({});
  };

  // Show the inputs to be updated
  if (appContext.isUpdating) {
    return (
      <Wrapper onSubmit={formik.handleSubmit}>
        {appContext.updatingLayoutFields.map((field) => (
          <Input
            onChange={formik.handleChange}
            key={field}
            id={field}
            name={field}
            type="text"
            placeholder={formik.values[field]}
            value={formik.values[field] || ""}
            required
          />
        ))}

        <ButtonWrapper>
          <Button
            onClick={() => handleCloseUpdateModal()}
            width="50%"
            type="button"
            margin={["10px", "10px", "0px", "0px"]}
            color="white"
            bgColor="#acacac;"
          >
            Cancel
          </Button>

          <Button
            width="50%"
            type="submit"
            margin={["10px", "0px", "0px", "10px"]}
            color="white"
            bgColor="#f5476a;"
          >
            Update
          </Button>
        </ButtonWrapper>
      </Wrapper>
    );
  }

  return null;
};

export default UpdateModal;
