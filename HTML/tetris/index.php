<?php
$arr[0][0]="1";
$arr[0][1]="1";
$arr[0][2]="1";
$arr[0][3]="1";
$arr[1][0]="0";
$arr[1][1]="0";
$arr[1][2]="0";
$arr[1][3]="0";
$arr[2][0]="0";
$arr[2][1]="0";
$arr[2][2]="0";
$arr[2][3]="0";
$arr[3][0]="0";
$arr[3][1]="0";
$arr[3][2]="0";
$arr[3][3]="0";
//json_encode($arr);
//echo $arr[0][0];
for($i=0; $i<4;  $i++) {
    for ($j=0; $j<4; $j++)
    { 
        echo $arr[$i][$j];
    }

echo "<br>";
}
echo "<br>";
for ($a=3; $a>=0; $a--)
        { 

        for ($b=0; $b<4; $b++)

        {
            echo $arr[$b][$a];
        }
        echo "<br>";
        } 
?>
<html>
    <head>
      <link rel="stylesheet" href="stype.css"> 
      <title>TETRIS</title> 
   </head>      
    <body>
    <div id="game">
<p id="prinrMassiv"></p>
<table border="1" id="tabletr"></table>
    </div>
 </body>
<script src="tetris.js"></script>
</html>
