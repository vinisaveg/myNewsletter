import { useState } from "react";
import { Element } from "../interfaces/Element";

const Builder = () => {
  const [elements, setElements] = useState<Array<Element>>([]);

  let newElement: Element = {
    id: Math.random() * 1000000,
    name: "input",
    element: <input type="text" />,
  };

  const addElement = () => {
    setElements([...elements, newElement]);

    console.log(elements);
  };

  const showPage = () => {
    let page = document.getElementById("__next");

    console.log(page);
  };

  return (
    <table>
      <tbody>
        <tr>
          <td>
            <p onClick={showPage}>Builder</p>
            <p onClick={addElement}>Add elements</p>

            {elements.map((element) => (
              <div key={element.id}>{element.element}</div>
            ))}
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Builder;
