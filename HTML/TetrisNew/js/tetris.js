var squareHeight = 10;
var squareWidth = 10;
var keycode = 0;
var moveYCord = 0;
var moveXCord = 0;
//var figuresCount = 0;
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

{
	"figure":[
	{
		cord:[ 150, 50, squareHeight, squareWidth ],
	},

	{
		cord:[ 150, 60, squareHeight, squareWidth ],
	},

	{
		cord:[ 150, 70, squareHeight, squareWidth ],
	},

	{
		cord:[ 150, 80, squareHeight, squareWidth ],
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
//figuresCount += 1;
var tableXCoord = 60;
var tableYCoord = 50;
var tableNewHeight = 300;
var tableNewWidth = 200;

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
var occupatioCnellsCount = occupatioCnells.length;
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
			coordinatesCompare();
			} 
	} else {
			figureNumber = Math.floor((Math.random() * figureCordinates.length));
			moveYCord = 0;
			moveXCord = 0;
			for( var i = 0; i < count; i++)	{
				//var occupatioCnells[i] = new Array();
				//occupatioCnells[i][0] = carentXCoord[i];
				//occupatioCnells[i][1] = carentYCoord[i];
				occupatioCnells.push(carentXCoord[i]);
				occupatioCnells.push(carentYCoord[i]);
				occupatioCnellsCount = occupatioCnells.length;
				// console.log(occupatioCnellsCount);
				console.log(occupatioCnells[i][0], occupatioCnells[i][1]);
				carentXCoord[i] = 0;
				carentYCoord[i] = 0;
				//coordinatesCompare();

			}
		}
}
/*alert("fdv");
for (var i = 0; i <  occupatioCnellsCount; i++) {
	console.log(occupatioCnells[i]);
}*/
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function coordinatesCompare () {
		for(var z = 0; z < occupatioCnellsCount;  z += 2) { 
		for(var j = 0; j < count; j++)	{
			if(carentXCoord[j] == occupatioCnells[z] &&  carentYCoord[j] == occupatioCnells[z +1]) {
				figureNumber = Math.floor((Math.random() * figureCordinates.length));
				moveYCord = 0;
				moveXCord = 0;
				//occupatioCnells[occupatioCnellsCount + 1] = new Array();
				//occupatioCnells[occupatioCnellsCount + 1][0] = carentXCoord[j];
				//occupatioCnells[occupatioCnellsCount + 1][1] = carentYCoord[j];
				//occupatioCnellsCount = occupatioCnells.length;
				for( var i = 0; i < count; i++)	{
				occupatioCnells.push(carentXCoord[i]); 
				occupatioCnells.push(carentYCoord[i]);
				carentXCoord[i] = 0;
				carentYCoord[i] = 0;
				occupatioCnellsCount = occupatioCnells.length;
				//return 0;
				//figureNumber = Math.floor((Math.random() * figureCordinates.length))
			}
				//console.log(occupatioCnells.length);
				/*for (var i = 0; i <  occupatioCnellsCount; i++) {
	console.log(occupatioCnells[i]);
}*/
			}
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