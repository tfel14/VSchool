function upperLower(a){
    console.log(a.toUpperCase() + a.toLowerCase());
}

upperLower("hello");

function findMiddleIndex(a){
    let num = Math.floor(a.length / 2);
    console.log(num) 
}

findMiddleIndex("hello")

function returnFirstHalf(a){
    var half = Math.floor(a.length / 2);
    var done = a.slice(0, half);
    console.log(done)

}

returnFirstHalf("Hello")

function capitalizeAndLowerCase(a){
    var half = Math.floor(a.length / 2);
    var first = a.toUpperCase().slice(0,half)
    var second = a.toLowerCase().slice(half)
    var done = first.concat(second);
    console.log(done)
}

capitalizeAndLowerCase("hello")