var Question={
    "ques" : [ "What is my name","What is your name"],
    "answer" : [ "Seryozha","Naira"],
};
var inputLetter = document.getElementById("input");
var randomNumber = Math.floor((Math.random() * Question.ques.length));
currentWord = Question.answer[randomNumber];
var l = currentWord.length;


function play(){
	
	this.style.display = "none";
    var tr=document.getElementById("collom");
    for (var i = 0; i < l; i++) {
        var td= document.createElement("td");
        td.setAttribute("id", "element" + i);
        tr.appendChild(td);
    }

    document.getElementById("main").style.display="block";
    document.getElementById("printQuestion").innerHTML=Question.ques[randomNumber];
}
var correctGuesses="0";
var badGuessCount="0";
function checkLetter() {
    var newLetter=document.getElementById("input").value;
    if (document.getElementById("input").value !="") {
        var badGuesses="0";
        inputLetter.value = "";
        for (var i = 0; i < l; i++) {
            if (currentWord[i].toLowerCase() == newLetter.toLowerCase()) {
                correctGuesses++;
				
				
				var letter = document.createElement("span");
				letter.innerHTML = currentWord[i];
				document.getElementById("element"+i).appendChild(letter);
				
				currentWord = currentWord.replace(currentWord[i],"0");
				
                if (correctGuesses == l)
                { 
                    gameOver();
                    alert("WIN!!!");
                }
            }
            else {
                badGuesses++;
                if (badGuesses == l)
                {
                    badGuessCount++;
                    if (badGuessCount == 5) {
						gameOver();
                        alert("Game Over");
                    }

                }

            }
        }
    }
	
}

inputLetter.onclick = function() {
	this.value="";
}

document.getElementById("play").onclick = play;


function gameOver(){
	inputLetter.setAttribute("disabled","");
	
} 














