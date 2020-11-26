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
interface ShowInputsProps {
  selectedLayout: string;
}

const ShowInputs: FunctionComponent<ShowInputsProps> = ({ selectedLayout }) => {
  const [appContext, setAppContext] = useContext(AppContext);
  const [initialValuesFormik, setInitialValuesFormik] = useState<any>({});
  const [layoutKeys, setLayoutKeys] = useState<Array<string>>([]);

  useEffect(() => {
    const foundLayout = layouts.find(
      (layout) => layout.name === selectedLayout
    );

    if (foundLayout) {
      // set all layout fields
      setLayoutKeys(Object.keys(foundLayout.fields));

      // Set the Formik Object Type to handle the inputs fields values
      layoutKeys.forEach((key) => {
        setInitialValuesFormik({ [key]: "", ...initialValuesFormik });
      });
    } else {
      setInitialValuesFormik({});
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedLayout]);

  // Build new formik with content from initialValuesFormik data
  const formik = useFormik({
    initialValues: initialValuesFormik,
    enableReinitialize: true,
    onSubmit: (values) => setValues(values),
  });

  // Set into context the actual context + the current Element Options from inputs
  const setValues = (values: any) => {
    const layout = layouts.find(
      (layout) => (layout.name = appContext.currentElement)
    );

    const elementOptions = values;

    let newElementId = (Math.random() * 1000000).toString();

    elementOptions.id = newElementId;

    let newElement: Element = {
      id: newElementId,
      name: appContext.currentElement,
      imageName: elementOptions.imageName ? elementOptions.imageName : "",
      element: layout?.element(elementOptions),
    };

    let elements = appContext.elements;

    setAppContext({
      ...appContext,
      elements: [...elements, newElement],
      currentElement: selectedLayout,
      currentElementOptions: elementOptions,
    });
  };

  // For each field needed, there is a Input Field
  if (layoutKeys) {
    return (
      <form onSubmit={formik.handleSubmit}>
        {layoutKeys.map((key) => (
          <input
            onChange={formik.handleChange}
            // value={formik.values[key]}
            key={key}
            id={key}
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
