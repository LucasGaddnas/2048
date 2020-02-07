var boardSize = 4;
var squareSize = 60;
var boardPoints = math.zeros(boardSize, boardSize);

//#setting up the board
function createBoard() {

    //creates the squares on the board
    for (let i = 0; i < Math.pow(boardSize, 2); i++) {
        let square = document.createElement("div");
        square.setAttribute("class", "boardsqr");
        document.getElementById("board").appendChild(square);
    }

     //sets the size of the squares
    let squareWidth = document.getElementsByClassName("boardsqr");
    for (let i = 0; i < squareWidth.length; i++) {
        squareWidth[i].style.width = squareSize + "pt";  
        squareWidth[i].style.height = squareSize + "pt";
    }
}

function newPoint() {
    //creates a new point
    let point = document.createElement("div");
    point.setAttribute("class", "pointsqr");
    point.style.width = squareSize + "pt";  
    point.style.height = squareSize + "pt";

    //randomly positions the point
    while (true) {
        let rowPosition = Math.floor(Math.random() * boardSize);
        let colPosition = Math.floor(Math.random() * boardSize);
        if (boardPoints.subset(math.index(rowPosition, colPosition)) == 0) {
            point.style.gridArea = (rowPosition + 1) + "/" + (colPosition + 1);
            let board = document.getElementById("board");
            board.appendChild(point);
            boardPoints.subset(math.index(rowPosition, colPosition), 1);
            break;
        }
    }
}

document.addEventListener("keydown", function(event) {
    switch (event.keyCode) {
        case 37: //left

            break;
        case 38: //up

            break;
        case 39: //right

            break;
        case 40: //down

            break;
    }
});

window.onload = function() {
    this.createBoard();
    this.newPoint();
    this.newPoint();
}