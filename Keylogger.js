// Object to track key counts
let keyCounts = {};

// Event listener for key presses
window.addEventListener("keyup", eventHandler);

function eventHandler(event) {
    let key = event.key.toLowerCase();

    // Add key to object if it doesn't exist
    if (!keyCounts[key]) {
        keyCounts[key] = 0;
    }

    // Increment count
    keyCounts[key]++;

    // Display all key counts using a for-loop
    console.clear();
    console.log("Key Counts:");
    for (let k in keyCounts) {
        console.log(k + ": " + keyCounts[k]);
    }


    // Spacebar pressed 5 times → change background color
    if (key === " " && keyCounts[key] === 5) {
        document.body.style.setProperty("background-color", "lightblue");
    }

    // "e" pressed 8 times → change text color
    if (key === "e" && keyCounts[key] === 8) {
        document.body.style.setProperty("color", "darkred");
    }

    // "h" pressed 3 times → change header background
    if (key === "h" && keyCounts[key] === 3) {
        let header = document.querySelector(".hero");
        if (header) {
            header.style.setProperty("background-color", "gold");
        }
    }

    // "r" pressed 6 times → increase font size
    if (key === "r" && keyCounts[key] === 6) {
        document.body.style.setProperty("font-size", "20px");
    }
}