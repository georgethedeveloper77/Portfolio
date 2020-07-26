
$(document).ready(function(){
  $('a').click(function(){
    //alert("i am click");
    var selected = $(this);
    $('a').removeClass('.active');
    $(selected).addClass('active');
  });

  var $a = $('.a'),
  $b = $('-b'),
  $c = $('-c'),
  $d = $('-d'),
  $e = $('-e'),
  $home = $('.home'),
  $aboutus = $('.aboutus')

  $a.click(function(){
    $home.fadeIn();
    $aboutus.fadeOut()
  });
  $b.click(function(){
    $home.fadeIn();
    $aboutus.fadeOut();
  });

});

