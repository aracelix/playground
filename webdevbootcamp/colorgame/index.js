var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init() {
  setupButtons();
  setupSquares();
  reset();
}

function setupButtons(){
  for(var i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener("click", function(){
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      this.classList.add("selected");
      this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
      reset();
    });
  }
}

function setupSquares(){
  for(var i = 0; i < squares.length; i++) {
    squares[i].addEventListener("click", function(){
      var clickedColor = this.style.backgroundColor;

      if(clickedColor === pickedColor) {
        messageDisplay.textContent = "Correct!";
        changeSquares(clickedColor);
        h1.style.backgroundColor = clickedColor;
        resetButton.textContent = "Play Again?"
      }
      else {
        this.style.backgroundColor = "#232323";
        messageDisplay.textContent = "Try Again";
      }
    });
  }
}

function reset(){
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  h1.style.backgroundColor = "steelblue";
  messageDisplay.textContent = "";
  resetButton.textContent = "New Colors";

  for(var i = 0; i < squares.length; i++) {
    if(colors[i]){
      squares[i].style.display = "block";
      squares[i].style.backgroundColor = colors[i];
    }
    else {
      squares[i].style.display = "none";
    }
  }
}

resetButton.addEventListener("click", function(){
    reset();
});

function changeSquares(color) {
  for(var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = color;
  }
}

function pickColor() {
  var random = Math.floor(Math.random() * colors.length);

  return colors[random];
}

function generateRandomColors(size) {
  var randomColors = [];

  for(var i = 0; i < size; i++) {
    randomColors.push(randomColor());
  }

  return randomColors;
}

function randomColor() {
  var r = Math.floor(Math.random() * 255 + 1);
  var g = Math.floor(Math.random() * 255 + 1);
  var b = Math.floor(Math.random() * 255 + 1);

  return "rgb(" + r + ", " + g + ", " + b + ")";
}
