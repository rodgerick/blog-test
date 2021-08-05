module.exports = function () {
  var faker = require('faker')
  var _ = require('lodash')
  
  return {
    blogs: _.times( 50, function (n) {
      return {
        id: n,
        title: faker.commerce.productName(),
        body: faker.lorem.paragraphs(),
        author: faker.name.findName(),
        image: faker.image.abstract(),
      }
    })
  }
}