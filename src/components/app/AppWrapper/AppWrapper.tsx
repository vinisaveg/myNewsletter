import React, { FunctionComponent, useContext, useEffect } from "react";

import { AppContext } from "../../../context/context";
import data from "../../../data/layouts";
import { Element } from "../../../interfaces/Element";

const AppWrapper: FunctionComponent = ({ children }) => {
  const [appContext, setAppContext] = useContext(AppContext);

  useEffect(() => {
    let cachedElements = window.localStorage.getItem("myNewsletterElements");

    if (cachedElements) {
      let parsedCachedElements = JSON.parse(cachedElements);

      const cachedElementsArray: Array<Element> = [];

      parsedCachedElements.forEach((element: any) => {
        const layout = data.find((layout) => layout.name === element.name);

        let cachedElement = layout?.element(element.component.props);

        cachedElementsArray.push({
          id: element.id,
          name: element.name,
          imageName: element.imageName,
          component: cachedElement,
        });
      });

      setAppContext({ ...appContext, elements: cachedElementsArray });
    }

    // eslint-disable-next-line
  }, []);

  return <div>{children}</div>;
};

export default AppWrapper;
