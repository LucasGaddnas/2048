var boardSize = 4;
var squareSize = 60;
var boardPoints = math.zeros(boardSize, boardSize);

//#setting up the board
const createBoard = function() {

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

const newPoint = function() {
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

const movePointsv = function(direction) {
    boardPoints.forEach(function(value, index) {
        if (value > 0) {
            /*while (index == 0) {
                index.push(index[0, 0]);
            }*/
            console.log(index);
        }
    })
}

window.onload = function() {
    this.createBoard();
    this.newPoint();
    this.newPoint();
}

document.addEventListener("keydown", function(event) {
    switch (event.keyCode) {
        case 37: //left
            movePoints("left");
            newPoint();
            break;
        case 38: //up
            newPoint();
            break;
        case 39: //right
            movePoints("right");
            newPoint();
            break;
        case 40: //down
            newPoint();
            break;
    }
});