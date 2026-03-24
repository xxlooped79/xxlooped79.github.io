let user = prompt("What is your name?");
console.log("Welcome to the Fighting Irish, " + user + "!");

let choice1 = prompt("You're playing in the championship. Do you start on OFFENSE or DEFENSE?").toLowerCase();

if (choice1 === "offense") {
    let choice2 = prompt("It's 4th down at the 10-yard line. Do you PASS or RUN?").toLowerCase();

    if (choice2 === "pass") {
        let choice3 = prompt("Your receiver is double covered! Do you THROW anyway or SCRAMBLE?").toLowerCase();

        if (choice3 === "throw") {
            console.log("Intercepted in the end zone... the crowd goes silent. ENDING 1: HEARTBREAK 💔");
        } else {
            console.log("You scramble and dive into the end zone! TOUCHDOWN IRISH! ENDING 2: LEGEND 🏆");
        }

    } else {
        console.log("You run up the middle but get stopped short... ENDING 3: STUFFED 🧱");
    }

} else if (choice1 === "defense") {
    let choice2 = prompt("The opponent is on the goal line. Do you BLITZ or PLAY COVERAGE?").toLowerCase();

    if (choice2 === "blitz") {
        let choice3 = prompt("The QB panics! Do you SACK or GO FOR THE BALL?").toLowerCase();

        if (choice3 === "go for the ball") {
            console.log("You strip the ball and recover it! Game saved! ENDING 4: DEFENSIVE HERO 🦸‍♂️");
        } else {
            console.log("You get the sack, but they score next play... ENDING 5: ALMOST 😬");
        }

    } else {
        console.log("They find an open receiver and score... ENDING 6: BURNED 🔥");
    }

} else {
    console.log("You hesitate and the coach benches you... ENDING: BENCHED 🤬");
}