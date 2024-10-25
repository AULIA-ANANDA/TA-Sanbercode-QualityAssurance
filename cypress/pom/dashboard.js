export default class halamanDashboard {
    static verifyDashboardPage() {
        return cy.get('h6').contains('Dashboard');
    }
    static verifyAdminPage() {
        return cy.get('h6').contains('Admin');
    }
    static linkAdmin() {
        return cy.get('[href="/web/index.php/admin/viewAdminModule"]');
    }
    static adminPage() {
        return cy.get('h6').contains('Admin');
    }

    //AUTOMATION TESTING DENGAN BUTTON SEARCH
    static inputUsernameSearch() {
        return cy.get('.oxd-input.oxd-input--active').eq(1);
    }
    static buttonSearch() {
        return cy.get('[type="submit"]');
    }
    static dataAdmin() {
        return cy.get('[role="table"]');
    }
    static selectUserRoleAdmin() {
        cy.get('[class="oxd-select-text-input"]').eq(0).click();
        cy.get(".oxd-select-dropdown").children().eq(1).click();
    }
    static selectUserRoleESS() {
        cy.get('[class="oxd-select-text-input"]').eq(0).click();
        cy.get(".oxd-select-dropdown").children().eq(2).click();
    }
    //SEARCH BY STATUS 
    static selectStatusEnabled() {
        cy.get('[class="oxd-select-text-input"]').eq(1).click();
        cy.get(".oxd-select-dropdown").children().eq(1).click();
    }
    static selectStatusDisabled() {
        cy.get('[class="oxd-select-text-input"]').eq(1).click();
        cy.get(".oxd-select-dropdown").children().eq(1).click();
    }
}