import React, { FunctionComponent, useEffect, useState } from "react";

import { Wrapper } from "./styles";

import layouts from "../../../data/layouts";
import ShowInputs from "../ShowInputs/ShowInputs";

interface LayoutFormProps {
  selectedLayout: string;
}

const LayoutForm: FunctionComponent<LayoutFormProps> = ({ selectedLayout }) => {
  // State to keep track of layout values
  const [layout, setLayout] = useState<Array<string>>([]);
  const [initialValuesFormik, setInitialValuesFormik] = useState<any>();

  useEffect(() => {
    // get layout -> get each field
    const foundLayout = layouts.find(
      (layout) => layout.name === selectedLayout
    );

    if (foundLayout) {
      setLayout(Object.keys(foundLayout?.fields));

      let allValues: any = {};

      layout.forEach((field) => {
        allValues[field] = "";
      });

      // set State
      setInitialValuesFormik(allValues);
    } else {
      setInitialValuesFormik({});
      setLayout([]);
    }

    // pass initialValuesFormik to showForm components
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedLayout]);

  // Reads the form state and build inputs
  return (
    <Wrapper>
      <h1 style={{ color: "white" }}>Layout: {selectedLayout}</h1>

      <ShowInputs
        selectedLayout={selectedLayout}
        layout={layout}
        initialValuesFormik={initialValuesFormik}
      />
    </Wrapper>
  );
};

export default LayoutForm;
