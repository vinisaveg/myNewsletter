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
  const [initialValuesFormik, setInitialValuesFormik] = useState<Array<any>>();

  useEffect(() => {
    // get layout -> get each field
    const foundLayout = layouts.find(
      (layout) => layout.name === selectedLayout
    );

    if (foundLayout) {
      setLayout(Object.keys(foundLayout?.fields));
    }

    const initialValuesFormik = layout.map((field) => {
      return {
        [field]: "",
      };
    });

    // set State
    setInitialValuesFormik(initialValuesFormik);

    // pass initialValuesFormik to showForm components
  }, [selectedLayout]);

  // Reads the form state and build inputs
  return (
    <Wrapper>
      <h1 style={{ color: "white" }}>Layout: {selectedLayout}</h1>

      {initialValuesFormik?.map((value) => console.log(value))}

      <ShowInputs initialValuesFormik={initialValuesFormik} />
    </Wrapper>
  );
};

export default LayoutForm;
