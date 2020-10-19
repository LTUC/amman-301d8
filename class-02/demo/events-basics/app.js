'use strict';

// $('button').click(function(){
//   $('ul').toggle();
// });

// $('li').click(function(){
//   console.log(this);
//   $(this).hide();
// });


$('document').ready( function() {
  $('button').on('click', function() {
    // Why are we using siblings instead of just targeting 'ul'
    $('ul').toggleClass('on');
  });

  $('li').on('click',function() {
    $(this).fadeOut(400);
    // Would this work? Why?/Why Not?
    // console.log(this.text());
  });
});

