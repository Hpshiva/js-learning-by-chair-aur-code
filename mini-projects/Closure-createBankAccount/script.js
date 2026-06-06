function createBankAccount() {
    let balance = 2000

    function deposit(amount) {
        balance = balance + amount
        return "Deposited successfully"
    }

    function withdraw(amount) {

        if (amount <= balance) {
            balance = balance - amount
            return "Withdrawal successfully"
        }
        else {
            return "insufficient balance"
        }
    }

    function getBalance() {
        return balance
    }

    return {
        deposit,
        withdraw,
        getBalance
    }
}
const res = createBankAccount()
// console.log(res.balance)     private variable bcz of closure
console.log(res.getBalance())
console.log(res.deposit(1000))
console.log(res.getBalance())
console.log(res.withdraw(3000))
console.log(res.getBalance())