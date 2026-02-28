const music = document.getElementById("bgMusic");

/* Fake Loading */
setTimeout(()=>{
    document.getElementById("loader").style.display="none";
    document.getElementById("app").classList.remove("hidden");
},1500);

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
"Are you smiling?",
"Cutee hai naaa tbh?",
"Pasand aaya naaa?",
"U happyyyyyy?",
"U nowww bohttt happieee?",
"Do you feel special?",
"Can I annoy u and irritateeee you forever?",
"Did this help your mood?",
"Are we still a team?",
"Will you stay with me foreverrr?",
"Ham baat kr skte hai bohtt jadaaaa?",
"Did this surprise you?",
"Do you know you matter to me a lottt?",
"Aap merese bohttt pyaar krte ho naaaaa?",
"Aap smile krte rahoge naaaaa?"
];

let index=0;

function startQuestions(){
    switchScreen("welcomeScreen","questionScreen");
    showQuestion();
}

function showQuestion(){
    document.getElementById("questionText").innerText=questions[index];
    document.getElementById("progressBar").style.width =
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

/* Runaway No Button */
const noBtn=document.getElementById("noBtn");
document.addEventListener("mousemove",()=>{
    const x=Math.random()*(window.innerWidth-100);
    const y=Math.random()*(window.innerHeight-60);
    noBtn.style.position="absolute";
    noBtn.style.left=x+"px";
    noBtn.style.top=y+"px";
});

// Double click to open secret message
document.body.addEventListener("dblclick", function () {
  document.getElementById("secretModal").style.display = "flex";
});

// Close button
document.getElementById("closeSecret").addEventListener("click", function () {
  document.getElementById("secretModal").style.display = "none";
});

// Close if clicked outside box
window.addEventListener("click", function (e) {
  const modal = document.getElementById("secretModal");
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

function closeSecret(){
    document.getElementById("secretMessage").classList.add("hidden");
}

function switchScreen(a,b){
    document.getElementById(a).classList.add("hidden");
    document.getElementById(b).classList.remove("hidden");
}

function restart(){ location.reload(); }
