import bcrypt from 'bcrypt'
let user = { name: "Rahul", email: "rahul@gmail.com", password: "123456789", cc: '1234123411112222' }
console.log(user)
let salt = bcrypt.genSaltSync(10)
let newPassword = bcrypt.hashSync(user.password, salt)
let newCC = bcrypt.hashSync(user.cc, salt)
/* console.log(user.password)
console.log(user.cc)
console.log(newPassword)
console.log(newCC) */

user = { ...user, password: newPassword, cc: newCC }
console.log(user)