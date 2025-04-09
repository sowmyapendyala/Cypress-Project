Prerequisites
----------------------------------------------------------------------------
Make sure you have the following installed on your machine:

Node.js (>=12.x): You can download it from https://nodejs.org/en
npm (comes with Node.js) or Yarn for managing dependencies.
To check if these are installed, run
node -v
npm -v

Install cypress with the below command
npm install cypress

Extract the project folder and place them in the desired folder

Project Structure 
------------------------------------------------------------------------------
cypress-project/
│
├── cypress/
│   ├── downloads/      	    
│   ├── e2e/				  #Contains spec files required to run the the tests
|   ├── fixtures/    		         		 
│   └── support/PageObjects   #Contains the corresponding web page elements
├── cypress.json              #Contains required configuration
├── package.json              #Contains the dependencies 
└── README.md    

Run the tests
-------------------------------------------------------------------------------
npx cypress run - command to run the tests 

