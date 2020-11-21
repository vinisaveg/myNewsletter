import React, { FunctionComponent, useContext } from "react";
import { AppContext } from "../../../context/context";

interface ActionButtonsProps {
  build: () => Promise<void>;
  contentHref: HTMLElement | null;
}

const ActionButtons: FunctionComponent<ActionButtonsProps> = ({
  build,
  contentHref,
}) => {
  const [appContext] = useContext(AppContext);

  return (
    <div>
      <br />
      <br />
      <button onClick={build}>Prepare!</button>
      <br />
      <a
        download="export.html"
        target="_blank"
        href={`data:text/html, ${contentHref?.innerHTML}`}
        id="buildBtn"
        rel="noreferrer"
      >
        Export
      </a>

      <div id="content">
        {appContext.elements?.map((element) => (
          <div key={element.id}>{element.element}</div>
        ))}
      </div>
    </div>
  );
};

export default ActionButtons;
