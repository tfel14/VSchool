const form = document.addItem


form.addEventListener("submit", () => {
    event.preventDefault();
    const newItem = form.title.value;
    const li = document.createElement("li")
    li.innerHTML = "<div>"+ newItem +"</div><button>edit</button><button>X</button>"
    document.getElementById("list").appendChild(li);
})

