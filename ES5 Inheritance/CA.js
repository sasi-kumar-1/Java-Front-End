const Account = require('./Account')
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

module.exports = CA