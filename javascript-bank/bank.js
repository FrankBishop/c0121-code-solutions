/* exported Bank */
function Bank (){
  this.nextAccountNumber = 1;
  this.accounts = [];
}

Bank.prototype.openAccount = function (holder, balance) {
  if(balance > 0){
    var testAccount = new Account(this.nextAccountNumber, this.holder)
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
  console.log('number', number);
  var i = 0;
  for(i=0; i < this.accounts.length; i++) {
    console.log('i', i)
    console.log('number2' , number)
    if(number === this.accounts[i][number]) {
      console.log('number 3', number3)
      var result = this.accounts[i]
    } else {
      return null
    }
  }
  return result
}
