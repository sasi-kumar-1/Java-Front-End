class Account {
    acc_id;
    acc_Name;
    /* constructor() {
        console.log("Test Case 2334")
    } */
    constructor(id, name) {
        console.log("Test Case 2334")
        this.acc_id = id;
        this.acc_Name = name
    }
    open_Account() {
        console.log("Account Opened Successfully")
    }
}


module.exports = Account