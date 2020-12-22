import React, { FunctionComponent, useContext, useState } from "react";
import { useFormik } from "formik";

import { AppContext } from "../../../context/context";

import { Button } from "../../../styles/shared/Button";
import { Input, Wrapper } from "./styles";

const BaseInformation: FunctionComponent = () => {
  const [appContext, setAppContext] = useContext(AppContext);
  const [infoSaved, setInfoSaved] = useState(false);

  const formik = useFormik({
    initialValues: {
      title: "",
      snippet: "",
      imagesFolderPath: "",
    },
    onSubmit: (values) => {
      setAppContext({ ...appContext, ...values });
      setInfoSaved(true);
    },
  });

  const resetInfo = () => {
    setInfoSaved(false);

    setAppContext({
      ...appContext,
      title: "",
      snippet: "",
      imagesFolderPath: "",
    });

    formik.values.title = "";
    formik.values.snippet = "";
    formik.values.imagesFolderPath = "";
  };

  return (
    <Wrapper onSubmit={formik.handleSubmit}>
      <Input
        id="title"
        name="title"
        type="text"
        placeholder="Title"
        onChange={formik.handleChange}
        value={formik.values.title}
        disabled={infoSaved}
      />
      <Input
        id="snippet"
        name="snippet"
        type="text"
        placeholder="Snippet"
        onChange={formik.handleChange}
        value={formik.values.snippet}
        disabled={infoSaved}
      />
      <Input
        id="imagesFolderPath"
        name="imagesFolderPath"
        type="text"
        placeholder="Image folder path"
        onChange={formik.handleChange}
        value={formik.values.imagesFolderPath}
        disabled={infoSaved}
      />

      <Button
        type="button"
        margin={["0px", "0px", "0px", "10px"]}
        color="white"
        bgColor="#74898a;"
        onClick={resetInfo}
      >
        Reset
      </Button>

      <Button
        type="submit"
        margin={["0px", "0px", "0px", "10px"]}
        color="white"
        bgColor="#f5476a;"
      >
        Save
      </Button>
    </Wrapper>
  );
};

export default BaseInformation;
