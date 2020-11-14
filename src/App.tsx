import React, { useState } from "react";
import "./App.css";
import { Element } from "./interfaces/Element";

import { generate } from "./services/generateEmail";

function App() {
  // Grab the content created from UI
  const [elements, setElements] = useState<Array<Element>>([]);
  const [contentHref, setContentHref] = useState<HTMLElement | null>(null);

  let newElement: Element = {
    id: Math.random() * 1000000,
    name: "input",
    element: <input type="text" />,
  };

  const build = async () => {
    //insert the contet from UI in generate function
    let content = document.getElementById("content");

    let page = await generate(content);
    // generate function returns the full document with all the content

    setContentHref(page.documentElement);
    // set href to download the html file

    //DONE!
  };

  return (
    <div className="App">
      <h1>Hello newsletter builder!</h1>

      <button onClick={build}>Prepare!</button>

      <a
        download="export.html"
        target="_blank"
        href={`data:text/html, ${contentHref?.innerHTML}`}
        id="buildBtn"
        rel="noreferrer"
      >
        Build
      </a>

      <div id="content">
        <h2>Testing!</h2>
      </div>
    </div>
  );
}

export default App;
