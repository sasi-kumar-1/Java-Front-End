const Account = require('./Account')



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

let sa1 = new SA(101, "Rahul", 5000);
console.log(sa1)
sa1.open_Account();
console.log(sa1.get_Bal())