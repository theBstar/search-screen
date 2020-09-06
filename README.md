This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
This project supports all of the CRA commands, some of those mentioned at bottom.


## About the Project:
  * Task was to develop an application where user can search for a doctor. [here are the designs](https://app.zeplin.io/project/5f50b4ed6c18ba4af8db5dac/screen/5f50b501d1d57c88310e8941)
  * The API doesn't provide any avatar, so I am showing a placeholder, also I am mocking out the user-name on the front-end.
  * All the common reusable components are in components folder
  * styles folder includes general theme, reset and some global settings. I thought of structuring css with BEM but It would have been more work for me. I went ahead with a hybrid of BEM, SMACSS and atomic architecture.
  * Debounced search field input, otherwise we would end up hitting our server too many times wihtout any benifit to the user.
  * Building it with any design system would have been a lot easier, Material-ui is very close to the design.
  * Tried to replicate the design, focused on the re-usability and extensibility. 
  * Spent around 7-8 hours time, some of it went into css re-structuring.
  * I would really appreciate any feedback.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

