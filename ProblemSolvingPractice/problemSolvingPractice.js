function largest(arr){
    var largest = arr[0]
arr.forEach(function(i) {
  if (i > largest){
    largest = i 
  }
})
return largest;
}


function lettersWithStrings(arr, char){
    let match = []
    for(var i=0; i < arr.length; i++){
        if(arr[i].includes(char) == true){
            match.push(arr[i])
        }
    }
    return match
}



function isDivisible(num1, num2){
    return num1 % num2 === 0 
}

