let user = prompt("What is your name?");
console.log("Hello, "+user+"!");

let user = prompt("What is your name?");
let score = 0;

console.log("Welcome to the Fighting Irish, " + user + "!");
console.log("Score: " + score);

let choice1 = prompt("You're playing for . Do you start on OFFENSE or DEFENSE?").toLowerCase();

if (choice1 === "offense") {
    let choice2 = prompt("It's 4th down at the 10-yard line. Do you PASS or RUN?").toLowerCase();

    if (choice2 === "pass") {
        let choice3 = prompt("Receiver is covered! Do you THROW or SCRAMBLE?").toLowerCase();

        if (choice3 === "throw") {
            console.log("Intercepted... turnover!");
            score -= 5;
        } else {
            console.log("You scramble and score a TOUCHDOWN!");
            score += 7;
        }

    } else {
        console.log("Stopped short on 4th down...");
        score -= 3;
    }

} else if (choice1 === "defense") {
    let choice2 = prompt("Opponent at the goal line. Do you BLITZ or COVER?").toLowerCase();

    if (choice2 === "blitz") {
        let choice3 = prompt("QB under pressure! Do you SACK or STRIP the ball?").toLowerCase();

        if (choice3 === "strip") {
            console.log("Fumble recovered! Huge defensive play!");
            score += 6;
        } else {
            console.log("Nice sack, but they score next play...");
            score += 1;
        }

    } else {
        console.log("They score easily...");
        score -= 4;
    }

} else {
    console.log("You hesitate and get benched...");
    score -= 2;
}

console.log("Final Score: " + score);

if (score >= 6) {
    console.log("ENDING: CHAMPION 🏆");
} else if (score >= 2) {
    console.log("ENDING: SOLID GAME 👍");
} else if (score >= 0) {
    console.log("ENDING: NEEDS WORK 😐");
} else {
    console.log("ENDING: ROUGH DAY 😬");
}