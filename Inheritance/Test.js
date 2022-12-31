class Parent {
    assets = 50000000;
    get_Details() {
        return "Parent Details are:"
    }
}
class Child extends Parent {
    qualities = "Good"
}
let c1 = new Child()
console.log(c1)
console.log(c1.assets)
console.log(c1.qualities) //undefined
console.log(c1.get_Details())