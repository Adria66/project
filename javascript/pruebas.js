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
    clearCanvas()
    drawBalloon()
}