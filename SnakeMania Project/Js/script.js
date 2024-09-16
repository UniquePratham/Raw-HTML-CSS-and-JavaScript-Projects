// Game Constants & Variables
console.log('Welcome to SnakeMania - Pratham Version');
let inputDir = { x: 0, y: 0 };
let direction = 'up';
let directionArr = [];
const foodSound = new Audio('Resource/food.mp3');
const gameoverSound = new Audio('Resource/gameover.mp3');
const moveSound = new Audio('Resource/move.mp3');
const musicSound = new Audio('Resource/music.mp3');
const timerSound = new Audio('Resource/timer.mp3');
let decidedFood;
let gameSpeed;
let lastPaintTime = 0;
let snakeArr = [
    { x: 13, y: 15 },
];
let food = { x: 11, y: 10 }
let foodItem = ['food-apple', 'food-grapes', 'food-orange', 'food-mango'];
let isfoodMade = false;
let gameScore = 0;
let gameHighScore;
let HighScore;
const scoreBoard = document.getElementById('scoreBoard');
const highscoreBoard = document.getElementById('highscoreBoard');
const gameBoard = document.getElementById('gameBoard');
const welcomeBoard = document.getElementById('welcomeBoard');
const Easy = document.getElementById('Easy')
const Medium = document.getElementById('Medium');
const Hard = document.getElementById('Hard');
const startGame = document.getElementById('startGame');
const musicOff = document.getElementById('musicOff');
const gamestartshowingTime = document.querySelector('.gamestartshowingTime');
// musicSound.play();
// Game Functions 
const main = (ctime) => {
    window.requestAnimationFrame(main);
    // console.log(ctime);
    if ((ctime - lastPaintTime) / 1000 < 1 / gameSpeed) {
        return;
    }
    lastPaintTime = ctime;
    gameEngine();
}
const isCollide = (snake) => {
    // If Snake Bumped into itself
    for (let i = 1; i < snakeArr.length; i++) {
        if (snake[i].x === snake[0].x && snake[i].y === snake[0].y) {
            // console.log('Checking iscollide 1');
            return true;
        }
    }
    // If Snake Bumped into the Wall
    if (snake[0].x > 18 || snake[0].x < 0 || snake[0].y > 18 || snake[0].y < 0) {
        // console.log('Checking iscollide 2');
        return true;
    }
}
const gameEngine = () => {
    // Part-1 :- Updating the Snake Array & Food
    // console.log(snakeArr);
    if (isCollide(snakeArr)) {
        gameoverSound.play();
        inputDir = { x: 0, y: 0 };
        alert("GameOver! Press Any Key to Play Again!");
        snakeArr = [{ x: 13, y: 15 }];
        gameScore = 0;
        scoreBoard.innerText = `Score - ${gameScore}`;
        directionArr = [];
        direction = 'up';
    }
    // if Snake have eaten the food, increment the score & regenerate the food
    if (snakeArr[0].y === food.y && snakeArr[0].x === food.x) {
        foodSound.play();
        gameScore += 10;
        if (gameScore > gameHighScore) {
            gameHighScore = gameScore;
            localStorage.setItem("HighScore", JSON.stringify(gameHighScore));
            highscoreBoard.innerText = `High Score - ${gameHighScore}`;
        }
        scoreBoard.innerText = `Score - ${gameScore}`;
        snakeArr.unshift({ x: snakeArr[0].x + inputDir.x, y: snakeArr[0].y + inputDir.y });
        let a = 2;
        let b = 16;
        isfoodMade = false;
        decidedFood = { x: Math.round(a + (b - a) * Math.random()), y: Math.round(a + (b - a) * Math.random()) };
        snakeArr.forEach(element => {
            if (decidedFood = element) {
                decidedFood = { x: Math.round(a + (b - a) * Math.random()), y: Math.round(a + (b - a) * Math.random()) };
            }
        });
        food = decidedFood;
    }
    // Moving the Snake
    for (let i = snakeArr.length - 2; i >= 0; i--) {
        snakeArr[i + 1] = { ...snakeArr[i] };
    }
    snakeArr[0].x += inputDir.x;
    snakeArr[0].y += inputDir.y;
    // Part-2 :- Display the Snake & Food
    const gameBoard = document.getElementById('gameBoard');
    gameBoard.innerHTML = '';
    snakeArr.forEach((e, index) => {
        // Display the Snake
        snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart = e.y;
        snakeElement.style.gridColumnStart = e.x;
        // console.log(`x: ${e.x}, y: ${e.y}`);
        if (index == 0) {
            snakeElement.classList.add('snake-head');
            snakeElement.classList.remove('up');
            snakeElement.classList.remove('down');
            snakeElement.classList.remove('left');
            snakeElement.classList.remove('right');
            snakeElement.classList.add(direction);
        }
        else if (index + 1 == snakeArr.length && snakeArr.length >= 3) {
            snakeElement.classList.add('snake-tail');
            snakeElement.classList.remove('up');
            snakeElement.classList.remove('down');
            snakeElement.classList.remove('left');
            snakeElement.classList.remove('right');
            snakeElement.classList.add(direction);
        }
        else {
            snakeElement.classList.add('snake-body');
        }
        gameBoard.appendChild(snakeElement);
        // Display the Food
        foodElement = document.createElement('div');
        foodElement.style.gridRowStart = food.y;
        foodElement.style.gridColumnStart = food.x;
        if (!isfoodMade) {
            let a = 0;
            let b = 3;
            let foodFound = foodItem[Math.round(a + (b - a) * Math.random())];
            decidedFood = foodFound;
        }
        foodElement.classList.add(decidedFood);
        isfoodMade = true;
        gameBoard.appendChild(foodElement);
    });
};
//  Main Game Logic Starts From here
HighScore = localStorage.getItem("HighScore");
if (HighScore === null) {
    gameHighScore = 0;
    localStorage.getItem("HighScore", JSON.stringify(gameHighScore));
}
else {
    gameHighScore = JSON.parse(HighScore);
    highscoreBoard.innerText = `High Score - ${gameHighScore}`;
};
Easy.addEventListener('click', () => {
    if (Easy.classList.contains('brown')) {
        Easy.classList.remove('brown');
    }
    else {
        Easy.classList.add('brown')
        Medium.classList.remove('brown');
        Hard.classList.remove('brown');
        gameSpeed = 4;
    }
});
Medium.addEventListener('click', () => {
    if (Medium.classList.contains('brown')) {
        Medium.classList.remove('brown');
    }
    else {
        Medium.classList.add('brown')
        Easy.classList.remove('brown');
        Hard.classList.remove('brown');
        gameSpeed = 10;
    }
});
Hard.addEventListener('click', () => {
    if (Hard.classList.contains('brown')) {
        Hard.classList.remove('brown');
    }
    else {
        Hard.classList.add('brown')
        Medium.classList.remove('brown');
        Easy.classList.remove('brown');
        gameSpeed = 20;
    }
});
startGame.addEventListener('click', () => {
    if ((Easy.classList.contains('brown')) || (Medium.classList.contains('brown')) || (Hard.classList.contains('brown'))) {
        timerSound.play();
        gamestartshowingTime.innerText = 3;
        setTimeout(() => {
            gamestartshowingTime.innerText = 2;
            setTimeout(() => {
                gamestartshowingTime.innerText = 1;
                setTimeout(() => {
                    gamestartshowingTime.innerText = 0;
                    setTimeout(() => {
                        gamestartshowingTime.innerText = '';
                        welcomeBoard.style.display = 'none';
                        gameBoard.style.display = 'grid';
                        scoreBoard.style.display = 'block';
                        highscoreBoard.style.display = 'block';
                        alert('Use Arrow Keys to Start Playing !!!');
                        window.requestAnimationFrame(main);
                        window.addEventListener('keydown', e => {
                            // Start the Game
                            inputDir = { x: 0, y: 1 }
                            switch (e.key) {
                                case "ArrowUp":
                                    moveSound.play();
                                    console.log("ArrowUp");
                                    inputDir.x = 0;
                                    inputDir.y = -1;
                                    direction = 'up';
                                    break;
                                case "ArrowDown":
                                    moveSound.play();
                                    console.log("ArrowDown");
                                    inputDir.x = 0;
                                    inputDir.y = 1;
                                    direction = 'down';
                                    break;
                                case "ArrowLeft":
                                    console.log("ArrowLeft");
                                    moveSound.play();
                                    inputDir.x = -1;
                                    inputDir.y = 0;
                                    direction = 'left';
                                    break;
                                case "ArrowRight":
                                    moveSound.play();
                                    console.log("ArrowRight");
                                    inputDir.x = 1;
                                    inputDir.y = 0;
                                    direction = 'right';
                                    break;
                                default:
                                    console.log("Wrong Key");
                                    inputDir.x = 0;
                                    inputDir.y = 0;
                                    break;
                            }
                        })
                    }, 500);
                }, 1000);
            }, 1000);
        }, 1000);

    }
    else {
        alert('Please! Select the Difficulty Level!');
    }
});
musicOff.addEventListener('click', () => {
    if (musicOff.classList.contains('pink')) {
        musicOff.classList.remove('pink');
        musicOff.innerText = 'Music Off';
        musicSound.pause();
    }
    else {
        musicOff.classList.add('pink');
        musicOff.innerText = 'Music On';
        musicSound.play();
    }
});
