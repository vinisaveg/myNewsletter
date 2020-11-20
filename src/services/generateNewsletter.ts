const htmlFile = "http://localhost:3000/newsletter.html";

// Function will receive a content
export const generateNewsletter = (content: string): Promise<Document> => {
  return new Promise((resolve, reject) => {
    fetch(htmlFile)
      .then((response) => response.text())
      .then((response) => {
        let parser = new DOMParser();

        //parse text response to Document DOM Object>
        let newsletter = parser.parseFromString(response, "text/html");

        //create a div to insert the content from ui
        let body = document.createElement("div");

        //insert the content from ui
        body.innerHTML = content;

        //checks content and append into the documment inside #newsletter div
        if (content) {
          newsletter.getElementById("newsletter")?.appendChild(body);

          // return the document with the new content appended
          resolve(newsletter);
        }

        reject();
      })
      .catch((error) => console.log(error));
  });
};
