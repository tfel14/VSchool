const readline = require('readline-sync');


function add(a,b){
    return num1 + num2
};

function subtract(a,b){
    return num1 - num2
};

function multiply(a,b){
    return num1 * num2
};

function divide(a,b){
    return num1 / num2
}


const num1 = readline.keyIn('Please enter your first number');
console.log(num1);
const num2 = readline.keyIn('Please enter your second number ');
console.log(num2);
const operator = readline.keyIn('Please enter the operation to perform: (a)dd, (s)ub, (m)ul, (d)iv');
console.log(operator);
if(operator == 'a'){
    console.log('The result is: ' + add(num1,num2))
} else if(operator == 's'){
    console.log('The result is: ' + subtract(num1,num2))
} else if(operator == 'd'){
    console.log('The result is: ' + divide(num1,num2))
} else if(operator == 'm'){
    console.log('The result is: ' + multiply(num1,num2))
} else{
    console.log('You selected an invalid operation.')
}


