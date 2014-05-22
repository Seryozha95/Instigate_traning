var Question={
   "ques" : [ "What is my name",
   "What is your name"
      ],
   "answer" : [ "Seryozha",
   "Naira"
   ],

};
var randomNumber = Math.floor((Math.random() * 10));
function playquation(){
    var tr=document.getElementById("collom");
       for (var i = 0; i < Question.answer[1].length; i++) {
                 var td= document.createElement("td");
                  
                 tr.appendChild(td);
       }

   document.getElementById("main").style.display="block";
   document.getElementById("printQuestion").innerHTML=Question.ques[1];
}
var correctGuesses="0";
var placeholders=new Array();
function checkLetter() {
   var newLetter=document.getElementById("input").value;
   alert(newLetter);

   for (var i = 0; i < Question.answer[1].length; i++) {
             if (Question.answer[1].charAt(i) == newLetter) {
         correctGuesses++;
         alert(correctGuesses);
         placeholders.push(document.getElementById("input").value);
         if (correctGuesses == word.length)
         { 
            alert("verj");
            return;
         }
      }
      else {
      }

   }
}

