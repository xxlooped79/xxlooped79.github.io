let user = prompt("What is your name?");
let score = 0;

console.log("Welcome, " + user + ", to the Fighting Irish Championship Simulation.");
console.log("Your decisions will determine the outcome of the game.\n");

let role = prompt("Do you start on OFFENSE or DEFENSE?").toLowerCase();

function showScore() {
    console.log("Current Score Impact: " + score + "\n");
}

if (role === "offense") {
    console.log("\nDrive 1: You take the field as quarterback.");

    let play1 = prompt("1st & 10: Do you PASS or RUN?").toLowerCase();

    if (play1 === "pass") {
        console.log("Complete pass! 15 yards.");
        score += 2;
    } else {
        console.log("Solid run. 5 yards.");
        score += 1;
    }
    showScore();

    let play2 = prompt("3rd & short: Do you go DEEP or PLAY SAFE?").toLowerCase();

    if (play2 === "deep") {
        console.log("Big risk... TOUCHDOWN!");
        score += 6;
    } else {
        console.log("You convert the first down.");
        score += 2;
    }
    showScore();

    let play3 = prompt("Red zone: DEFENSE is tight. Do you FORCE a throw or SCRAMBLE?").toLowerCase();

    if (play3 === "force") {
        console.log("Intercepted. A costly mistake.");
        score -= 4;
    } else {
        console.log("You scramble and score!");
        score += 5;
    }
    showScore();


} else if (role === "defense") {
    console.log("\nDrive 1: You lead the defense.");

    let play1 = prompt("Opponent 1st down: BLITZ or COVER?").toLowerCase();

    if (play1 === "blitz") {
        console.log("QB pressured — incomplete pass.");
        score += 2;
    } else {
        console.log("Short gain allowed.");
        score -= 1;
    }
    showScore();

    let play2 = prompt("3rd down: PLAY AGGRESSIVE or SAFE?").toLowerCase();

    if (play2 === "aggressive") {
        console.log("Pass breakup! Big stop.");
        score += 3;
    } else {
        console.log("They convert the first down.");
        score -= 2;
    }
    showScore();

    let play3 = prompt("Goal line: STRIP the ball or TACKLE?").toLowerCase();

    if (play3 === "strip") {
        console.log("FUMBLE! Defense recovers!");
        score += 6;
    } else {
        console.log("Touchdown allowed.");
        score -= 5;
    }
    showScore();

} else {
    console.log("\nYou hesitated... the coach benches you.");
    score -= 3;
}

console.log("\nFinal Score Impact: " + score);

if (score >= 10) {
    console.log("ENDING: ELITE PERFORMANCE 🏆 (A)");
} else if (score >= 5) {
    console.log("ENDING: STRONG GAME 👍 (B)");
} else if (score >= 0) {
    console.log("ENDING: AVERAGE PERFORMANCE 😐 (C)");
} else if (score >= -5) {
    console.log("ENDING: NEEDS IMPROVEMENT 📉 (D)");
} else {
    console.log("ENDING: BENCHED 😬 (F)");
}

console.log("\nCoach's Note: Decision-making under pressure defines champions.")
console.log("Thanks for playing the Fighting Irish Championship Simulation, " + user + "!");
console.log("Feel free to play again and try different strategies!");
console.log("Go Irish! 🍀");
console.log("Game developed by Esteban Hernandez:)");

