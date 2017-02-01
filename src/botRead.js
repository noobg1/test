var fs = require('fs');
var path = require('path')
var bot = require('./botMovement');
var testFile = process.argv[2];
var fileLimit = 50;

function readFile( testFile, callback) {

  if (testFile === undefined) {
  console.log(`Expected .txt file as third argument, given none!`);
  return `Expected .txt file as third argument, given none!`;
  }
  if (path.extname(testFile) !== '.txt') {
  console.log(`Expected .txt file as third argument, given: ${path.extname(directoryName)}`);
  return `Expected .txt file as third argument, given: ${path.extname(directoryName)}`;
  }
  var stats = fs.statSync(testFile);
  var fileSizeInBytes = stats["size"]/1000;
  if(fileSizeInBytes > fileLimit){
  console.log(`Expected .txt file as third argument less than ${fileLimit} kbs, given ${fileSizeInBytes}!`);
  return `Expected .txt file as third argument less than ${fileLimit} kbs, given ${fileSizeInBytes/1024}!`;
  }

  fs.readFile(testFile, function fileRead(error, data) {
    if (error) {
      console.log(error);
    }
    else {
      var fileMessage = data.toString();
      var fileMessageArray = fileMessage.split('\n');
      var gridSizeX = fileMessageArray[0].split(' ')[0];
      var gridSizeY = fileMessageArray[0].split(' ')[1];
      var initialX = fileMessageArray[1].split(' ')[0];
      var initialY = fileMessageArray[1].split(' ')[1];
      var initialDirection = fileMessageArray[1].split(' ')[2];
      var movements = fileMessageArray[2];
      var attributes = { gridSizeX, gridSizeY, initialX, initialY, initialDirection, movements };
      if(gridSizeX < 0 && gridSizeY < 0)
        {
          callback(error, null);
        }
      else{
        var result = bot(attributes);
        console.log(result.x, result.y, result.finaDirection);
        callback(null, result);
      }
      
    }
  });
}

//readFile( testFile, callback);

module.exports = readFile;