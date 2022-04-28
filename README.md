README

This project is a test task.

Technologies used:
 - ReactJS v18
 - TypeScript v4.6.3
 - Redux v4.2.0
 - AntDesign


Technical requirement:
https://docs.google.com/document/d/1e8OCo1ou1gaHB1FhaLVWUj3hz62pfpQVS1ZQd1N8g-c/edit?usp=sharing


Model is taken from here. Is NOT supposed to be pixelperfect
https://www.figma.com/file/MeVCNf6MaxdCzdQjrdRXsk/FINANCE-LANDING-PAGE-UI-kit-(Community)?node-id=0%3A1


Expected behaviour:
 - In mobile resolution: 1 page containing 2 features
 - In tablet resolution & higher: 2 pages containing 1 component each
 - Supported currencies: UAH USD EUR. 
 - In RUR currency some undocumented behaviour possible. IS NOT A BUG
 - Converter component is supposed to show equivalent of base currency in another one. Request is entered in the text field. 
     - Request template:  
        ## "15 uah" in "usd"
        Text field is not case sensitive
     -  All spaces are mandatory
 - Currency rates component is supposed to show currency rates (in table) according to the selected currency (in dropdown)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
