const testData = {
  validUser: {
    username: 'standard_user',
    password: 'secret_sauce'
  },
  lockedUser: {
    username: 'locked_out_user',
    password: 'secret_sauce'
  },
  checkoutInfo: {
    firstName: 'Andhika',
    lastName: 'QA',
    postalCode: '12345'
  },
  products: {
    backpack: 'add-to-cart-sauce-labs-backpack',
    bikeLight: 'add-to-cart-sauce-labs-bike-light',
    tShirt: 'add-to-cart-sauce-labs-bolt-t-shirt'
  }
};

module.exports = { testData };