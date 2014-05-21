function addListFunction() {
    var ol= document.getElementById("list");
    var li = document.createElement("li");
    if (document.getElementById("input").value !="") {
        li.appendChild(document.createTextNode(document.getElementById("input").value));
        ol.appendChild(li);
        clear();
    }
}
function clear(){
    document.getElementById("input").value="";
}
