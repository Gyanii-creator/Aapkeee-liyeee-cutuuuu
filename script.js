const music = document.getElementById("bgMusic");

/* Fake Loading */
setTimeout(()=>{
    document.getElementById("loader").style.display="none";
    document.getElementById("app").classList.remove("hidden");
},1800);

/* Name Check */
function checkName(){
    const name=document.getElementById("nameInput").value.trim();
    if(name==="Aashuuu"){
        switchScreen("nameScreen","welcomeScreen");
        music.play().catch(()=>{});
    }else{
        document.getElementById("error").innerText="Only Aashuuu can open this 💌";
    }
}

/* Questions */
const questions=[
"Aap smile kr rhe ho naaaa abhiiii?",
"Kesaa laga surpriseeeee?",
"Aapko ye pasand aayaaa?",
"Is this cute?",
"Mai aapkaa suar, gadhaa, chomuu, octopus, and so on.. rahunga naaa?",
"Do you feel special?",
"Kya mai aapkoo lifetime annoyy and irritatee kr skta huu?",
"Did this help your mood?",
"Are we still a team?",
"Will you stay hameshaaaaa?",
"Can we talk bohttt jadaaaa?",
"kya aapko khushii huiiii?",
"Do you know you matter to me a lottt?",
"Aap mere bohtt jadaa pyaar krte ho naaaa?",
"Will you keep smiling babyyyy?"
];

let index=0;

function startQuestions(){
    switchScreen("welcomeScreen","questionScreen");
    showQuestion();
}

function showQuestion(){
    document.getElementById("questionText").innerText=questions[index];
    document.getElementById("progressBar").style.width=
        ((index)/questions.length)*100+"%";
}

function nextQuestion(){
    index++;
    if(index<questions.length){
        showQuestion();
    }else{
        document.getElementById("progressBar").style.width="100%";
        switchScreen("questionScreen","finalScreen");
    }
}

/* Runaway NO Button */
const noBtn=document.getElementById("noBtn");
document.addEventListener("mousemove",()=>{
    const x=Math.random()*(window.innerWidth-100);
    const y=Math.random()*(window.innerHeight-60);
    noBtn.style.position="absolute";
    noBtn.style.left=x+"px";
    noBtn.style.top=y+"px";
});

/* Helpers */
function switchScreen(a,b){
    document.getElementById(a).classList.add("hidden");
    document.getElementById(b).classList.remove("hidden");
}

function restart(){ location.reload(); }
