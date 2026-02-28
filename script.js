const music = document.getElementById("bgMusic");

function checkName() {
    const name = document.getElementById("nameInput").value.trim();

    if (name === "Aashuuu") {
        document.getElementById("nameScreen").classList.add("hidden");
        document.getElementById("welcomeScreen").classList.remove("hidden");
        music.play().catch(()=>{});
    } else {
        document.getElementById("error").innerText =
        "This surprise is only for Aashuuu 💌";
    }
}

const questions = [
"Aap smile kr rhe hoo abhiiii?",
"Did this surprise you?",
"Aapkooo mai pasand hu naaaaa?",
"Aapko pasand aaye mere effort?",
"It's cutieee, righttt?",
"Maiii aapkaaa gadhaa, suar, chomu, octopus, and so onn hu naaa?",
"Do you feel special?",
"Kya mai aapkoo annoy and irritate kr skta hu forever?",
"Kya isse mood better huaa?",
"Are we still the bestestest duo?",
"Aap chomuu ho naaaa?",
"Kya ham or jada baat kareee?",
"Do you know you matter a lot?",
"Are you glad you opened this?",
"Will you stay?"
];

let index = 0;

function startQuestions() {
    document.getElementById("welcomeScreen").classList.add("hidden");
    document.getElementById("questionScreen").classList.remove("hidden");
    showQuestion();
}

function showQuestion() {
    document.getElementById("questionText").innerText = questions[index];
}

function nextQuestion() {
    index++;
    if (index < questions.length) {
        showQuestion();
    } else {
        document.getElementById("questionScreen").classList.add("hidden");
        document.getElementById("finalScreen").classList.remove("hidden");
    }
}

/* Runaway NO Button 😆 */
const noBtn = document.getElementById("noBtn");

document.addEventListener("mousemove", () => {
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 60);
    noBtn.style.position = "absolute";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
});

/* Replay */
function restart(){
    location.reload();
}
