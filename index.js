const playbtn = document.getElementById('play')
const playerform = document.querySelector('form')
const closebtn = document.getElementById('close')
const startbtn = document.getElementById('startbtn')

let player1 
let player2 

const Player = (name, marker) => {
    const getName  = () => name;
    return {name, marker, getName}
}


const Gameboard = (() => {
    let gameBoard = ['X','X','O','X','O','O','X','O','X']
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

