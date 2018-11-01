$(document).ready(function() {
  $('#submit').on('click', function () {
    const nameInput = ('#name');
    const emailInput = ('#email');
    const phoneInput = ('#phone');
    const messageInput = ('#message');

    const required = [
      nameInput,
      emailInput,
      phoneInput,
    ];

    for (let i = 0; i < required.length; i++) {
      const currentInput = $(required[i]);

      if (currentInput[0].value === '') {
          $('#message')
            .text('Please fill out required fields')
            .addClass('warning');

          currentInput
            .prev('label')
            .addClass('warning');
      } else {
        currentInput
          .prev('label')
          .removeClass('warning');
      }
    }

    const anyLabelHasWarning = $('label').hasClass('warning');

    if (!anyLabelHasWarning) {
      $('form').remove();
      $('#pre-form h2').text('Thank you for your feedback!');
    }
  })
});
