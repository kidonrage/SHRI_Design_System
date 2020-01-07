const {insertImages} = require('./images');
const {addClickListeners} = require('./events');

window.addEventListener('DOMContentLoaded', function() {
  insertImages();
  addClickListeners();
});