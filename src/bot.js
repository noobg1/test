var fs = require('fs');
var testFile = process.argv[2];

fs.readFile(testFile, function fileRead(error, data) {
 if (error) {
   console.log(error);
 }
 else {
   var fileMessage = data.toString();
   var fileMessageArray = fileMessage.split('\n');
   var gridSizeX = fileMessageArray[0].split(' ')[0], gridSizeY = fileMessageArray[0].split(' ')[1]
   var intialX = fileMessageArray[1].split(' ')[0], intialY = fileMessageArray[1].split(' ')[1], initialDirection = fileMessageArray[1].split(' ')[2];
   var movements = fileMessageArray[2];
   
  console.log(gridSizeX, gridSizeY,initialDirection, intialX, intialY,
  movements);
 }
});