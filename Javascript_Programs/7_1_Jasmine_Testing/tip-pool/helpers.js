
// accepts 'tipAmt', 'billAmt', 'tipPercent' and sums total from allPayments objects
function sumPaymentTotal(type) {
  let total = 0;

  for (let key in allPayments) {
    let payment = allPayments[key];

    total += Number(payment[type]);
  }

  return total;
}

// converts the bill and tip amount into a tip percent
function calculateTipPercent(billAmt, tipAmt) {
  return Math.round(100 / (billAmt / tipAmt));
}

// expects a table row element, appends a newly created td element from the value
function appendTd(tr, value) {
  let newTd = document.createElement('td');
  newTd.innerText = value;

  tr.append(newTd);
}

//given a table's row, adds a tD with value 'X', which, when clicked, deletes the row it's attatched to
function appendDeleteBtn(tr) {
  let newDeleter = document.createElement('td');
  newDeleter.innerText = "X";

  tr.append(newDeleter);

  newDeleter.addEventListener('click', function(){
    delete newDeleter.parentNode.parentNode.removeChild(tr)
  });
}