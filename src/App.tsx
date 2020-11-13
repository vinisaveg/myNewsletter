import React, { useEffect } from "react";
import "./App.css";

import { generate } from "./services/generateEmail";

function App() {
  // Grab the content created from UI

  const build = () => {
    //insert the contet from UI in generate function
    generate();
    // generate function returns the full document with all the content

    // download the html file
    //DONE!
  };

  return (
    <div className="App">
      <h1>Hello newsletter builder!</h1>

      <button onClick={build}>Build!</button>
    </div>
  );
}

export default App;
