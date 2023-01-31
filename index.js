const Player = (name, marker) => {
    const getName  = () => name;
    return {name, marker}
}

const Gameboard = (() => {
    let gameBoard = ['X','X','O','X','O','O','X','O','X']
    return {gameBoard}
})()