/* exported Account */
function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];
}

Account.prototype.deposit = function (amount) {
  if (amount > 0) {
    var deposit = {};
    deposit.depositAmount = amount;
    this.transactions.push(deposit);
    return true;
  } else {
    return false;
  }
};

Account.prototype.withdraw = function (amount) {
  if (amount > 0) {
    var withdraw = {};
    withdraw.withdrawalAmount = -amount;
    this.transactions.push(withdraw);
    return true;
  } else {
    return false;
  }
};

Account.prototype.getBalance = function () {
  var total = 0;
  if (this.transactions.length < 0) {
    return 0;
  } else {
    for (var i = 0; i < this.transactions.length; i++) {
      if (this.transactions[i].balance !== undefined) {
        total += this.transactions[i].balance;
      } else if (this.transactions[i].withdrawalAmount !== undefined) {
        total += this.transactions[i].withdrawalAmount;
      } else if (this.transactions[i].depositAmount !== undefined) {
        total += this.transactions[i].depositAmount;
      }
    }
    return total;
  }
};
