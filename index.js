var buttons = document.querySelectorAll(".drum");
var audio = new Audio("../sounds/crash.mp3");

buttons.forEach((button) => {
  button.addEventListener("click", handlerClicked);
});

function handlerClicked() {
  var value = this.innerHTML;
  this.classList.toggle("frontcolor");

  var value = this.textContent;

  switch (value) {
    case "w":
      var audio = new Audio("../sounds/tom-1.mp3");
      audio.play();
      break;
    case "a":
      var audio = new Audio("../sounds/tom-2.mp3");
      audio.play();
      break;

    case "s":
      var audio = new Audio("../sounds/tom-3.mp3");
      audio.play();
      break;
    case "d":
      var audio = new Audio("../sounds/tom-4.mp3");
      audio.play();
      break;
    case "j":
      var audio = new Audio("../sounds/crash.mp3");
      audio.play();
      break;
    case "k":
      var audio = new Audio("../sounds/kick-bass.mp3");
      audio.play();
      break;
    case "l":
      var audio = new Audio("../sounds/snare.mp3");
      audio.play();
      break;
    default:
      console.log("value " + value);
  }
}

document.addEventListener("keypress", function (e) {
  console.log(e);
  logKey(e);
});

function logKey(e) {
  var keyCode = e.key;
  switch (keyCode.toLowerCase()) {
    case "w":
      var audio = new Audio("../sounds/tom-1.mp3");
      audio.play();
      document.querySelector(".w").classList.toggle("frontcolor");
      break;
    case "a":
      var audio = new Audio("../sounds/tom-2.mp3");
      audio.play();
      document.querySelector(".a").classList.toggle("frontcolor");
      break;

    case "s":
      var audio = new Audio("../sounds/tom-3.mp3");
      audio.play();
      document.querySelector(".s").classList.toggle("frontcolor");
      break;
    case "d":
      var audio = new Audio("../sounds/tom-4.mp3");
      audio.play();
      document.querySelector(".d").classList.toggle("frontcolor");
      break;
    case "j":
      var audio = new Audio("../sounds/crash.mp3");
      audio.play();
      document.querySelector(".j").classList.toggle("frontcolor");
      break;
    case "k":
      var audio = new Audio("../sounds/kick-bass.mp3");
      audio.play();
      document.querySelector(".k").classList.toggle("frontcolor");
      break;
    case "l":
      var audio = new Audio("../sounds/snare.mp3");
      audio.play();
      document.querySelector(".l").classList.toggle("frontcolor");
      break;
    default:
      console.log("value " + keyboard_key.toLowerCase());
  }
}


