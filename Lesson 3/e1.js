
// presentation example 
const dog = {
    sound: "woof",
    bark(){
        console.log(this.sound)
    }
}
dog.bark()
const barkingFunction = () =>dog.bark()
barkingFunction()