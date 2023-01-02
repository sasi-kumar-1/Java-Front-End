
const SA = require('./SA')
const CA = require('./CA')

let sa1 = new SA(101, "Rahul", 5000);
console.log(sa1)
sa1.open_Account();
console.log(sa1.get_Bal())
let ca1 = new CA(102, "Priyanaka", 7000000, "Premium")
console.log(ca1)
ca1.open_Account()
console.log(ca1.get_Bal())