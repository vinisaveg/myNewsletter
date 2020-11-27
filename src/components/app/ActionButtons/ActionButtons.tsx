import React, { FunctionComponent, useContext, useState } from "react";
import { AppContext } from "../../../context/context";

import { ExportButton, Wrapper } from "./styles";

import { generateNewsletter } from "../../../services/generateNewsletter";
import { handleImagePaths } from "../../../services/handleImagePaths";
import { Button } from "../../../styles/shared/Button";

interface ActionButtonsProps {}

const ActionButtons: FunctionComponent<ActionButtonsProps> = () => {
  const [appContext] = useContext(AppContext);
  const [newsletterContent, setNewsletterContent] = useState<HTMLElement>();

  const build = async () => {
    //get inserted content from UI
    let content = document.querySelector("#content")?.innerHTML;

    if (content) {
      //send content fetched from ui
      let page = await generateNewsletter(content);
      // generate function returns the full document with the content appended

      // Handle image paths to be ready for export
      let pageWithUpdatedPaths = handleImagePaths(
        page,
        appContext.imagesFolderPath,
        appContext.elements
      );

      // set href to download the html file
      setNewsletterContent(pageWithUpdatedPaths.documentElement);

      //DONE! -> newsletter.html
    }
  };

  return (
    <Wrapper>
      <Button
        margin={["0px", "0px", "0px", "0px"]}
        color="white"
        bgColor="#f5476a;"
        onClick={build}
      >
        Build
      </Button>

      <ExportButton
        download="newsletter.html"
        target="_blank"
        href={`data:text/html, ${newsletterContent?.innerHTML}`}
        id="buildBtn"
        rel="noreferrer"
      >
        Export
      </ExportButton>
    </Wrapper>
  );
};

export default ActionButtons;
