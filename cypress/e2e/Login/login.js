import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";
import loginPage from "../../pom/login.js";

Given('I Visit URL', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    cy.wait(10000);
});
When('I should see Homepage', () => {
    loginPage.verifyLoginPage().should('have.text','Login');
});
When('I Submit Username', () => {
    loginPage.inputUsername().type('Admin');
});
When('I Submit the Second Username', () => {
    loginPage.inputUsername().type('Admin@*_');
});
When('I Submit the Third Username', () => {
    loginPage.inputUsername().should('be.empty');
});
When('I Submit the Fourth Username', () => {
    loginPage.inputUsername('[name="username"]').type('Admin{enter}');
});
When('I Submit Password', () => {
    loginPage.inputPassword().type('admin123');
});
When('I Submit the Second Password', () => {
    loginPage.inputPassword().type('Admin123');
});
When('I Submit the Third Password', () => {
    loginPage.inputPassword().type('admin123444');
});
When('I Submit the Fourth Password', () => {
    loginPage.inputPassword().type('admin123@@@');
});
When('I Submit the Fifth Password', () => {
    loginPage.inputPassword().should('be.empty');
});
When('I Submit the Sixth Password', () => {
    loginPage.inputPassword('[name="password"]').type('admin123{enter}');
});
Then('I Click Button Login', () => {
    cy.intercept('GET','**/action-summary').as('action');
    loginPage.buttonSubmit().click();
    cy.wait('@action');
});
Then('I Click the Third Button Login', () => {
    cy.intercept('GET','**/action-summary').as('action');
    cy.wait('@action');
});
Then('I Click the Second Button Login', () => {
    loginPage.buttonSubmit().click();
});
Then('I Verify Invalid Credentials', () => {
    loginPage.invalidCredentials().should('have.text','Invalid credentials');
});
Then('I Verify Required Message', () => {
    loginPage.requiredMessage().should('contain','Required');
});
Then('I Verify Login Success', () => {
    loginPage.dashboardPage().should('have.text','Dashboard');
});



When('I Should See Forgot Password', () => {
    loginPage.forgotPassword().should('be.visible');
});
Then('I Click Forgot Password', () => {
    loginPage.forgotPassword().click();
});
Then('I Verify Dashboard Reset Password', () => {
    cy.url().should('include','https://opensource-demo.orangehrmlive.com/web/index.php/auth/requestPasswordResetCode');
    loginPage.dashboardForgotPassword().should('have.text','Reset Password');
});