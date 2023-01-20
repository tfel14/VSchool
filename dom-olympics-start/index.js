// Access the header element and add the required text
let header = document.getElementById("header")
header.innerHTML = "JavaScript made this!!<br><span>Troy</span> wrote this JavaScript"; 

// Add the CSS style classes
document.querySelector("#header").classList.add("header");
document.querySelector("span").classList.add("name");

// variable for the messages DIVs
let msg = document.getElementsByClassName("message");

// Change the conversation
msg[0].textContent = "Will this work?";
msg[1].textContent = "I hope so";
msg[2].textContent = "yea I really hope so too";
msg[3].textContent = "It Did!!!";

// clears the chat
let clear = document.getElementById("clear-button");
clear.addEventListener("click", function(){
    let msgs = document.getElementsByClassName("messages");
    msgs[0].innerHTML = "";
});

// Change the theme
let theme = document.getElementById("theme-drop-down")
theme.addEventListener("change", function(){
    event.target.classList.toggle("theme");
    console.log(event.target.value);
});

// Make a new div with the input in the form box
let newMsg = document.getElementById("input").value;
let sent = document.getElementById("send-button");
sent.addEventListener("click", function(){
    event.preventDefault();
    let div = document.createElement('div')
    div.textContent = newMsg;
    div.className = "message left";
    document.getElementsByClassName('messages')[0].append(div);
    console.log('clicked')
})