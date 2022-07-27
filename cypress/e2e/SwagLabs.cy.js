describe('SauceDemo',() => {

    it('navigates', () => {
        
        cy.visit('https://www.saucedemo.com/')
        var started = new Date();
        started =  started.getMilliseconds();

        cy.get('[id="user-name"]').type('standard_user')
        cy.get('[id="password"]').type('secret_sauce')
        cy.get('[id="login-button"]').click()
        cy.get('[class="product_sort_container"]').select('lohi')
        cy.get('[id="item_2_img_link"]').click()
        cy.get('[id="add-to-cart-sauce-labs-onesie"]').click()
        cy.get('[id="back-to-products"]').click()
        cy.get('[class="product_sort_container"]').select('lohi')
        cy.get('[id="add-to-cart-sauce-labs-bike-light"]').click()
        cy.get('[id="shopping_cart_container"]').click()
        cy.get('[id="checkout"]').click()
        cy.get('[id="first-name"]').type('João')
        cy.get('[id="last-name"]').type('Loureiro')
        cy.get('[id="postal-code"]').type('1000-279')
        cy.get('[id="continue"]').click()
        cy.get('[id="finish"]').click()
        var finished = new Date();
        finished =  finished.getMilliseconds();
        cy.log(`Page load took ${finished-started} milliseconds.`)
    })
})
