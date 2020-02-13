var colors = ["red", "blue", "green", "yellow"];

var userClickedPattern = [];

var gamePattern = [];

var starter = false;
var level = 0;


$(document).keypress(function(){

if  (!starter){

  $("#level-title").text("Level " + level);

  nextSequence();
  starter = true;}
});

$(".btn").click ( function(){
  var clickedButtonId = $(this).attr("id");
  userClickedPattern.push(clickedButtonId);

  playSound(clickedButtonId);
  animatePress(clickedButtonId);
  checkAnswer(userClickedPattern.length-1);
});

function checkAnswer(currentLevel){
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]){
    if (gamePattern.length === userClickedPattern.length){
      setTimeout(function(){
        nextSequence();
      }, 500);
    }
  }
  else
  var wrongSound = new Audio("sounds/wrong.mp3");
  wrongSound.play();

  $("body").addClass("game-over");

    setTimeout(function(){
      $("body").removeClass("game-over");
    }, 200);

    $("#level-title").text("Game over at level " + level + ". Press any key to restart").this.addClass("whenGameOver");
    startOver();
}

function startOver(){
  level = 0;
  gamePattern = [];
  starter = false;


}
function nextSequence(){

  userClickedPattern = [];

  level++;

  $("#level-title").text("Level " + level);

  var randomNumber = Math.floor(Math.random()*4);
  var randomChosenColors = colors[randomNumber];
  gamePattern.push(randomChosenColors);

  $("#" + randomChosenColors).fadeIn(100).fadeOut(100).fadeIn(100);

  playSound(randomChosenColors);

  };



function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}



function animatePress(currentColor){
  $("#" + currentColor).addClass("pressed");
  setTimeout(function(){
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}

//setTimeout(function(){ alert("Hello"); }, 3000);
