function startBattle() {
    const armyChoice = document.getElementById("armyChoice").value.toLowerCase(); // Convert input to lowercase for case-insensitivity
    const army = ["bowman", "swordsman", "horseman"]; // Change army options to lowercase
    const enemy = army[Math.floor(Math.random() * army.length)];

    let resultMessage = "";

    if (!army.includes(armyChoice)) { // Check if the user's input is valid
        resultMessage = "Invalid input. Please choose Bowman, Swordsman, or Horseman.";
    } else if (armyChoice === enemy) {
        resultMessage = `Both armies were matched. No ${armyChoice} survived the encounter...`;
    } else if (armyChoice === "bowman") {
        if (enemy === "horseman") {
            resultMessage = "Bowmen shot down all incoming horsemen, victory!";
        } else {
            resultMessage = "Our arrows did little to their swordsmen. We got cut down, defeat...";
        }
    } else if (armyChoice === "swordsman") {
        if (enemy === "bowman") {
            resultMessage = "We used our shield to charge their bowmen. We left none alive, victory!";
        } else {
            resultMessage = "We got trampled beneath the hoofs of their horsemen, defeat...";
        }
    } else if (armyChoice === "horseman") {
        if (enemy === "swordsman") {
            resultMessage = "We crushed them beneath us and left none alive. Victory!";
        } else {
            resultMessage = "We did not see their ambush and got shot to pieces, defeat...";
        }
    }

    document.getElementById("battleResult").innerText = resultMessage;
    document.getElementById("gameContainer").classList.add("battle-ended");
}

function playAgain() {
    document.getElementById("armyChoice").value = "";
    document.getElementById("battleResult").innerText = "";
    document.getElementById("gameContainer").classList.remove("battle-ended");
}
