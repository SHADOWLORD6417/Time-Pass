let userSeq = [];
let gameSeq = [];

let color = ["yellow", "red", "purple", "green"];

let level = 0;
let started = false;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", () => {
    if (started === false) {
        started = true;
        levelUp();
        console.log("Game started!");
    }
})

function levelUp() {
    level++;
    h2.innerText = `Level ${level}`;

    // Choosing a random color button to flash
    btnFlash();
}

function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(btn.classList.remove('flash'), 1000);
}