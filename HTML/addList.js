function function1() {
   var ol= document.getElementById("list");
   var li = document.createElement("li");
   li.appendChild(document.createTextNode(document.getElementById("inputik").value));
   ol.appendChild(li);
   clear();
}
function clear(){
   document.getElementById("inputik").value="";
}
