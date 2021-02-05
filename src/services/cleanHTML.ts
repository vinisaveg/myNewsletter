/**
 * Removes all unecessary components -> Buttons, Divs or Layers from the HTML
 *
 * @param {HTMLElement} html The HTML Div Element
 */

export const cleanHTML = (html: HTMLElement) => {
  //   Gather all Delete Buttons from the HTML Content
  const componentsToRemove = html.querySelectorAll("button.delete-component");

  //   Removes all Delete Buttons from the HTML Content
  componentsToRemove.forEach((component) => {
    component.remove();
  });
};
