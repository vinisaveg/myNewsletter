import React, { FunctionComponent } from "react";

import { Element } from "../../../interfaces/Element";

interface ActionButtonsProps {
  addElements: () => void;
  build: () => Promise<void>;
  contentHref: HTMLElement | null;
  elements: Array<Element>;
}

const ActionButtons: FunctionComponent<ActionButtonsProps> = ({
  addElements,
  build,
  elements,
  contentHref,
}) => {
  return (
    <div>
      <br />
      <button onClick={addElements}>Add Content Element</button>
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
        {elements?.map((element) => (
          <div key={element.id}>{element.element}</div>
        ))}
      </div>
    </div>
  );
};

export default ActionButtons;
