import { useFormik } from "formik";
import React, {
  FunctionComponent,
  useContext,
  useEffect,
  useState,
} from "react";

import { AppContext } from "../../../context/context";
import { Element } from "../../../interfaces/Element";
import layouts from "../../../data/layouts";
import { Input, Wrapper } from "./styles";
import { Button } from "../../../styles/shared/Button";

const ShowInputs: FunctionComponent = () => {
  const [appContext, setAppContext] = useContext(AppContext);
  // Set a type to formikInitialValues
  const [initialValuesFormik, setInitialValuesFormik] = useState<any>({});
  const [layoutKeys, setLayoutKeys] = useState<Array<string>>([]);

  useEffect(() => {
    const foundLayout = layouts.find(
      (layout) => layout.name === appContext.currentElement
    );

    if (foundLayout) {
      // set all layout fields
      setLayoutKeys(Object.keys(foundLayout.fields));

      // Set the Formik Object Type to handle the inputs fields values
      layoutKeys.forEach((key) => {
        setInitialValuesFormik({ [key]: "" });
      });
    } else {
      setInitialValuesFormik({});
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [appContext.currentElement]);

  // Build new formik with content from initialValuesFormik data
  const formik = useFormik({
    initialValues: initialValuesFormik,
    enableReinitialize: true,
    onSubmit: (formikValues) => setValues(formikValues),
  });

  // Set into context the current Element Options from inputs
  const setValues = (formikValues: any) => {
    const layout = layouts.find(
      (layout) => layout.name === appContext.currentElement
    );

    let newElementOptions = formikValues;

    let newElementId = (Math.random() * 100000).toString();

    newElementOptions.id = newElementId;

    let newElement: Element = {
      id: newElementId,
      name: appContext.currentElement,
      imageName: newElementOptions.imageName ? newElementOptions.imageName : "",
      component: layout?.element(newElementOptions),
    };

    let elements = appContext.elements;

    window.localStorage.setItem(
      "myNewsletterElements",
      JSON.stringify([...elements, newElement])
    );

    setAppContext({
      ...appContext,
      elements: [...elements, newElement],
      currentElement: "",
      currentElementOptions: newElementOptions,
    });
  };

  // For each field needed, there is a Input Field
  if (layoutKeys) {
    return (
      <Wrapper onSubmit={formik.handleSubmit}>
        {layoutKeys.map((key) => (
          <Input
            onChange={formik.handleChange}
            key={key}
            id={key}
            name={key}
            value={formik.values.key}
            type="text"
            placeholder={key}
          />
        ))}

        <Button
          type="submit"
          margin={["15px", "0px", "0px", "0px"]}
          color="white"
          bgColor="#f5476a;"
        >
          Add
        </Button>
      </Wrapper>
    );
  } else {
    return null;
  }
};

export default ShowInputs;
