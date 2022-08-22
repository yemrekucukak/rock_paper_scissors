let itemnames = ["Quartz", "Parchment", "Shears"]
let scoreboard = document.getElementById("score")
let yourchoice = document.getElementById("choice")
let computerchoice = document.getElementById("computer")
let result = document.getElementById("result")
let disp = document.getElementById("disp")
let computerc = 0
let riskfactor = 1

let drawcount = 0
let win = 0
let lose = 0

function Quartz(){
check()
random()
if (computerc === 0){drawcount = drawcount + riskfactor; result.textContent = "That's a draw"}
if (computerc === 1){lose = lose + riskfactor; result.textContent = "You've lost this round!"}
if(computerc === 2){win = win + riskfactor; result.textContent = "You've won this round!"}
yourchoice.textContent = "You have chosen Quartz"
computerchoice.textContent = "The Computer has chosen " + itemnames[computerc]
scoreboard.textContent = "You: " + win + " ||| Computer: " + lose + "||| Draw: " + drawcount
check()
}

function Parchment(){
    check()
    random()
    if (computerc === 1){drawcount = drawcount + riskfactor; result.textContent = "That's a draw"}
    if (computerc === 2){lose = lose + riskfactor; result.textContent = "You've lost this round!"}
    if(computerc === 0){win = win + riskfactor; result.textContent = "You've won this round!"}
    yourchoice.textContent = "You have chosen Parchment"
    computerchoice.textContent = "The Computer has chosen " + itemnames[computerc]
    scoreboard.textContent = "You: " + win + "||| Computer: " + lose + "||| Draw: " + drawcount
    check()
}


function Shears(){
    check()
    random()
    if (computerc === 2){drawcount = drawcount + riskfactor; result.textContent = "That's a draw"}
    if (computerc === 0){lose = lose + riskfactor; result.textContent = "You've lost this round!"}
    if(computerc === 1){win = win + riskfactor; result.textContent = "You've won this round!"}
    yourchoice.textContent = "You have chosen Shears"
    computerchoice.textContent = "The Computer has chosen " + itemnames[computerc]
    scoreboard.textContent = "You: " + win + "||| Computer: " + lose + "||| Draw: " + drawcount
    check()
}

function check(){
    if (win > 60 || win === 60){window.open("https://www.youtube.com/watch?v=YBykfMjhBcw", "_blank")}
    if (lose > 60 || lose === 60 ){window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank")}
    if (drawcount === 100 || drawcount > 100){window.open("https://www.youtube.com/watch?v=bE0reoHMLMg", "_blank")}
}

function random(){
    let number = Math.random(0)*3
    computerc = Math.floor(number)
}

function factor(){
    riskfactor = riskfactor*2;
    if(riskfactor>17){riskfactor = 1}
    disp.textContent = " Risk Factor is: " + riskfactor

}