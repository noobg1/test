var chai = require('chai');
var expect = chai.expect;
var read = require('../src/botRead');

describe('Valid cases : botRead takes txt file as input and ', function () {
  it('should return valid co-ordinates and direction', function (done) {
    var inputFile = '../test/testInput.txt';
    read(inputFile, (err = null, data) => {

      //console.log(data);
      expect(data).to.eqls({ x: 2, y: 1, finaDirection: 'S' });

      done();
    });
  });

  it('should return valid co-ordinates and direction for movements with random input', function (done) {
    var inputFile = '../test/testInput2.txt';
    read(inputFile, (err = null, data) => {

      expect(data).to.eqls({ x: 0, y: '5', finaDirection: 'W' });

      done();
    });
  });
});

describe('invalid cases : botRead takes txt file as input and ', function () {
  it('should return error message on invalid grid size', function (done) {
    var inputFile = '../test/testInput3.txt';
    read(inputFile, (err = null, data) => {
      if (err) {
        expect(err).to.eqls('Invalid grid size');
      }

      done();
    });
  });

  it('should return error message on invalid initial position', function (done) {
    var inputFile = '../test/testInput4.txt';
    read(inputFile, (err = null, data) => {
      if (err) {
        expect(err).to.eqls('Invalid initial position');
      }

      done();
    });
  });

    // it('should return error message on invalid initial direction', function (done) {
    //   var inputFile = '../test/testInput5.txt';
    //   read(inputFile, (err = null, data) => {
    //     if (err) {
    //       expect(err).to.eqls('Invalid initial direction');
    //     }

    //     done();
    //   });
    // });

});

