/*
  Solution to Chess Board from Eloquent JavaScript
  by Tom Hockett

  "Write a program that creates a string that represents an 8x8
  grid, using newline characters to seperate lines.  At each position
  of the grid there is either a space or a '#' character.  The
  characters should form a chess board.
  Passing this string to console.log should show something like this:
  
   # # # #
  # # # #
   # # # #
  # # # #
   # # # #
  # # # #
   # # # #
  # # # #

  When you have a program that generates this pattern, define a
  variable 'size = 8' and change the program so that it works
  for any size, outputting a grid of the given width and height."
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
