document.getElementById("rollBtn").addEventListener("click", function () {
    const dice = document.getElementById("dice");
    const numberDisplay = document.getElementById("numberDisplay");

    // Add animation class
    dice.classList.add("roll");

    // Wait for animation to finish (600ms)
    setTimeout(() => {
        const roll = Math.floor(Math.random() * 6) + 1;

        // Update dice image
        dice.src = `dice${roll}.png`;

        // Update number display
        numberDisplay.textContent = `You rolled: ${roll}`;

        // Remove animation class so it can play again next time
        dice.classList.remove("roll");
    }, 600);
});
