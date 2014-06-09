var squareHeight = 10;
var squareWith = 10;
var keycode = 0;
var moveYCord = 0;
var moveXCord = 0;
var carentYCoord = new Array();
var carentXCoord = new Array();
var occupatioCnells = new Array();
var figureCordinates = [
/*{
	"figure":[
	{ 
		cord:[ 200, 50, squareHeight, squareWith ],
	},
	
	{
		cord:[ 210, 50, squareHeight, squareWith ],
	},
	
	{
		cord:[ 200, 40, squareHeight, squareWith ],
	},
	
	{
		cord:[ 210, 40, squareHeight, squareWith ],
	},
	
	],
},

{
	"figure":[
	{
		cord:[ 200, 40, squareHeight, squareWith ],
	},
	
	{
		cord:[ 200, 50, squareHeight, squareWith ],
	},
	
	{
		cord:[ 210, 50, squareHeight, squareWith ],
	},
	
	{
		cord:[ 210, 60, squareHeight, squareWith ],
	},
	
	],
},*/

{
	"figure":[
	{
		cord:[ 210, 40, squareHeight, squareWith ],
	},

	{
		cord:[ 200, 50, squareHeight, squareWith ],
	},

	{
		cord:[ 200, 60, squareHeight, squareWith ],
	},

	{
		cord:[ 210, 60, squareHeight, squareWith ],
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

var canvas = document.getElementById("myCanvas");
var drawCanvas = canvas.getContext('2d');
var figureNumber = Math.floor((Math.random() * figureCordinates.length));
var count = figureCordinates[figureNumber].figure.length;


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function init() {
	table = new canvasTable(60, 49, 300, 500);
	drawCanvas.strokeRect(table.xCoord, table.yCoord, table.newHeight, table.newWith);
	setInterval(moveFigure, 100);
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////     
function createFigure() {
	for (var i = 0; i < count; i++) {
	drawCanvas.fillRect(figureCordinates[figureNumber].figure[i].cord[0], figureCordinates[figureNumber].figure[i].cord[1], squareHeight, squareWith);
	}
}


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
document.onkeydown = function checkKeyCode(event){      
	if(event.which) 
    	keycode = event.which;
    if(keycode == 37) {
    	if(figureCordinates[figureNumber].figure[0].cord[0] - moveXCord < 340) {
    		moveXCord = moveXCord - squareHeight;
    		moveYCord -= squareHeight;
	   		moveFigure();
	   }
    }
    if(keycode == 39) {
    	if(figureCordinates[figureNumber].figure[0].cord[0] + moveXCord < 340) {
	    	moveXCord = moveXCord + squareHeight;
    		moveYCord -= squareHeight;
     		moveFigure();
     	}
    }
}


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function moveFigure() {
	if(figureCordinates[figureNumber].figure[3].cord[1] + moveYCord < 540) {
		moveYCord += squareHeight;
		drawCanvas.fillStyle = '#000';
		for (var i = 0; i < count; i++) {
			drawCanvas.clearRect(carentXCoord[i], carentYCoord[i], squareHeight, squareWith);	
		}
		for (var i = 0; i < count; i++) {
			carentXCoord[i] = (figureCordinates[figureNumber].figure[i].cord[0]+moveXCord);
			carentYCoord[i] = (figureCordinates[figureNumber].figure[i].cord[1]+moveYCord);
			drawCanvas.fillRect(carentXCoord[i], carentYCoord[i], squareHeight, squareWith);
		}
	}
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function canvasTable (xCoord, yCoord, newHeight, newWith) {
    this.xCoord = xCoord;
    this.yCoord = yCoord;
    this.newHeight = newHeight;
    this.newWith = newWith;
}