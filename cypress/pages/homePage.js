export class homePage{


    weblocators = {

        search_input:'.form-control.input-lg',
        click_search: '.btn.btn-default.btn-lg',
        product:'img[title="MacBook"]',
      //  productOne:'img[title="iPhone"]',
        addtocart:'Add to Cart',
        successMessage:'div.alert.alert-success.alert-dismissible'

    }

    searchProduct(productName){
        cy.get(this.weblocators.search_input).type(productName)
        cy.get(this.weblocators.click_search).click()

    }
    clearSearchProduct(){
        cy.get(this.weblocators.search_input).clear()  
    }
    addToCart(){
        cy.contains(this.weblocators.addtocart).first().click()  
    }

    verifySuccessMessage(){
        return cy.get(this.weblocators.successMessage)
    }
    
}