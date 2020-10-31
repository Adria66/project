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

// DRAW BALLOONS
const weight = 75;
const height = 100;

const drawBalloon = () => {
    ctx.drawImage (randomBalloons0, 75, 175, weight, height);
    ctx.drawImage (randomBalloons1, 200, 175, weight, height);
    ctx.drawImage (randomBalloons2, 325, 175, weight, height);
    ctx.drawImage (randomBalloons3, 450, 175, weight, height);
    ctx.drawImage (randomBalloons4, 75, 25, weight, height);
    ctx.drawImage (randomBalloons5, 200, 25, weight, height);
    ctx.drawImage (randomBalloons6, 325, 25, weight, height);
    ctx.drawImage (randomBalloons7, 450, 25, weight, height);
};

let balloonX = [75, 200, 325, 450];
let balloonY = [25, 175]; 


const balloons = [redBalloon, blueBalloon, yellowBalloon, greenBalloon]
const randomBalloons0 = balloons[Math.floor(Math.random() * balloons.length)];
const randomBalloons1 = balloons[Math.floor(Math.random() * balloons.length)];
const randomBalloons2 = balloons[Math.floor(Math.random() * balloons.length)];
const randomBalloons3 = balloons[Math.floor(Math.random() * balloons.length)];
const randomBalloons4 = balloons[Math.floor(Math.random() * balloons.length)];
const randomBalloons5 = balloons[Math.floor(Math.random() * balloons.length)];
const randomBalloons6 = balloons[Math.floor(Math.random() * balloons.length)];
const randomBalloons7 = balloons[Math.floor(Math.random() * balloons.length)];

// LOADED IMAGES
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

const checkIfAllImagesAreLoaded = () => {
	if (counter === 4) {
		startGame();
	}
};

// FUNCTION START

const startGame = () => {
    drawBalloon()
}

// const balloons = [    
//     {name: 'redBalloon' , img: '/images/red-balloon.png'},
//     {name: 'blueBalloon' , img: '/images/blue-balloon.png'},
//     {name: 'yellowBalloon' , img: '/images/yellow-balloon.png'},
//     {name: 'greenBalloon' , img: '/images/green-balloon.png'},
// ];

const position = []


const clearCanvas = () => {
	ctx.clearRect(0, 0, 600, 300);
};
 



// MOUSECLICK POSITION

function getMousePosition(canvas, event) { 
    let rect = canvas.getBoundingClientRect(); 
    let x = event.clientX - rect.left; 
    let y = event.clientY - rect.top; 
    console.log("Coordinate x: " + x,  
                "Coordinate y: " + y); 
} 

let canvasElem = document.querySelector("canvas"); 
  
canvasElem.addEventListener("mousedown", function(e) 
{ 
    getMousePosition(canvasElem, e); 
});