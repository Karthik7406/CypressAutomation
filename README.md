*********************************************
ReadMe
**********************************************

****************** Installing Dependencies ************************

* To run the testcase, Please install nodejs javascript enviroment
* once the node is installed, run the command  -> $npm install
* this will install all the dependencies required for running the testcase

********* Suggestion -> Please use VSCode to run the testcase *******


**************** Running the testcase *************************
* we can run the testcase in 2 methods, in command prompt and in the cypress playground.

******************* Method 1 **************************
Running the test case with cypress runner

* open the terminal to the folder project is located.
* run the command -> $npx cypress open
* this will open the cypress runner
* choose E2E testing and select the browser in which the testcase required to run it can be chrome or edge 
* Click on start E2E testing in chrome/edge depending on the browser selected
* Our testcase is in the file testcase.cy.js available inside e2e/assignment folder, please click on it to run the testcase


********** Method 2 *********************************

Running the testcase in the command prompt/terminal.

* open the terminal to the folder where this project exists
* enter the command -> npx cypress run --spec 'cypress\e2e\assignment1\testcase.cy.js' --browser='chrome' --headed
* this will run the testcase in chrome browser and we will get the video of the test execution inside teh videos folder.


************************** Thank you ************************






