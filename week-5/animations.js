$(document).ready(function () {
  const fadeInBtn = $('#fadeIn');
  console.log(fadeInBtn);

  $('#fadeIn').on('click', function() {
    $('.card').fadeIn();
  });

  $('#fadeOut').on('click', function() {
    $('.card').fadeOut();
  });

  $('#slideUp').on('click', function() {
    $('.card').slideUp();
  })

  $('#slideDown').on('click', function() {
    $('.card').slideDown();
  });

  $('#animate').on('click', function() {
    $('.card').animate(
      { opacity: 0.25 },
      300,
      function() {
        console.log("custom animation is done!" );
      }
    );
  });

  $.fn.opacify = function () {
    this.animate(
      { opacity: 1 },
      300,
      function() {
        console.log('opacify plugin is done!');
      }
    )
  }

  $('#plugin').on('click', function() {
    $('.card').opacify();
  })
});
