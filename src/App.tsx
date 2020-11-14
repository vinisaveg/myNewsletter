import React, { useState } from "react";
import "./App.css";

import { Element } from "./interfaces/Element";
import { generate } from "./services/generateEmail";

function App() {
  // Gather the content created from UI
  const [elements, setElements] = useState<Array<Element>>([]);
  const [contentHref, setContentHref] = useState<HTMLElement | null>(null);

  let newElement: Element = {
    id: Math.random() * 1000000,
    name: "input",
    element: (
      <img
        className="image"
        alt="test"
        src="https://images.pexels.com/photos/4969889/pexels-photo-4969889.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      />
    ),
  };

  const addElements = () => {
    setElements([...elements, newElement]);
  };

  const build = async () => {
    //get inserted  content from UI
    let content = document.querySelector("#content")?.innerHTML;

    if (content) {
      //send content fetched from ui
      let page = await generate(content);
      // generate function returns the full document with all the content

      // set href to download the html file
      setContentHref(page.documentElement);
    }

    //DONE!
  };

  return (
    <div className="App">
      <h1>Hello newsletter builder!</h1>

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
        Build
      </a>

      <div id="content">
        <h2>Testing!</h2>

        {elements.map((element) => (
          <div key={element.id}>{element.element}</div>
        ))}
      </div>
    </div>
  );
}

export default App;
