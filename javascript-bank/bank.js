/* exported Bank */
function Bank() {
  this.nextAccountNumber = 1;
  this.accounts = [];
}

Bank.prototype.openAccount = function (holder, balance) {
  if (balance > 0) {
    var testAccount = new Account(this.nextAccountNumber, holder)
    testAccount.transactions = [];
    testAccount.transactions.push(balance);
    this.accounts.push(testAccount);
    this.nextAccountNumber++;
    return testAccount.number
  } else {
    return null
  }
}

Bank.prototype.getAccount = function (number) {
  var checkNumber = number;
  var i = 0;
  for (i = 0; i < this.accounts.length; i++) {
    if (checkNumber === this.accounts[i].number) {
      var result = this.accounts[i]
      return result
    }
  }
  return null
}

Bank.prototype.getTotalAssets = function () {
  var i;
  var j;
  var total = 0
  var totalForAccount;
  var totalForAccount2 = 0
  var totalSingleAccount;
  if(this.accounts.length === 0){
    return 0
  } else {
    for (i = 0; i < this.accounts.length; i++) {
      totalForAccount = this.accounts[i].transactions;
      for(j=0; j < totalForAccount.length; j++) {
        var totalSingleAccount = 0

        totalForAccount2 = totalForAccount[i];
        totalSingleAccount += totalForAccount2
        console.log('total 2', totalForAccount2)
        console.log('total single', totalSingleAccount)
      }

      total += totalSingleAccount
      console.log(total)
    }
    return total
  }
}
