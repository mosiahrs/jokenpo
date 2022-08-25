const playBtn = document.querySelector('#playBtn')
const restarBtn = document.querySelector('#restartBtn')
const result = document.querySelector('#result')
let player1 = document.getElementById('player1Options');
let player2 = document.getElementById('player2Result')
let player1Value = player1.value;
let player2Value = ["pedra", "papel", "tesoura"]

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function resetGame(){
    document.location.reload(true);
}

function ocultarMostrarBtn(){
    playBtn.classList.add("ocultar")
    restarBtn.classList.remove("ocultar")
}

// console.log(player2Value[getRandomInt(3)]); //teste de aleatoriedade


function gameRule() {
    if (player1.value === "pedra" && player2Value[getRandomInt(3)] === "papel") {
        player2.innerHTML = `<p> papel </p>`;
        result.textContent = "Player 2 venceu!!";
        ocultarMostrarBtn();

    } else if (player2Value[getRandomInt(3)] === "pedra" && player1.value === "papel") {
        player2.innerHTML = `<p> pedra </p>`;
        result.textContent = 'Player 1 venceu!!';
        ocultarMostrarBtn();

    } else if (player1.value === "papel" && player2Value[getRandomInt(3)] === "tesoura") {
        player2.innerHTML = `<p> tesoura </p>`;
        result.textContent = 'Player 2 venceu!!';
        ocultarMostrarBtn();

    } else if (player2Value[getRandomInt(3)] === "papel" && player1.value === "tesoura") {
        player2.innerHTML = `<p> papel </p>`;
        result.textContent = 'Player 1 venceu!!';
        ocultarMostrarBtn();

    } else if (player1.value === "tesoura" && player2Value[getRandomInt(3)] === "pedra") {
        player2.innerHTML = `<p> pedra </p>`;
        result.textContent = 'Player 2 venceu!!';
        ocultarMostrarBtn();

    } else if (player2Value[getRandomInt(3)] === "tesoura" && player1.value === "pedra") {
        player2.innerHTML = `<p> tesoura </p>`;
        result.textContent = 'Player 1 venceu!!';
        ocultarMostrarBtn();

    } else {
        result.textContent = 'ninguem venceu!!';
        ocultarMostrarBtn();

    }
}






