const cell = document.querySelectorAll('table tr td');
let counter = 0;
const playerOneWin = 'Player One Win "X"';
const playerTwoWin = 'Player Two Win "O"';
function win() {
  // For "O";
  if (cell[0].innerHTML === "O" && cell[1].innerHTML === "O" && cell[2].innerHTML === "O") {
    alert(playerTwoWin); location.reload();
  } if (cell[3].innerHTML === "O" && cell[4].innerHTML === "O" && cell[5].innerHTML === "O") {
    alert(playerTwoWin); location.reload();
  } if (cell[6].innerHTML === "O" && cell[7].innerHTML === "O" && cell[8].innerHTML === "O") {
    alert(playerTwoWin); location.reload();
  } if (cell[0].innerHTML === "O" && cell[4].innerHTML === "O" && cell[8].innerHTML === "O") {
    alert(playerTwoWin); location.reload();
  } if (cell[2].innerHTML === "O" && cell[4].innerHTML === "O" && cell[6].innerHTML === "O") {
    alert(playerTwoWin); location.reload();
  } if (cell[0].innerHTML === "O" && cell[3].innerHTML === "O" && cell[6].innerHTML === "O") {
    alert(playerTwoWin); location.reload();
  } if (cell[1].innerHTML === "O" && cell[4].innerHTML === "O" && cell[7].innerHTML === "O") {
    alert(playerTwoWin); location.reload();
  } if (cell[2].innerHTML === "O" && cell[5].innerHTML === "O" && cell[8].innerHTML === "O") {
    alert(playerTwoWin); location.reload();
  }
  // For "X";
  if (cell[0].innerHTML === "X" && cell[1].innerHTML === "X" && cell[2].innerHTML === "X") {
    alert(playerOneWin); location.reload();
  } if (cell[3].innerHTML === "X" && cell[4].innerHTML === "X" && cell[5].innerHTML === "X") {
    alert(playerOneWin); location.reload();
  } if (cell[6].innerHTML === "X" && cell[7].innerHTML === "X" && cell[8].innerHTML === "X") {
    alert(playerOneWin); location.reload();
  } if (cell[0].innerHTML === "X" && cell[4].innerHTML === "X" && cell[8].innerHTML === "X") {
    alert(playerOneWin); location.reload();
  } if (cell[2].innerHTML === "X" && cell[4].innerHTML === "X" && cell[6].innerHTML === "X") {
    alert(playerOneWin); location.reload();
  } if (cell[0].innerHTML === "X" && cell[3].innerHTML === "X" && cell[6].innerHTML === "X") {
    alert(playerOneWin); location.reload();
  } if (cell[1].innerHTML === "X" && cell[4].innerHTML === "X" && cell[7].innerHTML === "X") {
    alert(playerOneWin); location.reload();
  } if (cell[2].innerHTML === "X" && cell[5].innerHTML === "X" && cell[8].innerHTML === "X") {
    alert(playerOneWin); location.reload();
  }
}
function performAction() {
  if (this.innerHTML === "") {
    this.innerHTML = "X";
    this.style.color = "#27ae60";
  } else if (this.innerHTML === "X") {
    this.innerHTML = "O";
    this.style.color = "red";
  } else if (this.innerHTML === "O") {
    this.innerHTML = "";
  }
  setTimeout(win, 3000);
}
for (counter = 0; counter < cell.length; counter++) {
  cell[counter].addEventListener('click', performAction);
}
