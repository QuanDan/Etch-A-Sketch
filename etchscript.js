$(document).ready(function(){
  drawgrid(16);
});

function drawgrid(numsquares){
  var squaresize = $('.container').width() / numsquares;
  squaresize = squaresize.toPrecision(1);

  for(var i = 0; i < numsquares * numsquares; i++){
    var $box = $('<div class="square"></div>');
    $('.container').append($box);
  }

  $('.square').css("width", squaresize);
  $('.square').css("height", squaresize);

  $('.square').mouseenter(function(){
    $(this).css("background-color", "#C63D0F");
  });
}

function newgrid(){
  var newsize = prompt("Please enter a size from 1 to 128");
  $('.square').remove();
  drawgrid(newsize);
}

function cleargrid(){
  $('.square').css("background-color", "#3B3738");
}