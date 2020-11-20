import { useFormik } from "formik";
import React, { FunctionComponent, useContext } from "react";

import { AppContext } from "../../../context/context";

interface ShowInputsProps {
  initialValuesFormik: any;
  layout: Array<string>;
  selectedLayout: string;
}

const ShowInputs: FunctionComponent<ShowInputsProps> = ({
  initialValuesFormik,
  layout,
  selectedLayout,
}) => {
  const [appContext, setAppContext] = useContext(AppContext);

  // Build new formik with content from initialValuesFormik data
  const formik = useFormik({
    initialValues: initialValuesFormik,
    enableReinitialize: true,
    onSubmit: (values) => setValues(values),
  });

  const setValues = (values: any) => {
    setAppContext({
      ...appContext,
      currentElement: selectedLayout,
      currentElementOptions: values,
    });
  };

  if (layout) {
    return (
      <form onSubmit={formik.handleSubmit}>
        {layout.map((layoutKey) => (
          <input
            onChange={formik.handleChange}
            value={formik.values.layoutFound}
            key={layoutKey}
            name={layoutKey}
            type="text"
            placeholder={layoutKey}
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
