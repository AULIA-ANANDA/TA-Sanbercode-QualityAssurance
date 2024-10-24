// import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";
// import loginPage from "../../pom/login.js";

// Given('I Visit URL', () => {
//     cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
//     cy.wait(10000);
// });
// When('I should see Homepage', () => {
//     loginPage.verifyLoginPage().should('have.text','Login');
// });
// When('I Submit Username', () => {
//     loginPage.inputUsername().type('Admin');
// });
// // When('I Submit Password', () => {
// //     loginPage.inputPassword().type('admin123');
// // });
// When('I Submit the Second Password', () => {
//     loginPage.inputPassword().type('Admin123');
// });
// // Then('I Click Button Login', () => {
// //     cy.intercept('GET','**/action-summary').as('action');
// //     loginPage.buttonSubmit().click();
// //     cy.wait('@action');
// // });
// Then('I Click the Second Button Login', () => {
//     loginPage.buttonSubmit().click();
// });
// Then('I Verify Invalid Credentials', () => {
//     loginPage.invalidCredentials().should('have.text','Invalid credentials');
// });
// // Then('I Verify Login Success', () => {
// //     loginPage.dashboardPage().should('have.text','Dashboard');
// // });