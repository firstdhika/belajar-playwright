class CartPage {
  constructor(page) {
    this.page = page;
    this.addToCartBtn = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
    this.cartIcon = page.locator('.shopping_cart_link');
    this.checkoutBtn = page.locator('[data-test="checkout"]');
    this.firstNameInput = page.locator('[data-test="firstName"]');
    this.lastNameInput = page.locator('[data-test="lastName"]');
    this.postalCodeInput = page.locator('[data-test="postalCode"]');
    this.continueBtn = page.locator('[data-test="continue"]');
    this.finishBtn = page.locator('[data-test="finish"]');
    this.successMessage = page.locator('.complete-header');
  }

  async addToCart() {
    await this.addToCartBtn.click();
  }

  async goToCart() {
    await this.cartIcon.click();
  }

  async checkout(firstName, lastName, postalCode) {
    await this.checkoutBtn.click();
    await this.firstNameInput.fill(firstName);
    await this.lastNameInput.fill(lastName);
    await this.postalCodeInput.fill(postalCode);
    await this.continueBtn.click();
    await this.finishBtn.click();
  }
}

module.exports = { CartPage };