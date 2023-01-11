let emp = { id: 101, name: "Rahul", email: "rahul@gmail.com" }
let details = { email: "rahul@tcs.com", sal: 45000 }
let emp_Detiail = { ...emp, ...details }

console.log(emp_Detiail)