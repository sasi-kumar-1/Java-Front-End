

import bcrypt from 'bcrypt'
let user = { name: "Rahul", email: "rahul@gmail.com", password: "123456789", cc: '1234123411112222' }
console.log(user)
let salt = bcrypt.genSaltSync(10)
let newPassword = bcrypt.hashSync(user.password, salt)
let newCC = bcrypt.hashSync(user.cc, salt)

user = { ...user, password: newPassword, cc: newCC }
console.log(user)
let flag = bcrypt.compareSync("12345678", user.password)
if (flag) {
    console.log("Login Successfull")
}
else {
    console.log("Login Failure")
}