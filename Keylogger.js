let keyCounts = {};

window.addEventListener("keyup", eventHandler);

function eventHandler(event) {
    let key = event.key.toLowerCase();

    if (!keyCounts[key]) {
        keyCounts[key] = 0;
    }

    keyCounts[key]++;

    console.clear();
    console.log("Key Counts:");
    for (let k in keyCounts) {
        console.log(k + ": " + keyCounts[k]);
    }


    // Spacebar pressed 5 times → change background color
    if (key === " " && keyCounts[key] === 5) {
        document.body.style.setProperty("background-color", "lightblue");
    }

    // "c" pressed 8 times → change text color
    if (key === "c" && keyCounts[key] === 8) {
        document.body.style.setProperty("color", "darkred");
    }

    // "e" pressed 3 times → change header background
    if (key === "e" && keyCounts[key] === 3) {
        let header = document.querySelector(".hero");
        if (header) {
            header.style.setProperty("background-color", "gold");
        }
    }

    // "s" pressed 6 times → increase font size
    if (key === "s" && keyCounts[key] === 6) {
        document.body.style.setProperty("font-size", "20px");
    }
}
console.log("Keylogger initialized. Press keys to see counts and trigger changes."); 
console.log("Press spacebar 5 times to change background color.");
console.log("Press 'c' 8 times to change text color.");
console.log("Press 'e' 3 times to change header background.");
console.log("Press 's' 6 times to increase font size.");    
console.log("Open the console to see key counts and changes.");
