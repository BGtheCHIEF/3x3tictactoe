document.addEventListener('DOMContentLoaded', () => {
    
    addElementsToHTML()

    game();

});

const addElementsToHTML = () => {

    const body = document.body;


    const header = document.createElement('header');
    header.setAttribute('id', 'header');
    body.appendChild(header);


    const h1 = document.createElement('h1');
    h1.setAttribute('id', 'titleOfThePage');
    h1.textContent = "TicTacToe 3x3";
    header.appendChild(h1);

    
    const board = document.createElement('div');
    board.setAttribute('id', 'board');
    body.appendChild(board);

    
    for (let i = 0; i < 9; i++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.dataset.index = i + 1;
        board.appendChild(cell);
    }
};

const game = () => {

    const cell = document.getElementsByClassName('cell');
    const elementsArray = Array.from(cell);

    let xPlayerTurn = true;

    cell.addEventListener('click', () => {
        
        const element = click.target;

        if(xPlayerTurn == true)
        {
            element.textContent = "X";
            xPlayerTurn = false;
        }
        else if(xPlayerTurn == false)
        {
            element.textContent = "O";
            xPlayerTurn = true;
        }
    });

    

};




//cell.addEventListener("click", () => handleCellClick(cell));

// const handleCellClick = () => {

//     // let cella = document.getElementsByClassName('cell');
//     const cell = document.querySelectorAll('.cell');
//     const elementsArray = Array.from(elements);

//     let xPlayersTurn = true;
//     let oPlayersTurn = false;
//     let isGameActive = true;
//     let winner = 'jatekos';

//     if(isGameActive == true)
//     {
//             if (cell.textContent === "" && xPlayersTurn == true) 
//             {
//                 cell.textContent = "X";
//                 xPlayersTurn = false;
//                 oPlayersTurn = true;
//             } else if (cell.textContent === "" && oPlayersTurn == true) 
//             {
//                 cell.textContent = "O";
//                 oPlayersTurn = false;
//                 xPlayersTurn = false;
//             } 
//     }   
//     else
//     {
//         if(winner == 'X')
//         {
//             console.log(`Az X játékos nyert. `)
//         }
//         else if(winner == 'O')
//         {
//             console.log(`Az O játékos nyert. `)
//         }  
//     }
// }