var squareHeight=20;
var squareWith=20;
var figureCordinates = [
{
	"figure":[
	{ 
		cord:[190,30, squareHeight,squareWith],
	},
	{
		cord:[210,30, squareHeight,squareWith],
	},
	{
		cord:[190 ,10, squareHeight, squareWith],
	},
	{
		cord:[210 ,10, squareHeight, squareWith],
	},
	
	],
	},
	];


	/*
function play() {
    // pley 
    // newgame
    // exit
}
*/
var drowCanvas = document.getElementById("drowCanvas"),
    drowCanvas = drowCanvas.getContext('2d');
var figureNumber = Math.floor((Math.random() * figureCordinates.length));
function init() {
    
    table= new canvasTable(50,50,300,500);
	console.log(table.xCord);
  drowCanvas.strokeRect(table.xCoord, table.yCoord, table.newHeight, table.newWith);
     }
function createFigure() {
//	drowCanvas.beginPath();
	for ( var i =0; i<4; i++) {
	drowCanvas.fillRect(figureCordinates[figureNumber].figure[i].cord[0],figureCordinates[figureNumber].figure[i].cord[1], squareHeight, squareWith);
	}
}
console.log(figureCordinates[0].figure[0].cord[1] + 10);
console.log(figureCordinates[0].figure[0].cord[1] + 10);
;
var moveYCord=0;
function moveFigure(){
	
	
	moveYCord+=60;
	drowCanvas.beginPath();
		for ( var i =0; i<4; i++) {
		
	drowCanvas.fillRect( figureCordinates[figureNumber].figure[i].cord[0],figureCordinates[figureNumber].figure[i].cord[1]+moveYCord,squareHeight, squareWith);
	
	
	}


}
function canvasTable (xCoord, yCoord, newHeight, newWith) {
      this.xCoord=xCoord;
      this.yCoord=yCoord;
      this.newHeight=newHeight;
      this.newWith=newWith;
	       
}


    
     
