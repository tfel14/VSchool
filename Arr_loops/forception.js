var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
var alphabet = "abcdefghijklmnopqrstuvwxyz"
let newArr = [];

function forception(a, b){
    for(var i = 0; i < people.length; i++){
       newArr.push(people[i])
       for(var j = 0; j < alphabet.length; j++){
        var test = alphabet.toUpperCase().split("");
        newArr.push(test[j])
       }
    }
    return newArr
}

console.log(forception(people, alphabet));