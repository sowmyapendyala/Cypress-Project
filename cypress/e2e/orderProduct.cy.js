import { login } from '../support/PageObjects/loginPage';
import { addToCart } from '../support/PageObjects/cartPage.js';
import { userdetails } from '../support/PageObjects/userDetails';


describe('Login and order a product', () => {
  beforeEach(() => {
    // Clear cookies and local storage before each test
    cy.clearCookies();
    cy.clearLocalStorage();
  });

  it('should log in successfully and place an order', () => {
    //login with valid credentials
    login('standard_user', 'secret_sauce');

    // Check if login is successful
    cy.url().should('include', '/inventory');
    cy.get('[data-test="title"]').should('contain', 'Products');
    cy.get('[data-test="inventory-container"]').should('exist');;

    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click(); // Click to add the product to the cart 
    cy.get('[data-test="shopping-cart-link"]').click(); // Navigate to the cart
 
    //Enter the user details
    cy.get('[data-test="checkout"]').click();
    userdetails('Sowmya', 'Pendyala', '12345');

       // Add product to cart and validate details
       addToCart();

    // Click on Finish
    cy.get('[data-test="finish"]').click();


  // Verify if order is placed successfully
  cy.contains('Thank you for your order!').should('exist');
});
});
