console.log("This is Jump and Save - Live Action Game");
let gameHero = document.querySelector(".gameHero");
let gameVillain = document.querySelector(".gameVillain");
let startGame = document.querySelector(".startGame");
let startBtn = document.getElementById("startBtn");
let titleDisplay = document.querySelector(".titleDisplay");
let scoreCont = document.getElementById("scoreCont");
let vs = document.querySelector(".vs");
let superKickCont = document.querySelector("#superKickCont");
let bgMusic = new Audio("Resource/gameMusic.mp3");
let gameOverMusic = new Audio("Resource/gameOver.mp3");
let collideMusic = new Audio("Resource/ColldingSound.wav");
let jumpMusic = new Audio("Resource/JumpingSound.wav");
let noofKick = 0, totalKicks = 5, score = 0, crossCheck = true;
function updateScore(value) {
    scoreCont.innerHTML = "Your Score: " + value;
}
startBtn.addEventListener("click", () => {
    bgMusic.play();
    startGame.style.display = "none";
    scoreCont.style.display = "block";
    superKickCont.style.display = "block";
    gameVillain.classList.add("animateVillain");
    vs.style.display = "none";
    document.addEventListener("keydown", gameStartPlaying);
    function gameStartPlaying(e) {
        // console.log("Key Code is", e.key);
        if (e.key == "ArrowUp") {
            gameHero.classList.add("animateHeroJump");
            setTimeout(() => {
                gameHero.classList.remove("animateHeroJump");
            }, 700);
            jumpMusic.play();
        }
        let XHero = parseInt(window.getComputedStyle(gameHero, null).getPropertyValue('left'));
        let XVillain = parseInt(window.getComputedStyle(gameVillain, null).getPropertyValue('left'));
        XDifference = XVillain - XHero;
        // console.log(XDifference);
        // console.log(XHero);
        if (e.key == "ArrowRight") {
            if (XHero < 1115) {
                gameHero.style.transform = 'scaleX(1)';
                gameHero.style.left = (XHero + 250) + "px";
                // gameHero.style.left = (XHero + 150) + "px";
            }
        }
        if (e.key == "ArrowLeft") {
            if (XHero > 100) {
                gameHero.style.transform = 'scaleX(-1)';
                gameHero.style.left = (XHero - 250) + "px";
                // gameHero.style.left = (XHero - 150) + "px";
            }
        }
        if (e.key == " ") {
            if (noofKick < 5) {
                gameHero.classList.add('superKick');
                noofKick += 1;
                setTimeout(() => {
                    gameHero.classList.remove('superKick');
                }, 300);
                if (XDifference < 300) {
                    gameVillain.classList.remove("animateVillain");
                    score += 100;
                    updateScore(score);
                    setTimeout(() => {
                        gameVillain.classList.add("animateVillain");
                    }, 100);
                }
            }
            superKickCont.innerHTML = "Super Kicks: " + (totalKicks - noofKick);
        }
    }
    setInterval(() => {
        let HeroX = parseInt(window.getComputedStyle(gameHero, null).getPropertyValue('left'));
        let HeroY = parseInt(window.getComputedStyle(gameHero, null).getPropertyValue('bottom'));
        let VillainX = parseInt(window.getComputedStyle(gameVillain, null).getPropertyValue('left'));
        let VillainY = parseInt(window.getComputedStyle(gameVillain, null).getPropertyValue('bottom'));
        let offsetX = Math.abs(HeroX - VillainX);
        let offsetY = Math.abs(HeroY - VillainY);
        // console.log(offsetX, offsetY);
        if (offsetX < 80 && offsetY < 40) {
            bgMusic.pause();
            collideMusic.play();
            setTimeout(() => {
                gameOverMusic.play();
                setTimeout(() => {
                    gameOverMusic.pause();
                }, 1000);
            }, 1000);
            titleDisplay.innerHTML = "Game Over !!! You smack down. Please Reload to Restart";
            titleDisplay.style.width = "60rem";
            superKickCont.style.display = "none"
            setTimeout(() => {
                gameVillain.classList.remove("animateVillain");
                document.removeEventListener("keydown", gameStartPlaying);
                vs.style.display = "block";
                gameHero.style.left = "28rem";
            }, 1000);
        }
        else if (offsetX < 150 && crossCheck && offsetY > 100) {
            score += 100;
            updateScore(score);
            crossCheck = false;
            setTimeout(() => {
                crossCheck = true;
            }, 1000);
            setTimeout(() => {
                let aniDur = parseFloat(window.getComputedStyle(gameVillain, null).getPropertyValue('animation-duration'));
                if (aniDur > 2.5) {
                    let newaniDur = aniDur - 0.1;
                    gameVillain.style.animationDuration = newaniDur + "s";
                }
            }, 500);
        }
    }, 100);
})
