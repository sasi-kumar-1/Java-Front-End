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
class SA extends Account { }
class CA extends Account { }