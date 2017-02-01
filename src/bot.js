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
   var initialX = fileMessageArray[1].split(' ')[0], initialY = fileMessageArray[1].split(' ')[1], initialDirection = fileMessageArray[1].split(' ')[2];
   var movements = fileMessageArray[2];
   
  console.log(gridSizeX, gridSizeY,initialDirection, initialX, initialY,
  movements);

    var x = initialX,y = initialY, currentDirection = initialDirection;
    function getDirection(currentDirection) {
      switch(currentDirection) {
        case 'N': return 0; break;
        case 'E': return 1; break;
        case 'S': return 2; break;
        case 'W': return 3; break;
        default : break;
      }
    }

    function move(currentDirection)
    {
      
      switch(currentDirection) {
        case 0: if(y !== 0) y--; break;
        case 1: if(x !== gridSizeX - 1) x++; break;
        case 2: if(y !== gridSizeY - 1) y++; break;
        case 3: if(x !== 0)x--; break;
        default : break;
      }
    }
    var N = 0, E = 1, S = 2, W = 3, counter;
    currentDirection = getDirection(initialDirection);
    for(var iter = 0; iter < movements.length; iter++)
    {
      if(movements[iter] === 'L')
      {
        currentDirection = (currentDirection - 1) % 4;
      }
      else if(movements[iter] === 'R')
      {
        currentDirection = (currentDirection + 1) % 4;
      }
      
      else if(movements[iter] === 'M')
      {
        move(currentDirection);
      }
    }

    if(currentDirection < 0)
      currentDirection += 4;
    console.log(x, y, currentDirection);
    
  }
});