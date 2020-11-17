// All code should be written in this file.

//global variables
let playerOneMoveOneType,
    playerOneMoveTwoType,
    playerOneMoveThreeType,
    playerTwoMoveOneType,
    playerTwoMoveTwoType,
    playerOneMoveOneValue,
    playerOneMoveTwoValue,
    playerOneMoveThreeValue,
    playerTwoMoveOneValue,
    playerTwoMoveTwoValue,
    playerTwoMoveThreeValue

//function called setPlayerMoves() for main logic

const setPlayerMoves = (player, moveOneType, moveOneValue, moveTwoType, moveTwoValue, moveThreeType, moveThreeValue) => {
  if (!player || !moveOneType || !moveOneValue || !moveTwoType || !moveTwoValue || !moveThreeValue || !moveThreeType) {
    return;
  }
  else if (!isValidMoveType(moveOneType) || !isValidMoveType(moveTwoType) || !isValidMoveType(moveThreeType)) {
    return;
  }
  else if (!isValidMoveValue(moveOneValue) || !isValidMoveValue(moveTwoValue) || !isValidMoveValue(moveThreeValue)) {
  return;
  }
  else if ((moveOneValue + moveTwoValue + moveThreeValue) > 99) {
    return
  }
  else if (player === 'Player One') {
    playerOneMoveOneType = moveOneType;
    playerOneMoveOneValue = moveOneValue;
    playerOneMoveTwoType = moveTwoType;
    playerOneMoveTwoValue = moveTwoValue;
    playerOneMoveThreeType = moveThreeType;
    playerOneMoveThreeValue = moveThreeValue;
  } else if (player === 'Player Two') {
    playerTwoMoveOneType = moveOneType;
    playerTwoMoveOneValue = moveOneValue;
    playerTwoMoveTwoType = moveTwoType;
    playerTwoMoveTwoValue = moveTwoValue;
    playerTwoMoveThreeType = moveThreeType;
    playerTwoMoveThreeValue = moveThreeValue;
  }
}

//helper functions
const isValidmoveType = (move) => {
  return (move === 'rock') || (move === 'paper') || (move === 'scissors') 
}

const isValidMoveValue = (moveValue) => {
  return (moveValue >= 1) && (moveValue <= 99 )
}

function getRoundWinner(player, moveOneType, moveOneValue, moveTwoType, moveTwoValue, moveThreeType, moveThreeValue) {

 }

function getRoundWinner() {
  // A function called getRoundWinner, which takes a round number (1, 2, or 3), 
  // compares both player’s move types and values for that 
  // round, and returns the appropriate winner ('Player One', 'Player Two', or 'Tie')
}

function getGameWinner() {
  // which compares both player’s move types and values for the whole game and returns
  // the appropriate winner ('Player One', 'Player Two', or 'Tie')
}

function setComputerMoves() {
//  let randomMove =  Math.floor(Match.random() * 3 + 1)

}