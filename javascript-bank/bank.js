/* exported Bank */
function Bank() {
  this.nextAccountNumber = 1;
  this.accounts = [];
}

Bank.prototype.openAccount = function (holder, balance) {
  if (balance > 0) {
    var testAccount = new Account(this.nextAccountNumber, holder);
    testAccount.transactions = [];
    var startBalance = testAccount.deposit(balance);
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
  for (var i = 0; i < this.accounts.length; i++) {
    if (checkNumber === this.accounts[i].number) {
      var result = this.accounts[i];
      return result;
    }
  }
  return null;
};

Bank.prototype.getTotalAssets = function () {
  var totalForAccounts = 0;
  if (this.accounts.length === 0) {
    return 0;
  } else {
    for (var i = 0; i < this.accounts.length; i++) {
      totalForAccounts += this.accounts[i].getBalance();
    }
    return totalForAccounts;
  }
};
