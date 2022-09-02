/** Connect Four
 *
 * Player 1 and 2 alternate turns. On each turn, a piece is dropped down a
 * column until a player gets four-in-a-row (horiz, vert, or diag) or until
 * board fills (tie)
 */

const WIDTH = 7;
const HEIGHT = 6;

let currPlayer = 1; // active player: 1 or 2
var board = []; // array of rows, each row is array of cells  (board[y][x])

/** makeBoard: create in-JS board structure:
 *    board = array of rows, each row is array of cells  (board[y][x])
 */

function makeBoard() {
  
  for (let count1 = 0; count1 < HEIGHT; count1++){ //Repeats equal to the Height variable, creating a new row each time it runs

    newRow = [];
    for (let count2 = 0; count2 < WIDTH; count2++) {//Repeats equal to the Width variable, creating a new column each time it runs
      newRow.push(null);
    }

    board.push(newRow);
    
  }


}

/** makeHtmlBoard: make HTML table and row of column tops. */



function makeHtmlBoard() {
  // get "htmlBoard" letiable from the item in HTML w/ID of "board"
  htmlBoard = document.querySelector("#board");
  // TODO: add comment for this code

  //Create a new table row element
  let top = document.createElement("tr");
  //Add identifier ID
  top.setAttribute("id", "column-top");
  //Add functionality on click
  top.addEventListener("click", handleClick);

  //Repeats equal to the number in width
  for (let x = 0; x < WIDTH; x++) {

    //Creates a new table element, defines it, adds it to the table
    let headCell = document.createElement("td");
    headCell.setAttribute("id", x);
    top.append(headCell);
  
  }
  /*Adds the created table row to the table; the created row will be a top row, 
  added in addition to the number of rows listed in height, with onclick functionality
  that will drop a piece into the board when it's clicked on.*/
  htmlBoard.append(top);

  /*This forloop will then make the rest of the table, with the outer forloop making 
  rows and the inner forloop making columns*/
  for (let y = 0; y < HEIGHT; y++) {
    const row = document.createElement("tr");
    for (let x = 0; x < WIDTH; x++) {
      const cell = document.createElement("td");
      cell.setAttribute("id", `${y}-${x}`);
      row.append(cell);
    }
    htmlBoard.append(row);
  }
}



/** findSpotForCol: given column x, return top empty y (null if filled) */

function findSpotForCol(x) {
  // TODO: Test

  //Should return the next available row in a given column, unless
  //there are no available rows, in which case it should return
  //null.
  for (count1 = HEIGHT - 1; count1 > -1; count1--){
    if(board[count1][x] == null){
      return count1 + 1;
    }
  }

  return null;
}

/** placeInTable: update DOM to place piece into HTML table of board */

function placeInTable(y, x) {
  // TODO: make a div and insert into correct table cell
  newPiece = document.createElement("div");
  newPiece.setAttribute("class","piece");
  
  if(currPlayer == 1) {
    newPiece.setAttribute("class","player1 piece");
  }
  if(currPlayer == 2) {
    newPiece.setAttribute("class","player2 piece");
  }

  console.log("I've created a new piece!");

  //reminder: x is row, y is column

  givenRow = document.querySelectorAll("tr")[y]

  givenCell = givenRow.children[x];

  givenCell.append(newPiece);

  console.log(givenCell);

}

/** endGame: announce game end */

function endGame(msg) {
  // TODO: pop up alert message
  alert(msg);
}

/** handleClick: handle click of column top to play piece */

function handleClick(evt) {
  // get x from ID of clicked cell
  let x = +evt.target.id;

  // get next spot in column (if none, ignore click)
  let y = findSpotForCol(x);
  if (y === null) {
    return;
  }

  // place piece in board and add to HTML table
  // TODO: add line to update in-memory board
  placeInTable(y, x);
  board[y -  1][x] = currPlayer;

  // check for win
  if (checkForWin()) {
    console.log("win detected, 4 in a row");
    return endGame(`Player ${currPlayer} won!`);
  }

  // check for tie
  // Untested
  if (board[1].every((cell) => {
    return (cell != null);
  })) {
    console.log("Tie detected, all slots in top row filled");
    endGame("It's a tie...");
  };


  // switch players
  if(currPlayer == 1) {
    currPlayer = 2;
  }
  else{
    currPlayer = 1;
  }
}

/** checkForWin: check board cell-by-cell for "does a win start here?" */

function checkForWin() {
  function _win(cells) {
    // Check four cells to see if they're all color of current player
    //  - cells: list of four (y, x) cells
    //  - returns true if all are legal coordinates & all match currPlayer

    return cells.every(
      ([y, x]) =>
        y >= 0 &&
        y < HEIGHT &&
        x >= 0 &&
        x < WIDTH &&
        board[y][x] === currPlayer
    );
  }

  // TODO: read and understand this code. Add comments to help you.

  for (let y = 0; y < HEIGHT; y++) {
    for (let x = 0; x < WIDTH; x++) {
      let horiz = [[y, x], [y, x + 1], [y, x + 2], [y, x + 3]];
      let vert = [[y, x], [y + 1, x], [y + 2, x], [y + 3, x]];
      let diagDR = [[y, x], [y + 1, x + 1], [y + 2, x + 2], [y + 3, x + 3]];
      let diagDL = [[y, x], [y + 1, x - 1], [y + 2, x - 2], [y + 3, x - 3]];

      if (_win(horiz) || _win(vert) || _win(diagDR) || _win(diagDL)) {
        return true;
      }
    }
  }
}

makeBoard();
makeHtmlBoard();
