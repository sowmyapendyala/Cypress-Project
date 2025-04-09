import { product } from "./productDetails";
export function addToCart() {
    const backpackDetails = product(); // Get product details

   
     // Validate the item details in the cart
     cy.get('.cart_item') // Get the cart items list
     .should('contain', 'Sauce Labs Backpack') // Ensure the backpack is in the cart
     .then(($cartItem) => {
         // Find the item name, description, and price in the cart
         const cartItemName = $cartItem.find('.inventory_item_name').text().trim();
         const cartItemDesc = $cartItem.find('.inventory_item_desc').text().trim();
         const cartItemPrice = $cartItem.find('.inventory_item_price').text().trim();

         
            // Assertions to validate item details
            expect(cartItemName).to.equal(backpackDetails.name);
            expect(cartItemDesc).to.equal(backpackDetails.desc);
            expect(cartItemPrice).to.equal(backpackDetails.price);
        });
}