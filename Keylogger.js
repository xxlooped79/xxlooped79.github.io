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

    if (key === " " && keyCounts[key] === 5) {
        document.body.style.setProperty("background-color", "lightblue");
    }

    if (key === "e" && keyCounts[key] === 8) {
        document.body.style.setProperty("color", "darkred");
    }

    if (key === "h" && keyCounts[key] === 3) {
        let header = document.querySelector(".hero");
        if (header) {
            header.style.setProperty("background-color", "gold");
        }
    }

    if (key === "r" && keyCounts[key] === 6) {
        document.body.style.setProperty("font-size", "20px");
    }
}