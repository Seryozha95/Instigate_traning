var word="porc";
var correctGuesses="0";
var placeholders=new Array
function checkLetter() {
    var newLetter=document.getElementById("input").value;
    alert(newLetter);
    for (var i = 0; i < word.length; i++) {
        if (word.charAt(i) == newLetter) {
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
        //    alert(correctGuesses);
          //  alert("no");
        }

    }
}

