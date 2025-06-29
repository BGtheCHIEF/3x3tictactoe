document.addEventListener('DOMContentLoaded', () => {
    addElementsToHTML();
    modal();
    game();
});

const modal = () => {
    const modal = document.getElementById("myModal");
    const closeButton = document.querySelector(".close");

    modal.style.display = "block";

    closeButton.onclick = function () {
        modal.style.display = "none";
    };

    window.onclick = function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    };
};

// Globális változók
let board = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let isGameActive = true;

const addElementsToHTML = () => {
    const body = document.body;

    const divForModal1 = document.createElement('div');
    divForModal1.setAttribute('id', 'myModal');
    divForModal1.setAttribute('class', 'modal');

    const divForModal2 = document.createElement('div');
    divForModal2.setAttribute('class', 'modal-content');

    const spanForModal = document.createElement('span');
    spanForModal.setAttribute('class', 'close');
    spanForModal.textContent = "X";

    const pForModal = document.createElement('p');
    pForModal.setAttribute('id', 'pForModal');
    pForModal.textContent = "Örülök, hogy játszol eme remekművel. Sok sikert, előre, baszódj meg!";

    body.appendChild(divForModal1);
    divForModal1.appendChild(divForModal2);
    divForModal2.appendChild(spanForModal);
    divForModal2.appendChild(pForModal);

    // Fejléc létrehozása
    const header = document.createElement('header');
    header.setAttribute('id', 'header');
    body.appendChild(header);

    const ul = document.createElement('ul');
    ul.setAttribute('id', 'unorderedList');
    header.appendChild(ul);
    
    const li = document.createElement('li');
    li.setAttribute('id', 'listItemForUl');

    const link = document.createElement('a');
    link.href = "https://www.youtube.com/watch?v=tgMUkQiokQg";
    //link.href = "https://www.instagram.com/paradesorient/";
    link.target = "_blank";
    link.textContent = "Nem Alex csinálta ;)";
    li.appendChild(link);
    ul.appendChild(li);

    const h1 = document.createElement('h1');
    h1.setAttribute('id', 'titleOfThePage');
    h1.setAttribute('class', 'link-70');
    h1.textContent = "TicTacToe 3x3";
    header.appendChild(h1);

    // A tábla létrehozása
    const board = document.createElement('div');
    board.setAttribute('id', 'board');
    body.appendChild(board);

    // 9 mező létrehozása a táblához
    for (let i = 0; i < 9; i++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.dataset.index = i + 1;
        board.appendChild(cell);
    }

    // Státusz szöveg és új játék gomb
    const status = document.createElement('p');
    status.setAttribute('id', 'status');
    body.appendChild(status);

    const resetButton = document.createElement('button');
    resetButton.textContent = "Új játék";
    resetButton.setAttribute('class', 'button');
    resetButton.setAttribute('role', 'button');
    resetButton.addEventListener('click', resetGame);
    body.appendChild(resetButton);
};

const game = () => {
    const cells = document.getElementsByClassName('cell');
    const statusElement = document.getElementById('status');

    // A cellák eseménykezelése
    Array.from(cells).forEach(cell => {
        cell.addEventListener('click', () => {
            if (cell.textContent !== "" || !isGameActive) return;

            cell.textContent = currentPlayer;
            board[cell.dataset.index - 1] = currentPlayer;

            if (checkWinner(board, currentPlayer)) {
                statusElement.textContent = `${currentPlayer} nyert!`;
                isGameActive = false;
            } else if (board.every(cell => cell !== "")) {
                statusElement.textContent = "Döntetlen!";
                isGameActive = false;
            } else {
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
                statusElement.textContent = `${currentPlayer} következik`;
            }
        });
    });
};

const checkWinner = (board, player) => {
    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (const combination of winningCombinations) {
        const [a, b, c] = combination;
        if (board[a] === player && board[b] === player && board[c] === player) {
            return true;
        }
    }
    return false;
};

const resetGame = () => {
    const cells = document.getElementsByClassName('cell');
    const statusElement = document.getElementById('status');

    // Táblát és állapotokat töröljük
    board = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'X';
    isGameActive = true;

    // Minden mező törlése
    Array.from(cells).forEach(cell => {
        cell.textContent = '';
    });

    // Új játék üzenet
    statusElement.textContent = `${currentPlayer} következik`;
};