const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// BALLOONS

const redBalloon = new Image ();
redBalloon.src = "/images/red-balloon.png"

const blueBalloon = new Image ();
blueBalloon.src = "/images/blue-balloon.png"

const greenBalloon = new Image ();
greenBalloon.src = "/images/green-balloon.png"

const yellowBalloon = new Image ();
yellowBalloon.src = "/images/yellow-balloon.png"

const pop = new Image ();
pop.src = "/images/pop.png"

const blank = new Image ();
blank.src = "/images/blank.png"


// DRAW BALLOONS

const weight = 75;
const height = 100;

let mouseX = 0;
let tmouseY = 0;

let balloonPopAudio = new Audio ("/sounds/Balloon popping.mp3")

const balloons = [redBalloon, blueBalloon, yellowBalloon, greenBalloon];

// let balloonX = [75, 200, 325, 450];
// let balloonY = [25, 175];

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
  },
  {
    name: randomBalloons1,
    x: 200,
    y: 175,
    width: weight,
    height: height,
  },
  {
    name: randomBalloons2,
    x: 325,
    y: 175,
    width: weight,
    height: height,
  },
  {
    name: randomBalloons3,
    x: 450,
    y: 175,
    width: weight,
    height: height,
  },
  {
    name: randomBalloons4,
    x: 75,
    y: 25,
    width: weight,
    height: height,
  },
  {
    name: randomBalloons5,
    x: 200,
    y: 25,
    width: weight,
    height: height,
  },
  {
    name: randomBalloons6,
    x: 325,
    y: 25,
    width: weight,
    height: height,
  },
  {
    name: randomBalloons7,
    x: 450,
    y: 25,
    width: weight,
    height: height,
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



//------------ Función para sustituir los globos -----------------

const checkBallons = (mouseX, mouseY) => {
  randomBallons = randomBallons.map((balloon) => {
    if (
      mouseX > balloon.x &&
      mouseX < balloon.x + balloon.width &&
      mouseY > balloon.y &&
      mouseY < balloon.y + balloon.height
    ) {
      balloonPopAudio.play()
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




// ctx.drawImage(pop, balloon.x, balloon.y, 75, 100)

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

// FUNCTION START
let clickable = true

document.getElementById('start-button').onclick = (event) => {
  if(clickable){

    checkImages();
    startGame();

    var timeleft = 10;
    var countdown = setInterval(function(){
    if(timeleft <= 0){
      clearInterval(countdown);
      document.getElementById("timer").innerHTML = "Finished";
      ctx.drawImage(blank, 0, 0, 600, 300)
    //  GameOver()
    } else {
      document.getElementById("timer").innerHTML = "Timer: "+ timeleft;
    }
    timeleft -= 1;
  }, 1000);
    
  }
};

const startGame = () => {
  drawBalloon();
};

const position = [];
const clearCanvas = () => {
  ctx.clearRect(0, 0, 600, 300);
};

// RESET GAME

document.getElementById('reset-button').onclick = (event) => {
  if(clickable){

  }
};

// MOUSECLICK POSITION

let scr = 0;
var score = document.getElementById('scr');
 


function getMousePosition(canvas, event) {
  let rect = canvas.getBoundingClientRect();
  mouseX = event.clientX - rect.left;
  mouseY = event.clientY - rect.top;
  console.log("Coordinate x: " + mouseX, "Coordinate y: " + mouseY);
}

let canvasElem = document.querySelector("canvas");
canvasElem.addEventListener("mousedown", function (e) {
  getMousePosition(canvasElem, e);
  checkBallons(mouseX, mouseY);
  drawBalloon();
  
});


const GameOver = ()=>{
  ctx.font = '50px sans-serif'
  ctx.textAlign = 'center'
  ctx.fillText('GAME OVER', 250, 350)
}
