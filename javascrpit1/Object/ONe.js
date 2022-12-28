let emp = {
    id: 101,
    name: "Rahul",
    sal: 45000,
}
console.log(emp)
console.log(emp.id)
console.log(emp.name)
console.log(emp.sal)
console.log(emp.email)
console.log("***Update Operation*****")
emp.loc = "Wayanad"
console.log(emp)
console.log("***Delete Op***")
delete emp.sal
console.log(emp)