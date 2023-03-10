# General Notes

- developed with React and pulls from Rapid API youtube apis
- uses advanced react folder structure and concepts
- deployed on netlify here <https://tourmaline-faun-ced3ad.netlify.app/>

## Steps and tips

- uses create react app
- copy dependencies and paste (react, mui, mui icons, react dom, react router dom, react player etc )
- npm install --legacy-peer-deps
- delete the whole src folder and start a new one
- in src add index.js (imports react and react-dom)
- new App.js file, has the root element and renders
- ES7+ React Native extensions
- in index.html, delete comments stuff
- install links in head section for icons and font
- new index.css - need these styles, import into index.js
- create structure of app in App.js 
- remember instant return () => () otherwise other return () => { return ()}
- in App.js - BrowserRouter, Routes, Route (with paths, elements). Including Navbar
- make components folder - components
- make utils folder - api logic, in constants.js with some data constants, caegories, channels , icons, links etc.
- need intellisense extension
- rafce as snippet
- in component start the component files .jsx
- add the components to an index.js file in components - `export {default as Component} from "./Component"` this way they can be imported from the './component' folder 
- can use the rapidapi extension in vscode to test api calls
- elements: Stack, Box, Card, CardMedia, CardContent, Link, ReactPlayer etc.
- for mui components, can give them `sx` properties sx = {{width: '20px', height: '20px'}}
- search box implemented with button functions onChange, onSubmit
- Good use of hooks - useState, useParams, useEffect
- destructuring of objects - multilevel/nested destructure is pretty cool
- implement load logic to wait for loading data

# Some color palettes for HO

- <https://palettes.shecodes.io/palettes/1475#palette>

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
