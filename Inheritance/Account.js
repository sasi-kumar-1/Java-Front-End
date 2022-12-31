class Account {
    acc_id;
    acc_Name;
    constructor(id, name) {
        this.acc_id = id;
        this.acc_Name = name
    }
    open_Account() {
        console.log("Account Opened Successfully")
    }
}
class SA extends Account {
    min_Bal = 500
    acc_Amount;
    constructor(id, name, amount) {
        super(id, name);
        this.acc_Amount = amount
    }
    get_Bal() {
        return this.acc_Amount - this.min_Bal
    }
}
class CA extends Account {
    min_Bal = 25000
    acc_Amount;
    acc_Type;
    constructor(id, name, amount, type) {
        super(id, name)
        this.acc_Amount = amount
        this.acc_Type = type

    }
    get_Bal() {
        return this.acc_Amount - this.min_Bal
    }
}

let sa1 = new SA(101, "Rahul", 5000);
console.log(sa1)
sa1.open_Account();
console.log(sa1.get_Bal())
let ca1 = new CA(102, "Priyanaka", 7000000, "Premium")
console.log(ca1)
ca1.open_Account()
console.log(ca1.get_Bal())