import { homePage } from "../../pages/homePage";
const homePageObj= new homePage()
import testData from '../../fixtures/testData.json'

describe(' test automation',() =>{
 before(() =>{
    cy.login(testData.login.username,testData.login.password)

 })

 it('Add to Cart flow',() =>{
        homePageObj.searchProduct(testData.product.productName)
        homePageObj.addToCart()
        homePageObj.verifySuccessMessage().should('contain',testData.message.successMessage).and('contain',testData.product.productName);
        homePageObj.clearSearchProduct()
        homePageObj.searchProduct(testData.product.productNameOne)
        homePageObj.addToCart()
        homePageObj.verifySuccessMessage().should('contain',testData.message.successMessage1).and('contain',testData.product.productNameOne);

 })

}
    
    )