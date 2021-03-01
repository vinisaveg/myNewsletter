import FileSaver from "file-saver";

/**
 * Create a blob with the Page Document and download the file as [title].html
 *
 * @param {Document} page The HTML Page
 */
export const buildAndShip = (page: Document) => {
  // Create a blob with the Page Content
  var blob = new Blob([page.documentElement.innerHTML], {
    type: "text/html;charset=utf-8",
  });

  // Save and download the file
  FileSaver.saveAs(blob, `${page.title}.html`);
};
