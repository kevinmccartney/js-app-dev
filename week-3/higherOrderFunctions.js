function calculateTip(amount) {
  return amount * 0.2;
}

function calculateTotal(calcFunction, amount) {
  return  calcFunction(amount) + amount;
}

const partyOneTotal = calculateTip(100) + 100;

console.log(partyOneTotal);

const partyTwoTotal = calculateTotal(calculateTip, 35);

console.log(partyTwoTotal);
