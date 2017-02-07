/*
  Solution for "Looping a triangle" from Eloquent JavaScript
  by Tom Hockett

  "Write a loop that makes seven calls to console.log to output
  the following triangle:
    #
    ##
    ###
    ####
    #####
    ######
    #######

  It ay be useful to know that you can find the length of a string
  by writing .length after it."
*/

var char = '#';
while (char.length < 8) {
  console.log(char);
  char = char + '#';
}
