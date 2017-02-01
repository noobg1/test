function bot(attributes) {
  var x = attributes.initialX, y = attributes.initialY;
  var directionToNumber = { 'N': 0, 'E': 1, 'S': 2, 'W': 3 };
  var numberToDirection = ['N', 'E', 'S', 'W'];
  currentDirectionValue = directionToNumber[attributes.initialDirection];

  function move(currentDirection) {
    switch (currentDirection) {
      case 0: if (y !== 0) y--; break;
      case 1: if (x !== attributes.gridSizeX - 1) x++; break;
      case 2: if (y !== attributes.gridSizeY - 1) y++; break;
      case 3: if (x !== 0) x--; break;
      default: break;
    }
  }
  function makeCurrentDirectionPositive(){
      while (currentDirectionValue < 0)
      {
        currentDirectionValue += 4;
      }
  }
  for (var iter = 0; iter < attributes.movements.length; iter++) {
    if (attributes.movements[iter] === 'L') {
      currentDirectionValue = (currentDirectionValue - 1) % 4;
      makeCurrentDirectionPositive();
    }
    else if (attributes.movements[iter] === 'R') {
      currentDirectionValue = (currentDirectionValue + 1) % 4;
      makeCurrentDirectionPositive();
    }
    else if (attributes.movements[iter] === 'M') {
      move(currentDirectionValue);
      makeCurrentDirectionPositive();
    }
  }

  var result = { x, y, finaDirection: numberToDirection[currentDirectionValue] }
  return result;
}

module.exports = bot;