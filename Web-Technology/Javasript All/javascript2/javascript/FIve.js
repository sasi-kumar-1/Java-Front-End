class Account {
    min_Bal = 500
    open_Account() {
        console.log("Account Opened Successfully")
    }
    deposit_Amount() {
        console.log("Amount Deposited")
    }
    get_Bal() {
        console.log("Server Busy")
    }
    get_St() {
        console.log("Please Download - free")
    }
    withdrawl() {
        console.log("Insufficient Bal")
    }
    close_account() {
        console.log("close - Enjoy")
    }
}

let a1 = new Account();
let a2 = new Account();
let a3 = new Account();
console.log(a1)
console.log(a2)
console.log(a3)

a1.open_Account()
a1.deposit_Amount()
a1.get_Bal()
a1.get_St()
a1.withdrawl()
a1.close_account()