$(document).ready(function(){
  drawgrid(16);
});

function drawgrid(numsquares){
  var squaresize = $('.container').width() / numsquares;
  /*squaresize = squaresize.toFixed(0);*/
  squaresize = Math.floor(squaresize);
  $('.container').width(squaresize*numsquares);
  $('.container').height(squaresize*numsquares);

  for(var i = 0; i < numsquares * numsquares; i++){
    var $box = $('<div class="square"></div>');
    $('.container').append($box);
  }

  $('.square').css("width", squaresize + 1);
  $('.square').css("height", squaresize + 1);

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