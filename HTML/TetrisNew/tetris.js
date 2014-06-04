var squareHeight=20;
var squareWith=20;
var figureCordinates = [
{
	"figure":[
	{ 
		cord:["190","30", squareHeight,squareWith],
	},
	{
		cord:["210","30", squareHeight,squareWith],
	},
	{
		cord:["190" ,"10", squareHeight, squareWith],
	},
	{
		cord:["210" ,"10", squareHeight, squareWith],
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
function init() {
    
    table= new canvasTable(50,50,300,500);
	console.log(table.xCord);
    drowCanvas.strokeRect(table.xCoord, table.yCoord, table.newHeight, table.newWith);
     }
function refresh() {
/*
kubik1 =new canvasFigure (figureCordinates[0].squareOne[0], figureCordinates[0].squareOne[1], 10, 10);
kubik2 =new canvasFigure (figureCordinates[0].squareTwo[0], figureCordinates[0].squareTwo[1], 10, 10);
kubik3 =new canvasFigure (figureCordinates[0].squareTree[0], figureCordinates[0].squareTree[1], 10, 10);
kubik4 =new canvasFigure (figureCordinates[0].squareFour[0], figureCordinates[0].squareFour[1], 10, 10);
drowCanvas.fillRect(kubik1.xCoord,kubik1.yCoord, squareHeight,squareWith );
drowCanvas.fillRect(kubik2.xCoord,kubik2.yCoord, squareHeight,squareWith );
drowCanvas.fillRect(kubik3.xCoord,kubik3.yCoord, squareHeight,squareWith );
drowCanvas.fillRect(kubik4.xCoord,kubik4.yCoord, squareHeight,squareWith );
*/

	for ( var i =0; i<4; i++) {
	drowCanvas.fillRect(figureCordinates[0].figure[i].cord[0],figureCordinates[0].figure[i].cord[1], squareHeight, squareWith);

	}
}
function canvasTable (xCoord, yCoord, newHeight, newWith) {
      this.xCoord=xCoord;
      this.yCoord=yCoord;
      this.newHeight=newHeight;
      this.newWith=newWith;
	       
}


/*function canvasFigure(xCoord, yCoord) {
      this.xCoord=xCoord;
      this.yCoord=yCoord;

}
    */
    
     
