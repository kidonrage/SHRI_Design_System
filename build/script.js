let accordions = document.querySelectorAll('.e-accordion')

accordions.forEach(function(accordion) {
  accordion.classList.add('e-accordion_visibility_hidden');

  const short = accordion.querySelector('.e-accordion__short');
  short.addEventListener('click', function() {
    accordion.classList.toggle("e-accordion_visibility_hidden");
    accordion.classList.toggle("e-accordion_visibility_visible");
  }, false);
});



let onoffswitch = document.querySelector('.onoffswitch');

onoffswitch.addEventListener('click', function() {
  let theme = document.querySelector('.theme');

  theme.classList.toggle("theme_color_project-default");
  theme.classList.toggle("theme_color_project-inverse");

  onoffswitch.classList.toggle('onoffswitch_checked')
});