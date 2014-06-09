var squareHeight = 10;
var squareWidth = 10;
var tableXCoord = 60;
var tableYCoord = 50;
var tableNewHeight = 300;
var tableNewWidth = 200;
var keycode = 0;
var moveYCord = 0;
var moveXCord = 0;
var carentYCoord = new Array();
var carentXCoord = new Array();
var occupatioCnells = new Array();
var figureCordinates = [
{
	"figure":[
	{ 
		cord:[ 150, 50, squareHeight, squareWidth ],
	},
	
	{
		cord:[ 160, 50, squareHeight, squareWidth ],
	},
	
	{
		cord:[ 150, 60, squareHeight, squareWidth ],
	},
	
	{
		cord:[ 160, 60, squareHeight, squareWidth ],
	},
	
	],
},

{
	"figure":[
	{
		cord:[ 150, 40, squareHeight, squareWidth ],
	},
	
	{
		cord:[ 150, 50, squareHeight, squareWidth ],
	},
	
	{
		cord:[ 160, 50, squareHeight, squareWidth ],
	},
	
	{
		cord:[ 160, 60, squareHeight, squareWidth ],
	},
	
	],
},

{
	"figure":[
	{
		cord:[ 150, 40, squareHeight, squareWidth ],
	},

	{
		cord:[ 150, 50, squareHeight, squareWidth ],
	},

	{
		cord:[ 150, 60, squareHeight, squareWidth ],
	},

	{
		cord:[ 160, 60, squareHeight, squareWidth ],
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
	
	table = new canvasTable(tableXCoord, tableYCoord, tableNewWidth, tableNewHeight);
	drawCanvas.strokeRect(table.xCoord, table.yCoord, table.newWidth, table.newHeight);
	setInterval(moveFigure, 100);
}

//console.log(table.newHeight);
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////     
function createFigure() {
	for (var i = 0; i < count; i++) {
	drawCanvas.fillRect(figureCordinates[figureNumber].figure[i].cord[0], figureCordinates[figureNumber].figure[i].cord[1], squareHeight, squareWidth);
	}
}


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
document.onkeydown = function checkKeyCode(event){      
	if(event.which) 
    	keycode = event.which;
    if(keycode == 37) {
    	if(figureCordinates[figureNumber].figure[0].cord[0] - moveXCord < tableNewWidth + 40) {
    		moveXCord = moveXCord - squareWidth;
    		moveYCord -= squareHeight;
	   		moveFigure();
	   }
    }
    if(keycode == 39) {
    	if(figureCordinates[figureNumber].figure[0].cord[0] + moveXCord < tableNewWidth + 40) {
	    	moveXCord = moveXCord + squareWidth;
    		moveYCord -= squareHeight;
     		moveFigure();
     	}
    }
}


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function moveFigure() {
	if(figureCordinates[figureNumber].figure[3].cord[1] + moveYCord < tableNewHeight + 40) {
		moveYCord += squareHeight;
		drawCanvas.fillStyle = '#000';
		for (var i = 0; i < count; i++) {
			drawCanvas.clearRect(carentXCoord[i], carentYCoord[i], squareHeight, squareWidth);	
		}
		for (var i = 0; i < count; i++) {
			carentXCoord[i] = (figureCordinates[figureNumber].figure[i].cord[0]+moveXCord);
			carentYCoord[i] = (figureCordinates[figureNumber].figure[i].cord[1]+moveYCord);
			drawCanvas.fillRect(carentXCoord[i], carentYCoord[i], squareHeight, squareWidth);
			console.log(carentXCoord[i]);
			console.log(carentYCoord[i]);
		} 
	} else {
			figureNumber = Math.floor((Math.random() * figureCordinates.length));
			moveYCord = 0;
			moveXCord = 0;

			for( var i = 0; i < count; i++)	{
				occupatioCnells.push(carentXCoord[i], carentYCoord[i]);
				//console.log(occupatioCnells[i]);
				carentXCoord[i] = 0;
				carentYCoord[i] = 0;
			}
		}
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function coordinatesCompare (moveFigureXCoord, moveFigureYCoord, occupatioCnellsXCoord, occupatioCnellsYCoord) {
	if(moveFigureXCoord == occupatioCnellsXCoord &&  moveFigureYCoord == occupatioCnellsYCoord) {
		figureNumber = Math.floor((Math.random() * figureCordinates.length));
		moveYCord = 0;
		moveXCord = 0;
		for( var i = 0; i < count; i++)	{
			occupatioCnells.push(carentXCoord[i], carentYCoord[i]);
			carentXCoord[i] = 0;
			carentYCoord[i] = 0;
		}
	}
}


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function canvasTable (xCoord, yCoord, newWidth, newHeight) {
    this.xCoord = xCoord;
    this.yCoord = yCoord;
    this.newWidth = newWidth;
    this.newHeight = newHeight;
    
}