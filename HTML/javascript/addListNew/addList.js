
var arr=new Array();
var ol;
var li;
function function1() {

   var myNumber=5;
   ol= document.getElementById("list");
   li = document.createElement("li");

   arr.push(document.getElementById("inputik").value);
   li.appendChild(document.createTextNode(document.getElementById("inputik").value));
   ol.appendChild(li);
   clear();

}
function clear(){
   document.getElementById("inputik").value="";
}
function functionarray(){
   ol= document.getElementById("list");
   for (i=0; i<arr.length; i++) {
      li = document.createElement("li");

      li.appendChild(document.createTextNode(arr[i]));
      ol.appendChild(li);
   }
}









