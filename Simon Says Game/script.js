let userSeq = [];
let gameSeq = [];

let color = ["red", "green", "yellow", "blue"];
let level = 0;
let started = false;
let highScore = 0;

let body = document.querySelector("body");
let h2 = document.querySelector("h2");
let allBtns = document.querySelectorAll(".btn");

document.addEventListener("keypress", () => {
    if (started === false) {
        started = true;
        levelUp();
    }
})

function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(() => { btn.classList.remove("flash") }, 250);
}

function userBtnFlash(btn) {
    btn.classList.add("userFlash");
    setTimeout(() => { btn.classList.remove("userFlash") }, 250);
}

function levelUp() {
    userSeq = [];
    level++;
    highScore++;
    h2.innerHTML = `<div><h2>Level ${level}</h2>Highest score = ${highScore - 1}</div>`;

    // Choosing a random color button to flash
    let idx = Math.floor(Math.random() * 4);
    let randColor = color[idx];
    let btn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);

    setTimeout(() => {
        btnFlash(btn);
    }, 500);
}

for (const btn of allBtns) {
    btn.addEventListener("click", btnPress);
}

function btnPress() {
    let btn = this;
    userBtnFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    colorCheck(userSeq.length - 1)
}

function colorCheck(idx) {
    if (userSeq[idx] === gameSeq[idx]) {
        if (userSeq.length == gameSeq.length) {
            levelUp();
        }
    } else {
        h2.innerHTML = `<div><h3>Game Over! Your Score is ${level - 1}.</h3><p>Highest score = ${highScore - 1}</p>Press any key to start again</div>`;
        started = false;
        level = 0;
        gameSeq = [];
        body.classList.add("gameOver");
        setTimeout(() => {
            body.classList.remove("gameOver");
        }, 250);
    }
}