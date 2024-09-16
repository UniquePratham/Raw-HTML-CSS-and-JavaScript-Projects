console.log('Welcome to TicTacToe');
const bgMusic = new Audio("Resource/music.mp3");
const turnMusic = new Audio("Resource/ting.mp3");
const gameoverMusic = new Audio("Resource/gameover.mp3");
let chance = 'X';
let gameover = false;
let hugameover = false;
let aigameover = false;
let boxClicked;
let AIboxClicked;
let firstBoxClickInterval;
let firstBoxClickAIInterval;
const OXonoff = document.getElementById('OXonoff');
const chanceDecide = document.querySelector('.gameDecide');
const choice1 = document.getElementById('choice1');
const choice2 = document.getElementById('choice2');
const choosegameContainer = document.querySelector('.choosegameContainer');
const aboutgameContainer = document.querySelector('.aboutgameContainer');
bgMusic.play();
// Function to Create Line
const createLine = (classes) => {
    let line = document.createElement('div');
    line.classList.add(`${classes}`);
    line.classList.add('cross');
    return line;
}
// Function to Restart the Game
const gameRestart = () => {
    // choosegameContainer.style.display = 'block';
    // aboutgameContainer.style.display = 'none';
    // gameReset();
    // const boxes = document.getElementsByClassName('box');
    // Array.from(boxes).forEach(element => {
    //     console.log('removed');
    //     element.removeEventListener('click', boxClicked);
    // });
    location.reload();
}
// Function to Reset the Game
const gameReset = () => {
    let boxTexts = document.querySelectorAll('.boxText');
    Array.from(boxTexts).forEach(element => {
        element.innerText = '';
    });
    if (gameover) {
        let lines = document.querySelectorAll('.cross');
        Array.from(lines).forEach(element => {
            let parent = element.parentElement
            parent.removeChild(element);
        });
    }
    chance = 'X';
    gameover = false;
    document.querySelector('.gameDecide').style.display = 'inline-block';
    document.querySelector('.gameInfo').style.display = 'inline-block';
    document.querySelector('.gameInfo').innerText = `Turn for ${chance}`;
    document.querySelector('.gamewinner').innerText = '';
    document.querySelector('.gamewinner').style.display = 'none';
    document.getElementById('gamewinnerGif').style.width = '0rem';
    OXonoff.classList.remove('fa-toggle-on');
    OXonoff.classList.add('fa-toggle-off');
    chanceDecide.style.display = 'block';
    OXonoff.style.display = 'inline-block';
    firstBoxClick();
}
// Function to Change the Turn
const changeTurn = () => {
    return chance === 'X' ? 'O' : 'X';
};
// Function to Check For a Win
const checkWin = () => {
    const boxTexts = document.getElementsByClassName('boxText');
    const wins = [
        [0, 1, 2, 'line'], [3, 4, 5, 'line'], [6, 7, 8, 'line'], [0, 3, 6, 'line-1'], [1, 4, 7, 'line-1'], [2, 5, 8, 'line-1'], [0, 4, 8, 'line-2'], [2, 4, 6, 'line-3'],
    ]
    wins.forEach(e => {
        if ((boxTexts[e[0]].innerText === boxTexts[e[1]].innerText) && (boxTexts[e[1]].innerText === boxTexts[e[2]].innerText) && (boxTexts[e[0]].innerText !== "")) {
            gameoverMusic.play();
            document.querySelector('.gamewinner').innerText = `${boxTexts[e[0]].innerText} is the Winner!`;
            document.querySelector('.gameInfo').style.display = 'none';
            document.querySelector('.gameDecide').style.display = 'none';
            document.querySelector('.gamewinner').style.display = 'inline-block';
            document.getElementById('gamewinnerGif').style.width = '25rem';
            gameover = true;
            let line = createLine(e[3]);
            document.querySelectorAll('.box')[e[1]].appendChild(line);
        }
    });
}
// Function to Check For a Tie if Not Win or Lose
const checkTie = () => {
    const boxTexts = document.getElementsByClassName('boxText');
    let count = 0;
    Array.from(boxTexts).forEach(element => {
        if (element.innerText !== "") {
            count += 1;
        }
    });
    if (count == 9) {
        gameoverMusic.play();
        document.querySelector('.gamewinner').style.display = 'inline-block';
        document.querySelector('.gamewinner').innerText = `Game is Tie Between Both !`;
        document.querySelector('.gameInfo').style.display = 'none';
        document.getElementById('gamewinnerGif').style.width = '0rem';
        return true;
    }
}

