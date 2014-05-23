var Question={
    "ques" : [ "What is my name",
    "What is your name"
        ],
    "answer" : [ "Seryozha",
    "Naira"
        ],

};
var randomNumber = Math.floor((Math.random() * Question.ques.length));
function playquation(){
    var tr=document.getElementById("collom");
    for (var i = 0; i < Question.answer[randomNumber].length; i++) {
        var td= document.createElement("td");
        td.setAttribute("id", "element" + i);
        tr.appendChild(td);
    }

    document.getElementById("main").style.display="block";
    document.getElementById("printQuestion").innerHTML=Question.ques[randomNumber];
}
var correctGuesses="0";
var gameOver="0";
function checkLetter() {
    var newLetter=document.getElementById("input").value;
    if (document.getElementById("input").value !="") {
        document.getElementById("input").value="";
        var badGuesses="0";
        
        for (var i = 0; i < Question.answer[randomNumber].length; i++) {
            if (Question.answer[randomNumber].charAt(i) == newLetter) {
                correctGuesses++;
                alert(correctGuesses);
                if (correctGuesses == Question.answer[randomNumber].length)
                { 
                    alert("verj");
                    return;
                }
            }
            else {
                badGuesses++;
               // alert(badGuesses);
                if (badGuesses == Question.answer[randomNumber].length)
                {
                    gameOver++;
                    alert(gameOver);
                    if (gameOver == 5) {
                        alert();
                    }

                }

            }
        }
    }
}

