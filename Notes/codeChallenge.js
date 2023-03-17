const names = [ "Jerry", "Adam" ]
const person = { firstName: "Robert", lastName: "Jones", age: 37 }
// Add robert to names
// person.firstname = Robert
// names[0] = Jerry

var addName = person.firstName;

names.push(addName)

console.log(names)