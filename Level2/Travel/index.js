const form = document.traveler;

form.addEventListener("submit", (event) => {
    event.preventDefault();
    var firstName = form.fName.value;
    var lastName = form.lName.value;
    var age = form.age.value;
    var gender = form.gender.value;
    var location = form.location.value;
    var diet = [];
    for(let i = 0; i < form.diet.length; i++){
        if(form.diet[i].checked){
            diet.push(form.diet[i].value)
        }
    }


    alert("First Name: " + firstName + "\nLast Name: " + lastName + "\nAge: " + age + "\nGender: " + gender + "\nTravel Location: " + location + "\nDiet: " + diet);
})