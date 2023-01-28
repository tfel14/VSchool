var employees = []

function Employee(name, jobTitle, salary){
    this.name = name
    this.jobTitle = jobTitle
    this.salary = salary
    this.status = "Full Time"
}

Employee.prototype.printEmployeeForm = function(){
    console.log(`Name:${this.name}, Job Title: ${this.jobTitle}, Salary: ${this.salary}, Status: ${this.status}`)
}

var test1 = new Employee("Test 1", "Teacher", "$35/hour")
var test2 = new Employee("Test 2", "Admin", "$55/hour")
var test3 = new Employee("Test 3", "student teacher", "$20/hour")

test3.status = "Part Time"
employees.push(test1,test2,test3)

test1.printEmployeeForm()
console.log(employees)
