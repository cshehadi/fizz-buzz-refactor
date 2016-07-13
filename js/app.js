'use strict';

function fizzOrBuzz(i) {

    var out = '';

    if (i % 3 == 0 || i % 5 == 0) {
        if (i % 3 == 0) {
            out += 'fizz ';
        }

        if (i % 5 == 0) {
            out += 'buzz ';
        } 
    } else {
        out = i;
    }
    return out;
}

function runfizzBuzz(upper_bound) {
    var terminal = $('.terminal');

    // clear the terminal, in case the user is doing this again
    terminal.html('');

    // if we can't parse this number, or if it's not an integer, output an error
    if (isNaN(upper_bound)) {
        terminal.append('<div class="error">Sorry, numbers only, please. Try again?</div>');
    } else {
        // Instructions say to use + operator, as in: +upper_bound
        // but parseInt has already converted to number, so it's not necessary
        for (var i = 1; i <= upper_bound; i++) {
            terminal.append('<p>'+fizzOrBuzz(i)+'</p>');
        }
    }
    terminal.show();
}

$(document).ready(function() {
  
  $('form').submit(function() {
      var upper_bound = $(this).find('input[name="upper_bound"]').val();
      runfizzBuzz(parseInt(upper_bound));
      return false;
  });

});