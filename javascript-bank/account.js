/* exported Account */
function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];
}

Account.prototype.deposit = function (amount) {
  if (amount > 0) {
    this.transactions.push(amount);
    return true;
  } else {
    return false;
  }
};

Account.prototype.withdraw = function (amount) {
  if (amount > 0) {
    this.transactions.push(-amount);
    return true;
  } else {
    return false;
  }
};

Account.prototype.getBalance = function () {
  if (this.transactions.length === 0) {
    return 0;
  } else {
    var i = 0;
    var total = 0;
    for (i = 0; i < this.transactions.length; i++) {
      total += this.transactions[i];
    }
    return total;
  }
};
