class Parent {
    get_Details() {
        console.log("Parent class -Get Details")
    }
}
class Child extends Parent {
    get_Details() {
        super.get_Details()
        console.log("Child class -Get Details")
    }
}
let c = new Child();
c.get_Details()