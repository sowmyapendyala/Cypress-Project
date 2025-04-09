export function login(userName, password) {

  // Visit the login page 
  cy.visit('/')

  // Enter Username and Password
  cy.get('[data-test="username"]').type(userName);
  cy.get('[data-test="password"]').type(password);

  // Submit the login form
  cy.get('[data-test="login-button"]').click();
}