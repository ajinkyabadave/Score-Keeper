var p1 = document.querySelector("#p1");
var p2 = document.querySelector("#p2");
var reset = document.querySelector("#reset");
var p1disp = document.querySelector("#p1disp");
var p2disp = document.querySelector("#p2disp");
var numInput = document.querySelector("input");
var finalDisp = document.querySelector("#finalScore");
console.log("this is final disp" + finalDisp);
var p1score = 0;
var p2score = 0;
var gameOver = false;
var winningScore = 5;

p1.addEventListener("click", function(){
    if(!gameOver){
        p1score++;
        if(p1score === winningScore){
            p1disp.classList.add("winner");
            gameOver = true;
           
        }  
        p1disp.textContent = p1score;
    }
});

p2.addEventListener("click", function(){
    if(!gameOver){
        p2score++;
        console.log(p2score + " " + winningScore);  
        if(p2score === winningScore){
            p2disp.classList.add("winner");
            gameOver = true;
        }
        p2disp.textContent = p2score;
    }
});

function myReset() {
    p1score = 0;
    p2score = 0;
    p1disp.textContent = 0;
    p2disp.textContent = 0;
    p1disp.classList.remove("winner");
    p2disp.classList.remove("winner");
    gameOver = false;
};

reset.addEventListener("click", function(){
   myReset(); 
});


numInput.addEventListener("change", function(){
    console.log(numInput.value);
    finalDisp.textContent = numInput.value;
    winningScore = Number(numInput.value);  
    myReset();
    
});

