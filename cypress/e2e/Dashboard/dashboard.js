import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";
import halamanDashboard from "../../pom/dashboard.js";
import loginPage from "../../pom/login.js";

// Given('I Visit URL Halaman Dashboard', () => {
//     cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
//     cy.wait(10000);
// });
Given('I Visit URL Halaman Login', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    cy.wait(10000);
});
When('I should see Homepage', () => {
    loginPage.verifyLoginPage().should('have.text','Login');
});
When('I Submit Username', () => {
    loginPage.inputUsername().type('Admin');
});
When('I Submit Password', () => {
    loginPage.inputPassword().type('admin123');
});
Then('I Click Button Login', () => {
    cy.intercept('GET','**/action-summary').as('action');
    loginPage.buttonSubmit().click();
    cy.wait('@action');
});
Then('I Verify Login Success', () => {
    loginPage.dashboardPage().should('have.text','Dashboard');
});
Then('I Click Admin Page', () => {
    cy.intercept('GET','**/messages').as('messages');
    halamanDashboard.linkAdmin().click();
    cy.wait('@messages');
});
Then('I Verify Admin Page', () => {
    halamanDashboard.adminPage().should('have.text','Admin');
});

//TESTING BUTTON SEARCH
When('I Input Username in Search', () => {
    halamanDashboard.inputUsernameSearch().type('Admin');
});
When('I Select User Role Admin', () => {
    halamanDashboard.selectUserRoleAdmin();
});
When('I Select User Role ESS', () => {
    halamanDashboard.selectUserRoleESS();
});
When('I Select Status Enabled', () => {
    halamanDashboard.selectStatusEnabled();
});
When('I Select Status Disabled', () => {
    halamanDashboard.selectStatusDisabled();
});
Then('I Click Button Search', () => {
    halamanDashboard.buttonSearch().click();
});
Then ('I Verify Tabel Data', () => {
    halamanDashboard.dataAdmin().should('be.visible')
})