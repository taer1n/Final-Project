var numGuests, numTables, division, remain;

var numGuests = prompt ("How many guests do you have?");
var numTables = prompt ("How many tables do you want?");

var division = Math.floor(numGuests/numTables);
var remain = numGuests % numTables;

alert ("Your " + numGuests + " guests will be seated as the following: " +(numTables-1) +" tables of "+ division + " guests and one table of "+ (division + remain));