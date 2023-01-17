const form = document.addItem
const remove = document.getElementById("list")


form.addEventListener("submit", (e) => {
    e.preventDefault();
    const newItem = form.title.value;
    const li = document.createElement("li")
    li.innerHTML = `<div>${newItem}</div><button>edit</button><button>X</button>`
    document.getElementById("list").appendChild(li);
    form.title.value = "";
})

remove.addEventListener("click", (e) => {
    e.target.parentElement.remove()
})
