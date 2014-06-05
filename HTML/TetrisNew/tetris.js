var squareHeight=10;
var squareWith=10;
var keycode;
var moveYCord=0;
var moveXCord=0;

var figureCordinates = [
{
	"figure":[
	{ 
		cord:[200,40, squareHeight,squareWith],
	},
	{
		cord:[210,40, squareHeight,squareWith],
	},
	{
		cord:[200 ,30, squareHeight, squareWith],
	},
	{
		cord:[210 ,30, squareHeight, squareWith],
	},
	
	],
},
	];


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	/*
function play() {
    // pley 
    // newgame
    // exit
}
*/

var Canvas = document.getElementById("myCanvas");
var drowCanvas = Canvas.getContext('2d');
var figureNumber = Math.floor((Math.random() * figureCordinates.length));
var count=figureCordinates[figureNumber].figure.length;
//document.onkeydown = function checkKeycode(event);


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function init() {
      table= new canvasTable(60,50,300,500);
	  drowCanvas.strokeRect(table.xCoord, table.yCoord, table.newHeight, table.newWith);
	setInterval(moveFigure, 600);     
     }


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////     
function createFigure() {
	for ( var i =0; i<count; i++) {
	drowCanvas.fillRect(figureCordinates[figureNumber].figure[i].cord[0],figureCordinates[figureNumber].figure[i].cord[1], squareHeight, squareWith);
	}
}


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
document.onkeydown = function checkKeyCode(event)
{      
	 if(event.which) 
    	keycode = event.which;
    if(keycode==37){
    	moveXCord=moveXCord-squareHeight;
    	moveYCord-=squareHeight;
	     	moveFigure();
     }
    if(keycode==39){
    	moveXCord=moveXCord+squareHeight;
    	moveYCord-=squareHeight;
     	moveFigure();
    }
 }


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function moveFigure(){
	moveYCord+=squareHeight;
	drowCanvas.beginPath();
		drowCanvas.clearRect(60,45,300,490);
		for ( var i =0; i<count; i++) {
			drowCanvas.fillRect(figureCordinates[figureNumber].figure[i].cord[0]+moveXCord,figureCordinates[figureNumber].figure[i].cord[1]+moveYCord,squareHeight, squareWith);
		}
		drowCanvas.closePath();
		drowCanvas.fill();
	}



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function canvasTable (xCoord, yCoord, newHeight, newWith) {
      this.xCoord=xCoord;
      this.yCoord=yCoord;
      this.newHeight=newHeight;
      this.newWith=newWith;
       
}


     
