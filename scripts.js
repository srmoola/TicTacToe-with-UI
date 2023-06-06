const scoreText1 = document.getElementById("scoreText");
const scoreText2 = document.getElementById("scoreText2");
const score1 = document.getElementById("score1");
const score2 = document.getElementById("score2");
const overlay = document.getElementById("overlay");
const loadText = document.getElementById("loadText");

let switchPlayer = 2;
const array = [["", "", ""], ["", "", ""], ["", "", ""]];


function resetBoard() {

    for (i = 0; i < 3; i++) {
        for (j = 0; j < 3; j++) {
            array[i][j] = "";
        }
    }

    for (i = 1; i < 10; i++) {

        const cell = document.getElementById("cell" + i + "div");
        const cellImage = document.getElementById("cell" + i);
        cell.setAttribute("onclick", "cell" + i + "()");
        cell.style.cursor = "pointer";
        cellImage.src = "images/question.png";


    }

    scoreText2.src = "images/red.png";
    scoreText1.src = "images/green.png";

    switchPlayer = 2;
    overlay.style.display = "none";

}

function addScore() {

    let player1score = 0;
    let player2score = 0;

    if (switchPlayer === 2) {
        player2score++;
        score2.innerText = "Score: " + player2score;
    }
    else {
        player1score++;
        score1.innerText = "Score: " + player1score;
    }
}

function unselectAll() {
    for (i = 1; i < 10; i++) {
        const cell = document.getElementById("cell" + i + "div");
        cell.removeAttribute("onclick");
        cell.style.cursor = "default";
    }

    overlay.style.display = "block";
}

function switchImages(cell) {
    const cellNum = document.getElementById("cell" + cell);
    const cellDiv = document.getElementById("cell" + cell + "div");
    if (switchPlayer === 2) {
        cellNum.src = "images/X.png";
        cellDiv.removeAttribute("onclick");
        cellDiv.style.cursor = "default";
        scoreText2.src = "images/green.png";
        scoreText1.src = "images/red.png";
    } else {
        cellNum.src = "images/O.png";
        cellDiv.removeAttribute("onclick");
        cellDiv.style.cursor = "default";
        scoreText1.src = "images/green.png";
        scoreText2.src = "images/red.png";
    }
}

function main(numrow, numcol) {

    if (checkEmpty(array) === true) {
        if (switchPlayer === 2) {
            row = numrow
            column = numcol
            array[+row][+column] = "X";
            switchPlayer = 1;
        }
        else {
            row = numrow
            column = numcol
            array[+row][+column] = "O";
            switchPlayer = 2
        }
    }

    if (checkHorizontal(array) === true) {
        addScore();
        loadText.innerHTML = "Player " + switchPlayer + " wins!";
        unselectAll();
        return;
    } else if (checkVertical(array) === true) {
        addScore();
        loadText.innerHTML = "Player " + switchPlayer + " wins!";
        unselectAll();
        return;
    } else if (checkDiagonal(array) === true) {
        addScore();
        loadText.innerHTML = "Player " + switchPlayer + " wins!";
        unselectAll();
        return;
    }

    if (checkEmpty(array) === false) {
        console.log("Its a tie");
        loadText.innerHTML = "Next Round";
        unselectAll();
        return;
    }

}

function cell1() {
    const cell = 1;
    switchImages(cell);

    let numrow = 0;
    let numcol = 0;
    main(numrow, numcol);


}

function cell2() {
    const cell = 2;
    switchImages(cell);

    let numrow = 1;
    let numcol = 0;
    main(numrow, numcol);


}

function cell3() {
    const cell = 3;
    switchImages(cell);

    let numrow = 2;
    let numcol = 0;
    main(numrow, numcol);


}

function cell4() {
    const cell = 4;
    switchImages(cell);

    let numrow = 0;
    let numcol = 1;
    main(numrow, numcol);


}

function cell5() {
    const cell = 5;
    switchImages(cell);

    let numrow = 1;
    let numcol = 1;
    main(numrow, numcol);


}

function cell6() {
    const cell = 6;
    switchImages(cell);

    let numrow = 2;
    let numcol = 1;
    main(numrow, numcol);


}

function cell7() {
    const cell = 7;
    switchImages(cell);

    let numrow = 0;
    let numcol = 2;
    main(numrow, numcol);


}

function cell8() {
    const cell = 8;
    switchImages(cell);

    let numrow = 1;
    let numcol = 2;
    main(numrow, numcol);


}

function cell9() {
    const cell = 9;
    switchImages(cell);

    let numrow = 2;
    let numcol = 2;
    main(numrow, numcol);


}

