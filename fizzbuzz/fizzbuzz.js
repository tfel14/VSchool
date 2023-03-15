var nums = 100;
let a = 0;
let b = 0;
let c = 0;

for(var i = 0; i <= nums; i++) {
    var output = {
        FizzBuzz: a,
        Fizz: b,
        Buzz: c
    };
  if (i % 3 == 0 && i % 5 == 0) {
    a += 1
  } else if (i % 3 == 0) {
    b += 1
  } else if (i % 5 == 0) {
    c += 1
  } 
}

console.log(output)