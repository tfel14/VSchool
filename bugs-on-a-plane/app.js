const form = document.airlineForm;
const submit = document.getElementById("submit");
const query = document.querySelector;

function formAlert(event) {
    var firstName = form.firstName.value;
    var lastName = form.lastName.value;
    var age = form.age.value;
    var gender = form.gender.value;
    var location = form.travelLocation.value;
    var diet = [];
    if (form.vegan.checked) {
         diet.push(form.vegan.value);
    }
    if (form.gluten.checked) {
        diet.push(form.gluten.value);
    }
    if (form.paleo.checked) {
        diet.push(form.paleo.value);
    }


    alert("First Name: " + firstName + "\nLast Name: " + lastName + "\nAge: " + age + "\nGender: " + gender + "\nTravel Location: " + location + "\nDiet: " + diet + "\nAwesome, now if you die, it won't be an accident..");
}

submit.addEventListener("click", formAlert);