/*
  Solution to Chess Board from Eloquent JavaScript
  by Tom Hockett
*/

var size = 8;
var board = '';

for (var x = 0; x < size; x++) { // repeat based on var size
  for (var y = 0; y < size; y++) { // changes order based on row
    if ((x + y) % 2 === 0) // if it's an even line (or line 0)
      board += ' '; // start with a space
    else
      board += '#'; // start with a '#'
  }

  board += '\n'; // add line-break at the end of row
}

console.log(board);
