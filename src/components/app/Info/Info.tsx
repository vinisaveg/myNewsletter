import React, { FunctionComponent, useContext } from "react";
import { useFormik } from "formik";

import { AppContext } from "../../../context/context";

import { Button } from "../../../styles/shared/Button";
import { Input, Wrapper } from "./styles";

const Info: FunctionComponent = () => {
  const [appContext, setAppContext] = useContext(AppContext);

  const formik = useFormik({
    initialValues: {
      title: "",
      snippet: "",
      imagesFolderPath: "",
    },
    onSubmit: (values) => {
      setAppContext({ ...values, content: "<Newsletter />" });
      console.log(appContext);
    },
  });

  const saveInfoOnNewsletter = () => {
    // Fetch HTML and insert Title & Snippet
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
      />
      <Input
        id="snippet"
        name="snippet"
        type="text"
        placeholder="Snippet"
        onChange={formik.handleChange}
        value={formik.values.snippet}
      />
      <Input
        id="imagesFolderPath"
        name="imagesFolderPath"
        type="text"
        placeholder="Image folder path"
        onChange={formik.handleChange}
        value={formik.values.imagesFolderPath}
      />

      <Button
        type="submit"
        margin={["0px", "10px"]}
        color="white"
        bgColor="#f5476a;"
      >
        Save
      </Button>
    </Wrapper>
  );
};

export default Info;
