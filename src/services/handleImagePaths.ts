import { Element } from "../interfaces/Element";

export const handleImagePaths = (
  page: Document,
  imageFolderPath: string,
  elements: Array<Element>
): Document => {
  //Update all images with the Image Folder Path
  page.querySelectorAll(".hero").forEach((child) => {
    let elementFound = elements.find(
      (element) => element.id === child.getElementsByTagName("img")[0].id
    );

    child.getElementsByTagName(
      "img"
    )[0].src = `./${imageFolderPath}/${elementFound?.imageName}`;

    //console.log(child.getElementsByTagName("img")[0]);
  });

  return page;
};
