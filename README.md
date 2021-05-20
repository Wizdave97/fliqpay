# A simple Payment Flow  

Clone the repository 
Make sure you have Node.js installed on your local machine   
Run `yarn install` in the repository root  

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000/fliqpay](http://localhost:3000/fliqpay) to view it in the browser.

### `yarn test`

Launches the test runner in the interactive watch mode.\


### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.


## Assumptions

There was no checkout page in the designs so I took the liberty of adding one  
The Fixer API free tier which is used in the assessment only allows fetching  
rates for the Euro currency, hence the reason why the user  is limited to converting  
from Euro only.


## Issues

The free tier of the fixer API does not support https requests so it cannot be fetched on the deploy build  
as the deploy build is hosted on a https connection
 
To test the application completely, you'll need to run it locally




