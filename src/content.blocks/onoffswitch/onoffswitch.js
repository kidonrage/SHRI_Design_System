let onoffswitch = document.querySelector('.onoffswitch');

onoffswitch.addEventListener('click', function() {
  let theme = document.querySelector('.theme');

  theme.classList.toggle("theme_color_project-default");
  theme.classList.toggle("theme_color_project-inverse");

  onoffswitch.classList.toggle('onoffswitch_checked')
});