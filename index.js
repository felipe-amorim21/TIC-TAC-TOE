const playbtn = document.getElementById('play')
const playerform = document.querySelector('form')
const closebtn = document.getElementById('close')
const startbtn = document.getElementById('startbtn')
const tiles = document.getElementsByClassName('tile')

let player1 
let player2 

const Player = (name, marker) => {
    const getName  = () => name;
    const getMarker  = () => marker;
    return {getMarker, getName}
}


const Gameboard = (() => {
    let gameBoard = ['O','O','O','X','X','O','O','X','X']
    return {gameBoard}
})()

playbtn.addEventListener('click', (e) => {
    playbtn.style.display = 'none'
    playerform.style.display = 'flex'

    if(e.preventDefault){e.preventDefault()}else{e.returnValue=false}
} )

closebtn.addEventListener('click', (e) => {
    playerform.style.display = 'none'
    playbtn.style.display = 'flex'

    if(e.preventDefault){e.preventDefault()}else{e.returnValue=false}
} )


startbtn.addEventListener('click', (e) => {
    const name1 = document.getElementById('player1_name')
    const name2 = document.getElementById('player2_name')


    player1 = Player(name1.value, 'X')
    player2 = Player(name2.value, 'O')


    playerform.style.display = 'none'
    playbtn.style.display = 'none'

    if(e.preventDefault){e.preventDefault()}else{e.returnValue=false}

})


function fillGrid() {
    Gameboard.gameBoard.forEach((element, index) => {
        tiles[index].textContent = element;
    });
}


function winHandle() {
    let winner = 0
    // Check rows
    for (let i = 0; i < Gameboard.gameBoard.length; i += 3) {
      if (Gameboard.gameBoard[i] === Gameboard.gameBoard[i + 1] && Gameboard.gameBoard[i + 1] === Gameboard.gameBoard[i + 2]) {
        if (Gameboard.gameBoard[i] === player1.getMarker()){
            winner = player1.getName()
            ( alert(`Player ${winner} has won the game!`))
        } else {
            winner = player2.getName()
            alert(`Player ${winner} has won the game!`)
        }
      }
    }
  
    // Check columns
    for (let i = 0; i < 3; i+= 1) {
      if (Gameboard.gameBoard[i] === Gameboard.gameBoard[i + 3] && Gameboard.gameBoard[i + 3] === Gameboard.gameBoard[i + 6]) {
        if (Gameboard.gameBoard[i] === player1.getMarker()){
            winner = player1.getName()
            alert(`Player ${winner} has won the game!`)
        } else {
            winner = player2.getName()
            alert(`Player ${winner} has won the game!`)
        }
      }
    }
  
    // Check diagonal (top-left to bottom-right)
    if (Gameboard.gameBoard[0] === Gameboard.gameBoard[4] && Gameboard.gameBoard[4] === Gameboard.gameBoard[8]) {
        if (Gameboard.gameBoard[0] === player1.getMarker()){
            winner = player1.getName()
            alert(`Player ${winner} has won the game!`)
        } else {
            winner = player2.getName()
            alert(`Player ${winner} has won the game!`)
        }
    }
  
    // Check diagonal (top-right to bottom-left)
    if (Gameboard.gameBoard[2] === Gameboard.gameBoard[4] && Gameboard.gameBoard[4] === Gameboard.gameBoard[6]) {
        if (Gameboard.gameBoard[2] === player1.getMarker()){
            winner = player1.getName()
            alert(`Player ${winner} has won the game!`)
        } else {
            winner = player2.getName()
            alert(`Player ${winner} has won the game!`)
        }
    }
  
    // No winner
    if (winner === 0){
        alert( `alert it's a tie!`)
    }
  }
  


