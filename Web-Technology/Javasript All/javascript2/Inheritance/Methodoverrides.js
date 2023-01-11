class Account {
    get_Bal() {
        return 0
    }
}
class SA extends Account {
    min_Bal = 500
    acc_Amount = 5000
    /*  get_Bal() {
         return this.acc_Amount - this.min_Bal
     } */
}
let s1 = new SA();
let bal = s1.get_Bal()
console.log(bal)