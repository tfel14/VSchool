var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];
//2
fruit.shift()


//1
vegetables.pop()

//3
console.log(fruit.indexOf("orange"));

//4
fruit.push(fruit.indexOf("orange"))

//5
console.log(vegetables.length)

//6
vegetables.push(vegetables.length)

//7
var food = fruit.concat(vegetables);
console.log("food: ", food)

//8
food.splice(4,2)
console.log(food)

//9 
console.log(food.reverse())

//10
console.log(food.join())

console.log("fruit: ", fruit);
console.log("vegetables: ", vegetables);