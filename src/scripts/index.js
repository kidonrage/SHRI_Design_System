const {insertImages} = require('../base.blocks/content/image/images');
const {addClickListeners} = require('./events');

window.addEventListener('DOMContentLoaded', function() {
  insertImages();
  addClickListeners();
});