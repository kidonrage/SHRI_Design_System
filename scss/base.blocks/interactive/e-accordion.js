let accordions = document.querySelectorAll('.e-accordion .e-accordion__short')

accordions.forEach(function(accordion) {
  accordion.addEventListener('click', function() {
    // document.querySelector('.popup').classList.toggle('popup_visible');
    alert('HELLO');
  }, false);
});
