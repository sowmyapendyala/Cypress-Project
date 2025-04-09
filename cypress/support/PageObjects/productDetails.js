export function product() {
    const backpackDetails = {};

    cy.get('[data-test="inventory-item"]') 
        .filter((index, item) => {
            return Cypress.$(item).find('.inventory_item_name').text().includes('Sauce Labs Backpack');
        })
        .then(($item) => {
            // Retrieve the details from the item 
            backpackDetails.name = $item.find('.inventory_item_name').text().trim();
            backpackDetails.desc = $item.find('.inventory_item_desc').text().trim();
            backpackDetails.price = $item.find('.inventory_item_price').text().trim();
        });

    return backpackDetails;
}
