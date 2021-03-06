import React, { FunctionComponent, useContext } from "react";
import { AppContext } from "../../../context/context";

import { Wrapper } from "./styles";
import { Button } from "../../../styles/shared/Button";

import { generateNewsletter } from "../../../services/generateNewsletter";
import { handleImagePaths } from "../../../services/handleImagePaths";
import { buildAndShip } from "../../../services/buildAndShip";

interface ActionButtonsProps {}

const ActionButtons: FunctionComponent<ActionButtonsProps> = () => {
  const [appContext, setAppContext] = useContext(AppContext);

  const build = async () => {
    //get inserted content from UI
    let content = document.querySelector("#content")?.innerHTML;

    if (content) {
      // Get cached data
      let cachedInfo = window.localStorage.getItem("myNewsletterInfo");

      if (cachedInfo) {
        // Parse cached data
        let parsedCachedInfo = JSON.parse(cachedInfo);

        //send content fetched from ui
        // generate function returns the full document with the content appended
        let page = await generateNewsletter(
          parsedCachedInfo.title,
          parsedCachedInfo.snippet,
          content
        );

        // Handle image paths to be ready for export
        let pageWithUpdatedPaths = handleImagePaths(
          page,
          parsedCachedInfo.imagesFolderPath || appContext.imagesFolderPath,
          appContext.elements
        );

        // build a blob as html & download it with FileSaver
        buildAndShip(pageWithUpdatedPaths);

        //DONE! -> newsletter.html
      } else {
        //send content fetched from ui
        // generate function returns the full document with the content appended
        let page = await generateNewsletter(
          appContext.title,
          appContext.snippet,
          content
        );

        // Handle image paths to be ready for export
        let pageWithUpdatedPaths = handleImagePaths(
          page,
          appContext.imagesFolderPath,
          appContext.elements
        );

        // build a blob as html & download it with FileSaver
        buildAndShip(pageWithUpdatedPaths);

        //DONE! -> newsletter.html
      }
    }
  };

  const clean = () => {
    // Cleaning App Cache
    window.localStorage.setItem("myNewsletterElements", "");

    setAppContext({
      title: "",
      snippet: "",
      imagesFolderPath: "",
      content: "",
      elements: [],
      currentElement: "",
      isUpdating: false,
      updatingId: "",
      updatingLayoutFields: [],
    });
  };

  if (appContext.elements.length > 0) {
    return (
      <Wrapper>
        <Button
          margin={["0px", "20px", "0px", "0px"]}
          color="white"
          bgColor="#74898a;"
          onClick={clean}
        >
          Clean
        </Button>

        <Button
          margin={["0px", "0px", "0px", "0px"]}
          color="white"
          bgColor="#f5476a;"
          onClick={build}
        >
          Build
        </Button>
      </Wrapper>
    );
  } else {
    return null;
  }
};

export default ActionButtons;
