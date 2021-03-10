/* exported Bank */
function Bank() {
  this.nextAccountNumber = 1;
  this.accounts = [];
}

Bank.prototype.openAccount = function (holder, balance) {
  if (balance > 0) {
    var testAccount = new Account(this.nextAccountNumber, holder);
    testAccount.transactions = [];
    var startBalance = { balance };
    testAccount.transactions.push(startBalance);
    this.accounts.push(testAccount);
    this.nextAccountNumber++;
    return testAccount.number;
  } else {
    return null;
  }
};

Bank.prototype.getAccount = function (number) {
  var checkNumber = number;
  var result = {};
  for (var i = 0; i < this.accounts.length; i++) {
    if (checkNumber === this.accounts[i].number) {
      result = this.accounts[i];
      return result;
    }
  }
  return null;
};

Bank.prototype.getTotalAssets = function () {
  var totalForAccount = 0;
  if (this.accounts.length === 0) {
    return 0;
  } else {
    for (var i = 0; i < this.accounts.length; i++) {
      totalForAccount += this.accounts[i].transactions[0].balance;
      totalForAccount += this.accounts[i].transactions[1].depositAmount;
      if (this.accounts[i].transactions.length > 2) {
        totalForAccount += this.accounts[i].transactions[2].withdrawalAmount;
      }
    }
    return totalForAccount;
  }
};
