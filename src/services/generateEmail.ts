const htmlFile = "http://localhost:3000/newsletter.html";

// Function will receive a content
export const generate = (content: HTMLElement | null): Promise<Document> => {
  return new Promise((resolve, reject) => {
    fetch(htmlFile)
      .then((response) => response.text())
      .then((response) => {
        let parser = new DOMParser();

        let newsletter = parser.parseFromString(response, "text/html");

        //Append content received into the documment
        if (content) {
          newsletter.getElementById("newsletter")?.appendChild(content);

          resolve(newsletter);
          // return the document with the new content appended
        }

        reject();
      })
      .catch((error) => console.log(error));
  });
};
