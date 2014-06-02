var Figures= [
{
    "figureNew": [ 
    {
      "rows":["0","1","1","0"],
    },
    
    {
        "rows":["0","1","0","0"],
    },
    
    {
        "rows":["0","1","0","0"],
    },
    
    {
         "rows":["0","1","0","0"],
    },
    
    ],
},
    ];
var table=document.getElementById("tabletr");
for (var i = 0; i < 4; i++) {
        var tr= document.createElement("tr");
        tr.setAttribute("id", "element" + i);
        table.appendChild(tr);

var tr=document.getElementById("element" +i);
//for (var j = 0; j < 4; j++) {
            var td= document.createElement("td");
                    td.setAttribute("id", "element" + i);
                            tr.appendChild(td);
//}
//for (var i=0; i<1; i++) {
//    for (var j=0; j<4; j++) {
       // document.getElementById("element" + j").appendChild(Figures[0].figureNew[2].rows[1]);
   }
//}
// document.getElementById("printMassiv").innerHTML=Figures[0].figureNew[3].rows[2];
 //}
console.log(Figures[0].figureNew[3].rows[2]);
