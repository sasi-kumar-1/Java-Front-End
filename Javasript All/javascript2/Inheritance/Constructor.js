class Account {
    constructor() {
        console.log("Account class - const")
    }
}
class SA extends Account {
    constructor() {
        super()
        console.log("SavingsAccount Constructor")
    }
}
let kajal = new SA();