// Function to be performed when first box is clicked
const firstBoxClick = () => {
    firstBoxClickInterval = setInterval(() => {
        const boxTexts = document.getElementsByClassName('boxText');
        let count = 0;
        Array.from(boxTexts).forEach(element => {
            if (element.innerText !== "") {
                count += 1;
            }
        });
        if (count < 1) {
            OXonoff.addEventListener('click', () => {
                if (OXonoff.classList.contains('fa-toggle-off')) {
                    OXonoff.classList.remove('fa-toggle-off');
                    OXonoff.classList.add('fa-toggle-on');
                    chance = changeTurn();
                    document.querySelector('.gameInfo').innerText = `Turn for ${chance}`;
                }
                else if (OXonoff.classList.contains('fa-toggle-on')) {
                    OXonoff.classList.remove('fa-toggle-on');
                    OXonoff.classList.add('fa-toggle-off');
                    chance = changeTurn();
                    document.querySelector('.gameInfo').innerText = `Turn for ${chance}`;
                }
            })
        }
        else {
            chanceDecide.style.display = 'none';
            OXonoff.style.display = 'none';
            clearInterval(firstBoxClickInterval);
        }
    }, 500);
}
// Game Logic
choice1.addEventListener('click', () => {
    choosegameContainer.style.display = 'none';
    aboutgameContainer.style.display = 'block';
    const boxes = document.getElementsByClassName('box');
    firstBoxClick();
    Array.from(boxes).forEach(element => {
        element.addEventListener('click', boxClicked = () => {
            let boxText = element.querySelector('.boxText');
            if (boxText.innerText === '' && !gameover) {
                if (chance === 'X') {
                    element.style.color = 'blue';
                }
                else if (chance === 'O') {
                    element.style.color = 'red';
                }
                boxText.innerText = chance;
                chance = changeTurn();
                turnMusic.play();
                checkWin();
                if (!gameover) {
                    checkTie();
                    let checkTievalue = checkTie();
                    if (checkTievalue) {
                        setTimeout(() => {
                            gameReset();
                        }, 3000);
                    }
                    document.querySelector('.gameInfo').innerText = `Turn for ${chance}`;
                }
            }
            else if (boxText.innerText === '' && gameover) {
                element.removeEventListener('click', boxClicked);
            }
        });
    });
    reset.addEventListener('click', gameReset);
    restart.addEventListener('click', gameRestart);
});
choice2.addEventListener('click', () => {
    const boxes = document.getElementsByClassName('box');
    // Defining the original Board
    let origBoard = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    // Defining Human
    let huPlayer = 'X';
    // Defining A.I(Artificial Intelligence)
    let aiPlayer = 'O';
    // Function to Reset the Game
    const gameResetAI = () => {
        let boxTexts = document.querySelectorAll('.boxText');
        Array.from(boxTexts).forEach(element => {
            element.innerText = '';
        });
        if (hugameover || aigameover) {
            let lines = document.querySelectorAll('.cross');
            Array.from(lines).forEach(element => {
                let parent = element.parentElement
                parent.removeChild(element);
            });
        }
        origBoard = [0, 1, 2, 3, 4, 5, 6, 7, 8];
        huPlayer = 'X';
        aiPlayer = 'O';
        chance = huPlayer;
        hugameover = false;
        aigameover = false;
        chanceDecide.style.display = 'block';
        document.querySelector('.gameInfo').style.display = 'inline-block';
        document.querySelector('.gameInfo').innerText = `You will Play as ${chance}`;
        document.querySelector('.gamewinner').innerText = '';
        document.querySelector('.gamewinner').style.display = 'none';
        document.getElementById('gamewinnerGif').style.width = '0rem';
        OXonoff.classList.remove('fa-toggle-on');
        OXonoff.classList.add('fa-toggle-off');
        OXonoff.style.display = 'inline-block';
        firstBoxClickAI();
    }
    // Function to be performed when first box is clicked of ai game
    const firstBoxClickAI = () => {
        firstBoxClickAIInterval = setInterval(() => {
            const boxTexts = document.getElementsByClassName('boxText');
            let count = 0;
            Array.from(boxTexts).forEach(element => {
                if (element.innerText !== "") {
                    count += 1;
                }
            });
            if (count < 1) {
                OXonoff.addEventListener('click', () => {
                    if (OXonoff.classList.contains('fa-toggle-off')) {
                        OXonoff.classList.remove('fa-toggle-off');
                        OXonoff.classList.add('fa-toggle-on');
                    }
                    else if (OXonoff.classList.contains('fa-toggle-on')) {
                        OXonoff.classList.remove('fa-toggle-on');
                        OXonoff.classList.add('fa-toggle-off');
                    }
                    chance = aiPlayer;
                    aiPlayer = huPlayer;
                    huPlayer = chance;
                    document.querySelector('.gameInfo').innerText = `You will Play as ${chance}`;
                })
            }
            else {
                chanceDecide.style.display = 'none';
                OXonoff.style.display = 'none';
                clearInterval(firstBoxClickAIInterval);
            }
        }, 500);
    }
    function placinginOrigBoard(value, mark) {
        origBoard[value] = mark;
    }
    function ChanceofAI(turnofAI) {
        AIBox = document.querySelector(`[value="${turnofAI}"]`);
        AIBoxText = AIBox.querySelector('.boxText');
        if (aiPlayer == 'X') {
            AIBox.style.color = 'blue';
        }
        else if (aiPlayer == 'O') {
            AIBox.style.color = 'red';
        }
        AIBoxText.innerText = aiPlayer;
        turnMusic.play();
        chance = huPlayer;
    }
    // returns  list of the indexes of empty boxes on the Board
    function emptyIndexies(board) {
        return board.filter(s => s != 'O' && s != 'X');
    }
    function checkWinAI(board, player) {
        if (
            (board[0] == player && board[1] == player && board[2] == player) ||
            (board[3] == player && board[4] == player && board[5] == player) ||
            (board[6] == player && board[7] == player && board[8] == player) ||
            (board[0] == player && board[3] == player && board[6] == player) ||
            (board[1] == player && board[4] == player && board[7] == player) ||
            (board[2] == player && board[5] == player && board[8] == player) ||
            (board[0] == player && board[4] == player && board[8] == player) ||
            (board[2] == player && board[4] == player && board[6] == player)
        ) {
            return true;
        } else {
            return false;
        }
    }
    // the main Minimax function
    function minimax(newBoard, player) {
        // Finding Available Boxes
        let availBoxes = emptyIndexies(newBoard);
        // Checking for the Terminal States such as Win, Lose & Tie
        // And Returning a Value accordingly
        if (checkWinAI(newBoard, huPlayer)) {
            return { score: -10 };
        }
        else if (checkWinAI(newBoard, aiPlayer)) {
            return { score: 10 };
        }
        else if (availBoxes.length === 0) {
            return { score: 0 };
        }
        // An Array to Collect all the Objects of Index & Score
        let moves = [];
        // Loop through Available Boxes
        for (let i = 0; i < availBoxes.length; i++) {
            // Create an Object for each ad every Box & store the index of that Box 
            let move = {};
            move.index = newBoard[availBoxes[i]];
            // Set the Empty Box to the Current Player
            newBoard[availBoxes[i]] = player;
            // Collect the Score resulted from calling minimax on the opponent of the current player
            if (player == aiPlayer) {
                let result = minimax(newBoard, huPlayer);
                move.score = result.score;
            }
            else {
                let result = minimax(newBoard, aiPlayer);
                move.score = result.score;
            }
            // Reset the Box to Empty
            newBoard[availBoxes[i]] = move.index;
            // Push the Move Object to the Moves Array
            moves.push(move);
        }
        // If it is the computer's turn loop over the moves and choose the move with the highest score
        let bestMove;
        if (player === aiPlayer) {
            let bestScore = -10000;
            for (let i = 0; i < moves.length; i++) {
                if (moves[i].score > bestScore) {
                    bestScore = moves[i].score;
                    bestMove = i;
                }
            }
        }
        else {
            // else loop over the moves and choose the move with the lowest score
            let bestScore = 10000;
            for (let i = 0; i < moves.length; i++) {
                if (moves[i].score < bestScore) {
                    bestScore = moves[i].score;
                    bestMove = i;
                }
            }
        }
        // Return the Chosen Move (Object) from the moves array
        return moves[bestMove];
    }
    choosegameContainer.style.display = 'none';
    aboutgameContainer.style.display = 'block';
    document.querySelector('.gameInfo').innerText = `You will Play as ${chance}`;
    chance = huPlayer;
    firstBoxClickAI();
    Array.from(boxes).forEach(element => {
        element.addEventListener('click', AIboxClicked = () => {
            if (chance === huPlayer) {
                let boxText = element.querySelector('.boxText');
                if (boxText.innerText === '' && !hugameover && !aigameover) {
                    if (huPlayer == 'X') {
                        element.style.color = 'blue';
                    }
                    else if (huPlayer == 'O') {
                        element.style.color = 'red';
                    }
                    boxText.innerText = huPlayer;
                    turnMusic.play();
                    chosenBoxValue = element.getAttribute('value');
                    placinginOrigBoard(chosenBoxValue, huPlayer);
                    checkWin();
                    hugameover = checkWinAI(origBoard, huPlayer);
                    if (!hugameover && !aigameover) {
                        checkTie();
                        let checkTievalue = checkTie();
                        if (checkTievalue) {
                            setTimeout(() => {
                                gameResetAI();
                            }, 3000);
                        }
                    }
                    let available = emptyIndexies(origBoard);
                    if (available != 0) {
                        chance = aiPlayer;
                        document.querySelector('.gameInfo').innerText = `Computer will Play as ${chance}`;
                        AIchosenBoxValue = minimax(origBoard, aiPlayer);
                        setTimeout(() => {
                            ChanceofAI(AIchosenBoxValue.index);
                            checkWin();
                        }, 900);
                        placinginOrigBoard(AIchosenBoxValue.index, aiPlayer);
                        aigameover = checkWinAI(origBoard, aiPlayer);
                    }
                    if (!hugameover && !aigameover) {
                        checkTie();
                        let checkTievalue = checkTie();
                        if (checkTievalue) {
                            setTimeout(() => {
                                gameResetAI();
                            }, 3000);
                        }
                    }
                    setTimeout(() => {
                        document.querySelector('.gameInfo').innerText = `You will Play as ${chance}`;
                    }, 1500);
                }
                else if (boxText.innerText === '' && (hugameover || aigameover)) {
                    element.removeEventListener('click', AIboxClicked);
                }
            }
        })
    });
    reset.addEventListener('click', gameResetAI);
    restart.addEventListener('click', gameRestart);
})