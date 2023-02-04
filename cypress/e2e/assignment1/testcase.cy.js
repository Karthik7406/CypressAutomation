/// <reference types="cypress" />

describe("GoodReads TestCase", () => {

    //created a useraccount for logging in to the goodreads service.

    let useremail = "yalohiy139@ekcsoft.com";
    let userpassword = "yalohiy139";

    //book to search
    let booktoSearch = "Think Like a Monk";

    let bookremoved;

    //initially visit the website goodreads.com
    before(() => {
        cy.visit("https://www.goodreads.com");
        
    })

    it("Login to the goodreads website", () => {

        //call the LoginUser function we have created in the support/commands with the username and password
        cy.log("Log in the user")
        cy.LoginUser(useremail, userpassword);

        //user is logged in

        //search for a book
        cy.log("Serching for a book and marking it as want to read");
        cy.get(".searchBox__input--navbar").type(booktoSearch + '{enter}');
        cy.wait(1000);
        

        //click on the first result element from the DOM
        cy.get(":nth-child(1)>[width='100%']>a").click();
        //page load events, so we are adding a delay
        cy.wait(1000);

        
        //click on want to read, so the book is added to the booklist
        cy.contains('Got it').click();
        cy.contains("Want to read").click();
        
        //page load events, so we are adding a delay
        cy.wait(2000);

        cy.log("Removing the book from the shelf");
        //in the view of the cypress running the testcase, the top navbar appearing only if we are scrolling to the top
        cy.scrollTo('top');
        cy.contains("My Books").click();
        
        //click on the delete icon to delete the book.

        //we will get an alert, Cypress handles alerts automatically, by default it accepts the alerts.
        cy.get(".deleteLink").click().then(() => {
            cy.get(".noticeBox>div").then(($bookRemovedMessage) => {
                
                //get the message that book is removed from the shelf
                bookremoved = $bookRemovedMessage.text();
                cy.log("Book is removed", bookremoved);

                //assert the error to verify.
                expect(bookremoved).to.match(/^[^(was removed from your books)]/);
            })
            
        })

        cy.log("Logging out of the user");
        cy.LogOutUser();
    })
    
    

})