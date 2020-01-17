$(function(){

  // Intialize
  $('.menu>li').has('.menu-child').append('<span class="dropButton"></span>');

  // Toggle navButton
  $(".navButton").click( function(){

    if( $(this).hasClass('isOpen')) {

      $('.navButton').removeClass('isOpen');
      $('.overlay').removeClass('isOpen');
      $(".menu").removeClass('isOpen');

    } else {

      $('.navButton').addClass('isOpen');
      $('.overlay').addClass('isOpen');
      $(".menu").addClass('isOpen');

    }

  });

  // Overlay
  $(".overlay").click( function(){

    if( $(this).hasClass('isOpen')) {

      $('.navButton').removeClass('isOpen');
      $('.overlay').removeClass('isOpen');
      $(".menu").removeClass('isOpen');

    }

  });


  // Toggle dropButton
  $(".dropButton").click( function() {

    if( $(this).hasClass('isOpen')) {

      $(this).removeClass('isOpen');
      $(this).prev(".menu-child").slideUp(500);

    } else {

      $(this).addClass('isOpen');
      $(this).prev(".menu-child").slideDown(500);

      $(".dropButton").not(this).removeClass('isOpen');
      $(".dropButton").not(this).prev(".menu-child").slideUp(500);

    }

  });

});
