import React, { FunctionComponent, useEffect, useState } from "react";

import { Wrapper } from "./styles";

import layouts from "../../../data/layouts";
import ShowInputs from "../ShowInputs/ShowInputs";

interface LayoutFormProps {
  selectedLayout: string;
}

const LayoutForm: FunctionComponent<LayoutFormProps> = ({ selectedLayout }) => {
  // State to keep track of layout fields needed to fill the element
  const [layoutKeys, setLayout] = useState<Array<string>>([]);
  // State to set how the form fields will look like, based on the layout
  const [initialValuesFormik, setInitialValuesFormik] = useState<any>();

  useEffect(() => {
    //Search for the layout in the layouts Data
    const foundLayout = layouts.find(
      (layout) => layout.name === selectedLayout
    );

    if (foundLayout) {
      // set all layout fields
      setLayout(Object.keys(foundLayout?.fields));

      let allValues: any = {};

      // Set the Formik Object Type to handle the inputs fields values
      layoutKeys.forEach((key) => {
        allValues[key] = "";
      });

      setInitialValuesFormik(allValues);
    } else {
      setInitialValuesFormik({});
      setLayout([]);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedLayout]);

  if (selectedLayout) {
    return (
      <Wrapper>
        <h1 style={{ color: "white" }}>Layout: {selectedLayout}</h1>

        <ShowInputs
          selectedLayout={selectedLayout}
          layoutKeys={layoutKeys}
          initialValuesFormik={initialValuesFormik}
        />
      </Wrapper>
    );
  } else {
    return null;
  }
};

export default LayoutForm;
