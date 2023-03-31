const add = document.add;
const subtract = document.subtract;
const multiply = document.multiply;

add.addEventListener("submit", function(event){
    event.preventDefault();
    const a = add.inputA.value;
    const b = add.inputB.value;
    add.inputA.value = "";
    add.inputB.value = "";

    add.result.value = Number(a) + Number(b);
})

subtract.addEventListener("submit", function(event){
    event.preventDefault();
    const a = subtract.inputA.value;
    const b = subtract.inputB.value;
    subtract.inputA.value = "";
    subtract.inputB.value = "";

    subtract.result.value = Number(a) - Number(b);
})

multiply.addEventListener("submit", function(event){
    event.preventDefault();
    const a = multiply.inputA.value;
    const b = multiply.inputB.value;
    multiply.inputA.value = "";
    multiply.inputB.value = "";

    multiply.result.value = Number(a) * Number(b);
})