let keyCounts = {};

window.addEventListener("keyup", function(event) {
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
    
    if (key === "a" && keyCounts[key] === 5) {
        document.body.style.setProperty("border", "10px solid purple");
    }

    if (key === "s" && keyCounts[key] === 4) {
        document.body.style.setProperty("font-family", "cursive");
    }

    if (key === "d" && keyCounts[key] === 6) {
        let cards = document.querySelectorAll(".card");
        cards.forEach(card => {
            card.style.setProperty("box-shadow", "10px 10px 20px gray");
        });
    }

    if (key === "f" && keyCounts[key] === 3) {
        document.body.style.setProperty("background-color", "black");
        document.body.style.setProperty("color", "lime");
    }

    if (key === "enter" && keyCounts[key] === 2) {
        document.body.style.setProperty("text-align", "center");
    }
});