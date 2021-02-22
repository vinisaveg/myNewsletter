import React, {
  FunctionComponent,
  useContext,
  useEffect,
  useState,
} from "react";
import { useFormik } from "formik";

import { AppContext } from "../../../context/context";

import { Button } from "../../../styles/shared/Button";
import { Input, Wrapper } from "./styles";

const BaseInformation: FunctionComponent = () => {
  const [appContext, setAppContext] = useContext(AppContext);
  const [infoSaved, setInfoSaved] = useState(false);
  const [initialValuesFormik, setInitialValuesFormik] = useState<any>({
    title: "",
    snippet: "",
    imagesFolderPath: "",
  });

  useEffect(() => {
    let info = window.localStorage.getItem("myNewsletterInfo");

    if (info) {
      let infoParsed = JSON.parse(info);

      setInitialValuesFormik({
        title: infoParsed.title,
        snippet: infoParsed.snippet,
        imagesFolderPath: infoParsed.imagesFolderPath,
      });
    }
  }, [appContext]);

  const formik = useFormik({
    initialValues: {
      title: initialValuesFormik.title,
      snippet: initialValuesFormik.snippet,
      imagesFolderPath: initialValuesFormik.imagesFolderPath,
    },
    enableReinitialize: true,
    onSubmit: (values) => {
      setAppContext({ ...appContext, ...values });

      // Set info to Local Storage -> myNewsletterInfo
      window.localStorage.setItem(
        "myNewsletterInfo",
        JSON.stringify({ ...values })
      );
      setInfoSaved(true);
    },
  });

  const resetInfo = () => {
    setInfoSaved(false);

    window.localStorage.setItem("myNewsletterInfo", "");

    setInitialValuesFormik({
      title: "",
      snippet: "",
      imagesFolderPath: "",
    });

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
