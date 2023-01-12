let employees = [{ id: 101, name: "Rahul", email: "rahul@pm.com" },
{ id: 102, name: "Sonia", email: "sonia@pm.com" }]

let createEmployee = (emp) => {
    setTimeout(() => {
        employees.push(emp)
    }, [4000])
}
let getEmployees = () => {
    setTimeout(() => {
        let rows = ""
        employees.map((employee) => {
            rows = rows + `<tr>
                            <td>${employee.id}</td>
                            <td>${employee.name}</td>
                            <td>${employee.email}</td>
                           </tr>`
        })
        document.getElementById('tbody_Data').innerHTML = rows
    }, [1000])
}
createEmployee({ id: 103, name: "Priyanka", email: "priya@gmail.com" })
getEmployees()