var question = [
{ "questionText": "A very huge animal",
   "questionAnswer":"elephant"
},

{ "questionText":"Which frut is red or green and rounded",
   "questionAnswer":"apple"
},

{
   "questionText":"The bigest country",
   "questionAnswer":"Russia"
},

{
   "questionText":"The hotest continents",
   "questionAnswer":"Africa"
}

];

var images = [
{ "pictureId":"glux"
},
{
  "pictureId":"ajDzerq"
},
{
  "pictureId":"por"
},
{
  "pictureId":"votqer"
},
{
  "pictureId":"table"
}

];
var inputLetter = document.getElementById("input");
var randomNumber = Math.floor((Math.random() * question.length));
currentWord = question[randomNumber].questionAnswer;
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
   document.getElementById("printQuestion").innerHTML=question[randomNumber].questionText;
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
			   document.getElementById(images[badGuessCount].pictureId).style.display="block";
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














