
//Here we are creating a function called LoginUser so that when we pass the useremail and userpassword, it gets logged it

function LoginUser(useremail, userpassword) {
     //click on the signin button
     cy.get("#signIn>div>div>a").click();

     //click on the button Sign in with email since we are signing with an email.
     cy.contains("Sign in with email").click();

     //enter the user email in the email input field
     cy.get("#ap_email").type(useremail);

     //enter the user password in the password input field
     cy.get("#ap_password").type(userpassword);

     //click on the submit button to log in
     cy.get("#signInSubmit").click();

     cy.wait(2000);
}

Cypress.Commands.add("LoginUser", LoginUser);


//function to logout the user.
function LogOutUser() {

    // click on the profile menu icon to get the signout button.
    cy.get("div.dropdown--profileMenu").click();

    //click on the signout button.
    cy.contains('Sign out').click();
}

Cypress.Commands.add("LogOutUser", LogOutUser);