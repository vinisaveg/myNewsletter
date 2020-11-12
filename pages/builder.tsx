import { useRef, useState } from "react"
import { Element } from "../interfaces/Element"

const Builder = () => {
  const [elements, setElements] = useState<Array<Element>>([])
  const [href, setHref] = useState<HTMLElement | null>(null)

  let newElement: Element = {
    id: Math.random() * 1000000,
    name: "input",
    element: <input type="text" />,
  }

  const addElement = () => {
    setElements([...elements, newElement])

    let page = document.getElementById("__next")

    setHref(page)

    console.log(elements)
  }

  return (
    <table>
      <tbody>
        <tr>
          <td>
            <p>Builder</p>
            <p onClick={addElement}>Add elements</p>

            {elements.map((element) => (
              <div key={element.id}>{element.element}</div>
            ))}

            <br />

            <a download="export.html" target="_blank" href={`data:text/html, ${href?.innerHTML}`} id="buildBtn">
              Build
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  )
}

export default Builder
