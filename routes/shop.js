const path = require('path');

const express = require('express');

const rootDir = require('../util/path');
const adminData = require('./admin')

const router = express.Router();

router.get('/', (req, res, next) => {
  const products = adminData.products;
  console.log(products);
  // below, the response is to send the html file
  // res.sendFile(path.join(rootDir, 'views', 'shop.html'));

  // .render() built in expressJS and uses default template engine, where default is set in app.js i.e. app.set('view engine', 'pug');
  // when we set this default, we set all views html will be in views folder so we don't have to construct path to this and just
  // reference to pug file i.e. shop.pug, but don't need to include extension
  // also allows us to pass in data as an argument that should be added into view to make the page dynamic
  // data needs to be passed through an object that can hold multiple values and will be passed to pug file
  // this render method by passing in data through an object is the same FOR ALL TEMPLATE ENGINES
  // hasProducts is for handlebars template
  res.render('shop', {prods: products, pageTitle: 'Shop', path: '/', hasProducts: products.length > 0});
});

module.exports = router;
