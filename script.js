const cells = document.querySelectorAll(".cell");
const statusText = document.getElementById("status");
const resetBtn = document.getElementById("reset");

let currentPlayer = "X";
let gameActive = true;

const winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

function checkWinner() {

    for (let pattern of winPatterns) {

        let a = cells[pattern[0]].textContent;
        let b = cells[pattern[1]].textContent;
        let c = cells[pattern[2]].textContent;

        if (a === "" || b === "" || c === "") {
            continue;
        }

        if (a === b && b === c) {
            statusText.textContent = `${a} Wins!`;
            gameActive = false;
            return;
        }
    }
}

cells.forEach(cell => {

    cell.addEventListener("click", () => {

        if (!gameActive || cell.textContent !== "") {
            return;
        }

        cell.textContent = currentPlayer;

        checkWinner();

        if (!gameActive) {
            return;
        }

        currentPlayer = currentPlayer === "X" ? "O" : "X";

        statusText.textContent = `Player ${currentPlayer}'s Turn`;
    });

});