# Topcoder UI Testing Lib

#### Software Required
Nodejs v8.11.4+
Chrome Browser

#### Installation:

- Install protractor
  `npm install -g protractor`
- Install Typescript
  `npm install -g typescript`
- Install dependencies
  `npm install`
- Test Library - runs tslint
  `npm test`
- Build Library 
  `npm run build`

- Install the Library locally to be used by your project
    Place the library folder on the same level as your project folder and run the following command in your project folder  
    `npm link ../topcoder-ui-testing-lib` or
    `npm install ../topcoder-ui-testing-lib`

- To publish library to npm
   `npm publish` 


#### Implementation Details:

- Page
    The base page that can be extended by all page objects. This page has elements and actions that are common to all pages.

- LoginPage
    This page object is defined for the login page and has the elements and actions in the login page. 

- LoginPageHelper
    The helper page has reusable login related functions.

Any further pages or helpers that are identified as common can be added to the library.

#### Configuration details:
- config.json holds the application level constants like urls, page titles etc.
- test data (username, password etc) will not be configured in the library. The application that uses the library will have the testing data configuration and will pass on the data to the library during runtime.            
