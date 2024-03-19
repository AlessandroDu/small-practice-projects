function addTodo() {
    // retrieve and store user input
    const todoElement = document.getElementById("todo");
    const todo = todoElement.value;
    todoElement.value = "";
    
    // retrieve ul, create li element, populate it, add it to list
    const ul = document.getElementById("listElement");
    const li = document.createElement("li");
    // populate li -> create text node, append it
    const text = document.createTextNode(todo);
    li.appendChild(text);

    // populate ul with li
    ul.appendChild(li);

    ul.setAttribute("onclick", "this.remove()");
}
