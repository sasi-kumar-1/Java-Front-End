class Account {
    min_Bal = 500
    acc_Id;
    acc_Name;
    constructor(id, name, amount) {
        this.acc_Id = id;
        this.acc_Name = name
        this.acc_Amount = amount
    }
    deposit_Amount(amount) {
        this.acc_Amount = this.acc_Amount + amount
    }
    get_Bal() {
        return this.acc_Amount - this.min_Bal
    }
}

let a1 = new Account(101, "Rahul", 5000)
let a2 = new Account(102, "Priyanka", 49999)
console.log(a1)
console.log(a2)
a1.deposit_Amount(200)
a2.deposit_Amount(1200)
console.log(a1)
console.log(a2)


console.log(a1.get_Bal())
console.log(a2.get_Bal())