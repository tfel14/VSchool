// normal way to call up a form to get data
const entry = document.getElementById("my-form")

//If you give the form element a name attribute then you can directly call it. "list" is the name given to the form.
const form = document.list

// Submit event

form.addEventListener("submit", function(event){
    event.preventDeault() // needed to stop the page from refeshing whenever user submits

    //If you give the input element a name attribute; it can be directly called up just like the form. "user" is the name and value gets the text from the input box.
    const name = form.user.value

    // resets the input boxes after data is grabbed from the user submission
    form.user.value = ""

    //3 steps to add the form data to the page

    // 1 make a variable foe the element that you want to create. <h1></h1>
    const h1 = document.createElement("h1")
   
    // 2 assign the content of the new h1 <h1>"entered text"</h1>
    h1.textContent = name
   
    // 3 Append/Add the element to the DOM
    document.getElementsByTagName("body")[0].append(h1)

})

// Placehorder attribute allows you to put a deffault text into the input box.

// Required attribute has the bowser show an error if the required field on the form isn't filled out.

// If you give radio buttons the same name then the browers will only let you select one of them. To select data from radios and checkboxes you have to give them a value in order to recieve the information. 

// Checkbox selections must be looped over in order to get what information was selected

const checkedInputs = [] // Array to hold what checked boxes were pressed.

for(let i = 0; i < form.entertainment.length; i++)
{
    if(form.entertainment[i].checked){
        checkedInputs.push(form.entertainment[i].value)
    }
    
    console.log(checkedInputs)
}





