window.addEventListener('DOMContentLoaded', function() {

  document.body.addEventListener('click', function(e) {
    let onoffswitch = event.target.closest('.onoffswitch');
    if (onoffswitch) {
      let theme = document.querySelector('.theme');
      theme.classList.toggle("theme_color_project-default");
      theme.classList.toggle("theme_color_project-inverse");

      onoffswitch.classList.toggle('onoffswitch_checked')

      return;
    }

    let accordionToggle = event.target.closest('.e-accordion__short');
    if (accordionToggle) {
      let accordion = accordionToggle.closest('.e-accordion');

      accordion.classList.toggle("e-accordion__expanded");

      return;
    }
  });

});