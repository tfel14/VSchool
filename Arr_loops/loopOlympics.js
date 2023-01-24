/* *Preliminaries**

1. Write a for loop that prints to the console the numbers 0 through 9.
2. Write a for loop that prints to the console 9 through 0.
3. Write a for loop that prints these fruits to the console.`const fruit = ["banana", "orange", "apple", "kiwi"]` */

let numbers = [0,1,2,3,4,5,6,7,8,9];
for(var i = 0; i < numbers.length; i++){
    console.log(numbers[i])
};

for(var i = numbers.length - 1; i >=0; i--){
    console.log(numbers[i])
};

const fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"];
for(var i = 0; i < fruit.length; i++){
    console.log (fruit[i])
}



/* *Bronze Medal**

1. Write a for loop that will push the numbers 0 through 9 to an array.
2. Write a for loop that prints to the console only even numbers 0 through 100.
3. Write a for loop that will push every other fruit to an array.`const fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]`  */

let arr = []
for(var i = 0; i < numbers.length; i++){
    arr.push(numbers[i])
};
console.log(arr)

for(var i = 0; i <= 100; i++){
    if(i%2 === 0){
        console.log(i)
    }
}

for(var i = 0; i < fruit.length; i++){
    if(i%2 !== 0){
        console.log(fruit[i])
    }
}

