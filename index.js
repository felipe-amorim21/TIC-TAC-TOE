const playbtn = document.getElementById('play')
const playerform = document.querySelector('form')
const closebtn = document.getElementById('close')
const startbtn = document.getElementById('startbtn')
const tiles = document.querySelectorAll('.tile')

let player1
let player2
let count = 0


const Player = (name, marker, turn) => {
    const getName  = () => name;
    const getMarker  = () => marker;
    const getTurn = () => turn;

    return {getMarker, getName, getTurn, turn}
}

const Gameboard = (() => {
    const gameBoard = ['','','','','','','','','']
    const erase = () => {
        for (let i = 0; i < gameBoard.length; i += 1){
            gameBoard[i] = ''
        }
    }
    return {gameBoard, erase}
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



function fillGrid() {
    Gameboard.gameBoard.forEach((element, index) => {
        tiles[index].textContent = element;
    });
}

function winHandle() {
    let winner = 0
    // Check rows
    for (let i = 0; i < Gameboard.gameBoard.length; i += 3) {
        if (Gameboard.gameBoard[i] !== '' && Gameboard.gameBoard[i + 1] !== '' && Gameboard.gameBoard[i + 1] !== ''){
            if (Gameboard.gameBoard[i] === Gameboard.gameBoard[i + 1] && Gameboard.gameBoard[i + 1] === Gameboard.gameBoard[i + 2]) {
                if (Gameboard.gameBoard[i] === player1.getMarker()){
                    winner = player1.getName()
                    ( alert(`Player ${winner} has won the game!`))
                    Gameboard.erase()
                    fillGrid()
                } else {
                    winner = player2.getName()
                    alert(`Player ${winner} has won the game!`)
                    Gameboard.erase()
                    fillGrid()
                }
              }
        }
      
    }
  
    // Check columns
    for (let i = 0; i < 3; i+= 1) {
        if (Gameboard.gameBoard[i] !== '' && Gameboard.gameBoard[i + 3] !== '' && Gameboard.gameBoard[i + 6] !== ''){
            if (Gameboard.gameBoard[i] === Gameboard.gameBoard[i + 3] && Gameboard.gameBoard[i + 3] === Gameboard.gameBoard[i + 6]) {
                if (Gameboard.gameBoard[i] === player1.getMarker()){
                    winner = player1.getName()
                    alert(`Player ${winner} has won the game!`)
                    Gameboard.erase()
                    fillGrid()
                } else {
                    winner = player2.getName()
                    alert(`Player ${winner} has won the game!`)
                    Gameboard.erase()
                    fillGrid()
                }
              }
        }
    }
  
    // Check diagonal (top-left to bottom-right)
    if (Gameboard.gameBoard[0] !== '' && Gameboard.gameBoard[4] !== '' && Gameboard.gameBoard[8] !== ''){
        if (Gameboard.gameBoard[0] === Gameboard.gameBoard[4] && Gameboard.gameBoard[4] === Gameboard.gameBoard[8]) {
            if (Gameboard.gameBoard[0] === player1.getMarker()){
                winner = player1.getName()
                alert(`Player ${winner} has won the game!`)
                Gameboard.erase()
                fillGrid()
            } else {
                winner = player2.getName()
                alert(`Player ${winner} has won the game!`)
                Gameboard.erase()
                fillGrid()
            }
        }
    }
    
  
    // Check diagonal (top-right to bottom-left)
    if (Gameboard.gameBoard[2] !== '' && Gameboard.gameBoard[4] !== '' && Gameboard.gameBoard[6] !== ''){
        if (Gameboard.gameBoard[2] === Gameboard.gameBoard[4] && Gameboard.gameBoard[4] === Gameboard.gameBoard[6]) {
            if (Gameboard.gameBoard[2] === player1.getMarker()){
                winner = player1.getName()
                alert(`Player ${winner} has won the game!`)
                Gameboard.erase()
                fillGrid()
            } else {
                winner = player2.getName()
                alert(`Player ${winner} has won the game!`)
                Gameboard.erase()
                fillGrid()
            }
        }
    }
    
  
    // No winner
     if ((Gameboard.gameBoard[0] !== '' && Gameboard.gameBoard[1] !== '' && Gameboard.gameBoard[2] !== '' && Gameboard.gameBoard[3] !== '' && Gameboard.gameBoard[4] !== '' && Gameboard.gameBoard[5] !== '' && Gameboard.gameBoard[6] !== '' && Gameboard.gameBoard[7] !== '' && Gameboard.gameBoard[8] !== '' && count >= 9)){
         alert( `it's a tie!`)
         Gameboard.erase()
         fillGrid()
     }
  }
  
  

function play(){

    tiles.forEach(tile => tile.addEventListener('click', () => {
        if (tile.textContent === ''){
            if (player1.turn === true ) {
                tile.textContent = player1.getMarker()
                Gameboard.gameBoard[tile.id] = tile.textContent
                player1.turn = false
                player2.turn = true
                fillGrid()
                count += 1
                winHandle()
            }
            else {
                tile.textContent = player2.getMarker()
                Gameboard.gameBoard[tile.id] = tile.textContent
                player1.turn = true
                player2.turn = false
                fillGrid()
                count += 1
                winHandle()
            }
        }}))

        }
        


startbtn.addEventListener('click', (e) => {
    const name1 = document.getElementById('player1_name')
    const name2 = document.getElementById('player2_name')


    player1 = Player(name1.value, 'X', true)
    player2 = Player(name2.value, 'O', false)


    playerform.style.display = 'none'
    playbtn.style.display = 'none'

    play()

    if(e.preventDefault){e.preventDefault()}else{e.returnValue=false}

})


