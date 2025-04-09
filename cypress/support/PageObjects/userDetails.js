export function userdetails(firstname, lastname, zipcode) {

    // Enter user details
    cy.get('[data-test="firstName"]').type(firstname);
    cy.get('[data-test="lastName"]').type(lastname);
    cy.get('[data-test="postalCode"]').type(zipcode);

    // Click on continue
    cy.get('[data-test="continue"]').click();
}