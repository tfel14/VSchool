const square = document.getElementById("box");

square.addEventListener("mouseover", function(){
    square.style.backgroundColor = "blue";
});

square.addEventListener("mouseleave", function(){
    square.style.backgroundColor = "white";
});

square.addEventListener("mousedown", function(){
    square.style.backgroundColor = "red";
} );

square.addEventListener("mouseup", function(){
    square.style.backgroundColor = "yellow";
} );

function dblClick(){
    square.style.backgroundColor = "green";
};

document.body.addEventListener("mousewheel", function() {
    square.style.backgroundColor = "orange";
});
// keyup event applies for keyboard triggers. e.key records the event to  specify the key from the function.
document.body.addEventListener("keyup", e => {
    if(e.key === "r"){
        square.style.backgroundColor = "red";
    } else if(e.key === "b"){
        square.style.backgroundColor = "blue";
    } else if(e.key === "y"){
        square.style.backgroundColor = "yellow";
    } else if(e.key === "g"){
        square.style.backgroundColor = "green";
    } else if(e.key === "o"){
        square.style.backgroundColor = "orange";
    }
});