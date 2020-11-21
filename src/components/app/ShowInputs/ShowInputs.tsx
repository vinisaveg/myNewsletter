import { useFormik } from "formik";
import React, { FunctionComponent, useContext } from "react";

import { AppContext } from "../../../context/context";
import { Element } from "../../../interfaces/Element";
import layouts from "../../../data/layouts";

interface ShowInputsProps {
  initialValuesFormik: any;
  layoutKeys: Array<string>;
  selectedLayout: string;
}

const ShowInputs: FunctionComponent<ShowInputsProps> = ({
  initialValuesFormik,
  layoutKeys,
  selectedLayout,
}) => {
  const [appContext, setAppContext] = useContext(AppContext);

  // Build new formik with content from initialValuesFormik data
  const formik = useFormik({
    initialValues: initialValuesFormik,
    enableReinitialize: true,
    onSubmit: (values) => setValues(values),
  });

  // Set into context the actual context + the current Element Options from inputs
  const setValues = (values: any) => {
    addElement(
      selectedLayout,
      values,
      appContext.currentElement,
      appContext.elements
    );
  };

  //Add new element created from the inputs values
  const addElement = (
    selectedLayout: string,
    values: any,
    currentElement: string,
    elements: Array<Element>
  ) => {
    const layout = layouts.find((layout) => (layout.name = currentElement));

    const elementOptions = values;

    let newElement: Element = {
      id: Math.random() * 1000000,
      name: currentElement,
      element: layout?.element(elementOptions),
    };

    setAppContext({
      ...appContext,
      elements: [...elements, newElement],
      currentElement: selectedLayout,
      currentElementOptions: values,
    });
  };

  // For each field needed, there is a Input Field
  if (layoutKeys) {
    return (
      <form onSubmit={formik.handleSubmit}>
        {layoutKeys.map((key) => (
          <input
            onChange={formik.handleChange}
            value={formik.values.layoutFound}
            key={key}
            name={key}
            type="text"
            placeholder={key}
          />
        ))}

        <button type="submit">Add</button>
      </form>
    );
  } else {
    return null;
  }
};

export default ShowInputs;
