let cars = [{ model: "Tata", price: 600000, color: 'White' },
{ model: "BMW", price: 60000, color: 'red' },
{ model: "Mahindra", price: 6300000, color: 'blue' },
{ model: "toyota", price: 1600000, color: 'White' },
{ model: "skoda", price: 1600000, color: 'red' },
{ model: "ola", price: 7600000, color: 'blue' },
{ model: "tesla", price: 5600000, color: 'yellow' },
{ model: "audi", price: 1600000, color: 'pink' },
{ model: "tesla", price: 400000, color: 'green' }]


let new_Cars = []
for (car of cars) {
    if (car.model == "tesla") {
        new_Cars.push(car)
    }
}
/* new_Cars = cars.filter((car) => {
    return car.model == "tesla"
})
 */
console.log(cars)
console.lognew-Car