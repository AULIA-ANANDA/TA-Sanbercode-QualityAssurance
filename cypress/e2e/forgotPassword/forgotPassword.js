import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";
import forgotPasswordPage from "../../pom/forgotPassword.js";

Given('I Visit URL', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/requestPasswordResetCode');
    cy.wait(10000);
});
When('I should see Homepage Reset Password', () => {
    forgotPasswordPage.verifyForgotPasswordPage().should('have.text','Reset Password');
});
When('I Input Username', () => {
    forgotPasswordPage.inputUsername().type('name');
});
When('I Input The Second Username', () => {
    forgotPasswordPage.inputUsername().should('be.empty');
});
When('I Input The Third Username', () => {
    forgotPasswordPage.inputUsername('[name="username"]').type('Admin{enter}');
});
Then('I Verify Required Message', () => {
    forgotPasswordPage.requiredMessage().should('contain','Required');
});
Then('I Click Button Reset Password', () => {
    cy.intercept('GET','**/messages').as('messages');
    forgotPasswordPage.buttonReset().click();
    cy.wait('@messages');
});
Then('I Click The Second Button Reset Password', () => {
    forgotPasswordPage.buttonReset().click();
});
Then('I Click Button Cancel', () => {
    forgotPasswordPage.buttonCancel().click();
});
Then('I Verify Reset Password link sent successfully', () => {
    forgotPasswordPage.verifyResetSuccessfully().should('have.text','Reset Password link sent successfully');
});
Then('I Verify Login Homepage', () => {
    forgotPasswordPage.verifyLoginPage().should('have.text','Login');
});