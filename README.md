## Simple React + Express boilerplate
Simple Full-Stack boilerplate based on the amazing [Create React App](https://github.com/facebook/create-react-app) project.

### The stack

* **Ejected Create React App.** Ejected for better integration of the front-end with the server side, specifically for a single Jest test suite that tests both the front-end and the back-end.
    * [Styled Components](https://www.npmjs.com/package/styled-components) for easier and more re-usable styling of the React components
    * [Axios](https://www.npmjs.com/package/axios) for simpler requests
* **Express Server.** 
    * [HelmetJS](https://github.com/helmetjs/helmet) added for basic security.
    * [body-parser](https://www.npmjs.com/package/body-parser) for easier access to the requests.
    * [Winston](https://www.npmjs.com/package/winston) for better logging. Logs are always written to the log files, and to the console in non-production environments
    * MongoDB ready
    
### Project setup and layout
* `config` - used for CRA's config files, with added `keys.js` and `keys` folder file for organising various secrets and keys across different environments (e.g. database connection strings, cookie-session tokens/hashes etc.). Create a `./config/keys/dev.js` (not included to git) file for local dev settings.
* `public` - part of the CRA, for putting public static assets along with the index.html file
* `scripts` - part of the CRA, scripts to start/build the project
* `server` - directory for all server (NodeJS) files. 
    * `__tests__` - all tests for the server
    * `controllers` - Express controllers, separate folder to keep things cleaner
    * `helpers` - various helper functions
    * `middlewares` - a directory for Express middlewares
    * `models` - Mongoose models
    * `routes` - Express routes
    * `services` - Express services, such as Passport.js
    * `app.js` - the Express app, in a separate file so that it's easier to test
    * `index.js` - the file to run to start the back-end
* `src` - directory for the React files
    * `__tests__` - tests for the React side
    * `api` - separate helpers for accessing the back-end. Separated to allow easier mocking onf requests for testing with Jest
    * `components` - For all your React components
    * `App.js` - the root component
    * `index.js` - the file to start them all
    * `setupTests.js` - a setup file for Jest to include [Enzyme](https://github.com/airbnb/enzyme) for testing purposes
* `.env` - add this file to add additional environment variables

### Testing setup and layout

The `npm test` or `yarn test` command executes the test suite for both the React side and the server side. Tests are executed with the help of [Jest](http://jestjs.io/). Jest runs tests on the following files and directories:
* Files in `src` and `server` and sub-folders that end with `test.js, spec.js, test.jsx, spec.jsx, test.mjs, spec.mjs`
* Files in any sub-folder of `src` or `server` with the folder name `__tests__` that have the `.js, .jsx or .mjs` extensions

#### Mocking the API for testing

Since we're testing the React side of the app separately from the server side, the API requests to the server side are mocked by Jest. To properly mock the requests a folder called `__mocks__` is placed in the same directory as the file that makes the request. Check `src/api` for an example.