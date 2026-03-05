const challenges = [
"Talk for 2 minutes about your favourite goal.",
"Explain your hobby as if teaching a child.",
"Introduce yourself like a job interview.",
"Describe your biggest achievement.",
"Convince someone to read a book."
];

function newChallenge(){
let random = Math.floor(Math.random()*challenges.length);
document.getElementById("challengeText").innerText = challenges[random];
}

function toggleMode(){
document.body.classList.toggle("light");
}
