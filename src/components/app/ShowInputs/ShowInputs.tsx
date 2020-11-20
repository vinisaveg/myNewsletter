import React, { FunctionComponent, useEffect, useState } from "react";

interface ShowInputsProps {
  initialValuesFormik: Array<any> | undefined;
}

const ShowInputs: FunctionComponent<ShowInputsProps> = ({
  initialValuesFormik,
}) => {
  const [values, setValues] = useState<Array<any>>();

  // Build new formik with content from initialValuesFormik data

  useEffect(() => {
    setValues(initialValuesFormik);
    console.log(initialValuesFormik);
  }, [initialValuesFormik]);

  return (
    <div>
      <span></span>
    </div>
  );
};

export default ShowInputs;
