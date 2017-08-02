/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to
   write your logic.
*/


function handValue (hand) {
  let handTotal = 0;
  let acesArr = [];

  function isFace (card) {
    if ((card === "J") || (card === "Q") || (card === "K")) {
      return true;
    }
  }
  function isAce (card) {
    if (card === "A") {
      return true;
    }
  }
  function isNumber (card) {
    if ((card !== "K") && (card !== "Q") && (card !== "J") && (card !== "A")) {
      return true;
    }
  }

  function numberValue (card) {
    if (card === "2") {
      handTotal += 2;
    }
    else if (card === "3") {
      handTotal += 3;
    }
    else if (card === "4") {
      handTotal += 4;
    }
    else if (card === "5") {
      handTotal += 5;
    }
    else if (card === "6") {
      handTotal += 6;
    }
    else if (card === "7") {
      handTotal += 7;
    }
    else if (card === "8") {
      handTotal += 8;
    }
    else if (card === "9") {
      handTotal += 9;
    }
  }

  hand.forEach(function (item) {
    if (isFace(item) === true) {
      handTotal += 10;
    }
    else if (isNumber(item) === true) {
      numberValue(item);
    }
    else if (isAce(item) === true) {
      acesArr.push("ace!!");
    }

    });

    for (let i = 0; i < acesArr.length; i++) {
      if (handTotal >= 11) {
        handTotal += 1;
      }
      else {
        handTotal += 11;
      }
    }

  return handTotal;
}


/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/
