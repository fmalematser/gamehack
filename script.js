let currentGame = "";
let playerID = "";
let amount = 0;

function startProcess(game) {
    currentGame = game;
    document.getElementById("home").style.display = "none";
    document.getElementById("process").style.display = "block";
}

function confirmID() {
    playerID = document.getElementById("playerId").value;
    if (playerID) {
        document.getElementById("process").style.display = "none";
        document.getElementById("confirmation").style.display = "block";
        document.getElementById("displayID").innerText = "Your entered ID: " + playerID;
    }
}

function nextStep() {
    document.getElementById("confirmation").style.display = "none";
    document.getElementById("amount").style.display = "block";
}

function processTransaction() {
    amount = document.getElementById("amountInput").value;
    if (amount && amount > 0) {
        document.getElementById("amount").style.display = "none";
        document.getElementById("loading").style.display = "block";
        setTimeout(() => {
            document.getElementById("loading").style.display = "none";
            document.getElementById("result").style.display = "block";
        }, 10000);
    }
}
