const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// BALLOONS

const redBalloon = new Image ();
redBalloon.src = "./images/red-balloon.png"

const blueBalloon = new Image ();
blueBalloon.src = "./images/blue-balloon.png"

const greenBalloon = new Image ();
greenBalloon.src = "./images/green-balloon.png"

const yellowBalloon = new Image ();
yellowBalloon.src = "./images/yellow-balloon.png"

const pop = new Image ();
pop.src = "./images/pop.png"

const blank = new Image ();
blank.src = "./images/blank.png"


// DRAW BALLOONS

const weight = 75;
const height = 100;

let mouseX = 0;
let mouseY = 0;

let balloonPopAudio = new Audio ("./sounds/Balloon_popping.mp3")

const balloons = [redBalloon, blueBalloon, yellowBalloon, greenBalloon];

const randomBalloons0 = balloons[Math.floor(Math.random() * balloons.length)];
const randomBalloons1 = balloons[Math.floor(Math.random() * balloons.length)];
const randomBalloons2 = balloons[Math.floor(Math.random() * balloons.length)];
const randomBalloons3 = balloons[Math.floor(Math.random() * balloons.length)];
const randomBalloons4 = balloons[Math.floor(Math.random() * balloons.length)];
const randomBalloons5 = balloons[Math.floor(Math.random() * balloons.length)];
const randomBalloons6 = balloons[Math.floor(Math.random() * balloons.length)];
const randomBalloons7 = balloons[Math.floor(Math.random() * balloons.length)];

let randomBallons = [
  {
    name: randomBalloons0,
    x: 75,
    y: 175,
    width: weight,
    height: height,
    sound: new Audio ("./sounds/Balloon_popping.mp3"),
  },
  {
    name: randomBalloons1,
    x: 200,
    y: 175,
    width: weight,
    height: height,
    sound: new Audio ("./sounds/Balloon_popping.mp3"),
  },
  {
    name: randomBalloons2,
    x: 325,
    y: 175,
    width: weight,
    height: height,
    sound: new Audio ("./sounds/Balloon_popping.mp3"),
  },
  {
    name: randomBalloons3,
    x: 450,
    y: 175,
    width: weight,
    height: height,
    sound: new Audio ("./sounds/Balloon_popping.mp3"),
  },
  {
    name: randomBalloons4,
    x: 75,
    y: 25,
    width: weight,
    height: height,
    sound: new Audio ("./sounds/Balloon_popping.mp3"),
  },
  {
    name: randomBalloons5,
    x: 200,
    y: 25,
    width: weight,
    height: height,
    sound: new Audio ("./sounds/Balloon_popping.mp3"),
  },
  {
    name: randomBalloons6,
    x: 325,
    y: 25,
    width: weight,
    height: height,
    sound: new Audio ("./sounds/Balloon_popping.mp3"),
  },
  {
    name: randomBalloons7,
    x: 450,
    y: 25,
    width: weight,
    height: height,
    sound: new Audio ("./sounds/Balloon_popping.mp3"),
  },
];


const drawBalloon = () => {
  randomBallons.forEach((balloon) => {
    return ctx.drawImage(
      balloon.name,
      balloon.x,
      balloon.y,
      balloon.width,
      balloon.height
    );
  });
};


//SUSTITUCION DE GLOBOS POR "POP" + SOUND

const checkBallons = (mouseX, mouseY) => {
  randomBallons = randomBallons.map((balloon) => {
    if (
      mouseX > balloon.x &&
      mouseX < balloon.x + balloon.width &&
      mouseY > balloon.y &&
      mouseY < balloon.y + balloon.height
    ) {
      balloon.sound.play()
      scr++;
      score.innerHTML ="Score: "+scr;
      return {
        name: pop,
        x: balloon.x,
        y: balloon.y,
        width: balloon.width,
        height: balloon.height,
      };
    } else {
      return balloon;
    }
  });
  
  return randomBallons;
};

// LOADED IMAGES

const checkImages = () =>{
counter = 0;

blueBalloon.onload = () => {
  counter++;
  checkIfAllImagesAreLoaded();
};
redBalloon.onload = () => {
  counter++;
  checkIfAllImagesAreLoaded();
};
yellowBalloon.onload = () => {
  counter++;
  checkIfAllImagesAreLoaded();
};
greenBalloon.onload = () => {
  counter++;
  checkIfAllImagesAreLoaded();
};
pop.onload = () => {
  counter++;
  checkIfAllImagesAreLoaded();
}
blank.onload = () => {
  counter++;
  checkIfAllImagesAreLoaded();
}
const checkIfAllImagesAreLoaded = () => {
  if (counter === 6) {
    startGame();
  }
};
}

// FUNCTION START + TIMER

let clickable = true
let countdown 

document.getElementById('start-button').onclick = (event) => {
  if(clickable){
    
    // clickable = false
    checkImages();
    startGame();
    
    let timeleft = 5;
    countdown = setInterval(function(){
      if(timeleft <= 0){
        clearInterval(countdown);
        document.getElementById("timer").innerHTML = "Finished";
        ctx.drawImage(blank, 0, 0, 600, 300)
        GameOver()
      } else {
        document.getElementById("timer").innerHTML = "Timer: "+ timeleft;
        if (scr === 8){
          ctx.drawImage(blank, 0, 0, 600, 300)
          YouWin()
          clearInterval(countdown)
        }
      }
      timeleft -= 1;
    }, 1000);
  }
};

const startGame = () => {
  drawBalloon();
};


// CLEAR CANVAS

const clearCanvas = () => {
  ctx.clearRect(0, 0, 600, 300);
};

// RESET GAME

document.getElementById('reset-button').onclick = (event) => {

  clearInterval(countdown)
  scr = 0;
  document.getElementById("timer").innerHTML = "Timer:  ";
  document.getElementById("scr").innerHTML = "Score: ";
  
  // document.getElementById('canvas').reset;
  // canvas.getContext('2d').reset;
  // clearCanvas()
  // startGame()

  document.getElementById("start-button").click()
    
  
};

// SCORE

let scr = 0;
var score = document.getElementById('scr');


// MOUSECLICK POSITION 

function getMousePosition(canvas, event) {
  let rect = canvas.getBoundingClientRect();
  mouseX = event.clientX - rect.left;
  mouseY = event.clientY - rect.top;
}

let canvasElem = document.querySelector("canvas");
canvasElem.addEventListener("mousedown", function (e) {
  getMousePosition(canvasElem, e);
  checkBallons(mouseX, mouseY);
  drawBalloon();
});


// WIN/LOST MESSAGE

const GameOver = ()=>{
  ctx.font = 'bold 50px sans-serif'
  ctx.textAlign = 'center'
  ctx.fillStyle = "rgb(135, 0, 11)"
  ctx.fillText('You Lost', 300, 150)
  
}

const YouWin = ()=>{
  ctx.font = 'bold 50px sans-serif'
  ctx.textAlign = 'center'
  ctx.fillStyle = "rgb(0, 25, 135)"
  ctx.fillText('You Win', 300, 150)
  
}
