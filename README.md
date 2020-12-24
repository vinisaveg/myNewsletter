# myNewsletter

This project was built to help devs and non-devs create awesome newsletters.
 
![GitHub package.json version](https://img.shields.io/github/package-json/v/vinisaveg/myNewsletter?color=%23f5476a)

## Current state :calendar:

The app is in it's first version. There is still improvements to be released.

## Installing :construction:

To run this application you will need [Node.js](https://nodejs.org/en/) installed.

Download / Clone this repository:

```

    git clone https://github.com/vinisaveg/myNewsletter.git

```

Install all packages:

```

    yarn install 

```

To start the app run the following command:

```

    yarn start 

```

The app should be running on http://localhost:3000 :bird:

## How it works :grey_question:

The app is designed in a way that allows you to create your newsletter by only filling the needed input fields. You can choose a Pre Created Layout to insert into the Current Empty Newsletter, which will show a preview right bellow the inputs form. Once you are satisfied with your brand new newsletter, just hit the Build button and it will be downloaded. 

The only deal is that, you will need to create a layout as a Component, and add it to a layout data file, so you can later on, add that personalized component to the newsletter document. It will need a few configuration, but once you have it, you will be able to create lots of newsletters based on your layout components.

## Usage (non-devs) :notebook:

Once the app is running properly, you can save your initial information, which is:

- Title: your newsletter title
- Snippet: your newsletter snippet message
- Image Folder Path: the folder path where your images will sit

During the creation, all the images displayed in the components preview "can" be from the web, as mockups. The mockup images will be replaced when you finish and build.

With the initial information saved, you can start adding the layout components to the body of the newsletter.

Select a layout, and fill it with the needed data.

Then add it to the body, which will be shown inside the preview.

If you are happy with the results, hit Build and open the downloaded file. :smile:

## Creating layout components (devs) :wrench:

Inside the _layouts_ folder, you can start creating your custom layout component. You may see the Hero, and the Button layout I created as example.

To be able to use the component, you will need to add it to the _layouts.ts_ file, inside the _data_ folder. There is where every component will need to be, so you can use it inside your newsletter.

It will have a name, that will be passed to the _LayoutSelection_, all the fields needed to it work properly - based on the Component -, and also the Component itself, as a function that receives it's props as params.

Create a component as you like

```TSX

  interface CustomComponentProps {
  copy: string;
  subCopy: string;
}

const CustomComponent: FunctionComponent<CustomComponentProps> = ({ copy, subCopy }) => {
  return (
    <div className="CustomComponent">
     
      <p className="customComponent-copy">{copy}</p>

      <p className="customComponent-sub-copy">{subCopy}</p>
      
    </div>
  );
};

export default CustomComponent;

```

Add your custom component layout to the _data_ file

```Typescript

    const data: Array<Layout> = [
      {
        name: "customComponentName",
        fields: {
          copy: "",
          subCopy: "",
        },
        element: (props: any) => <CustomComponent {...props} />,
      },
    ];

    export default data;

```

Also insert it to the _LayoutSelection_, so you can have it on the app.

```TSX

    <Option value="customComponentName">customComponentName</Option>


```

You can also import fonts, insert css files or change the base HTML, that sits inside the _public_ folder.

Inside the services folder, we have three files:

- handleImagePaths: Will replace the images src to the one given in the input field.
- generateNewsletter: Receives the newsletter content as a String and returns a Document.
- buildAndShip: Creates a blob with the newsletter Document and fires a download action.

## Contributing :+1:

This app is and will always be open to the community. Feel free to send any suggestion, feature, bug fixes or anything to help it's development. I' be pleased to read, and merge your PR.

## Issues :beetle:

If you have noticed any bug, or failure, please report it. I will be happy to help :smile:
