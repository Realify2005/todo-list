import "../styles/content.css";
const listOfContents = [];

function initializeContent() {
    const div = document.createElement("div");
    div.classList.add("contentBox");

    const templateBox = document.querySelector(".template-box");
    templateBox.appendChild(div);
}

function createContent(index) {
    const contentBox = document.querySelector(".contentBox");
    
    const div = document.createElement("div");
    div.classList.add("content");

    const headerDiv = document.createElement("div");
    headerDiv.classList.add("headerTask");

    const header = document.createElement("h3");
    header.textContent = "Add Task";
    const input = document.createElement("input");
    input.placeholder = "Enter Task";
    const addButton = document.createElement("button");
    addButton.textContent = "+";
    addButton.addEventListener("click", () => {
        addTask(div, input.value);
    })

    headerDiv.appendChild(header);
    headerDiv.appendChild(input);
    headerDiv.appendChild(addButton);

    div.appendChild(headerDiv);
    div.setAttribute("index", index);

    contentBox.textContent = '';
    contentBox.appendChild(div);
    listOfContents.push(div);
}

function loadContent(index) {
    const contentBox = document.querySelector(".contentBox");
    contentBox.textContent = '';
    for (let i = 0; i < listOfContents.length ; i++) {
        if (index === parseInt(listOfContents[i].getAttribute("index"))) {
            contentBox.appendChild(listOfContents[i]);
        }
    }
}

function addTask(box, name) {
    const taskBox = document.createElement("div");
    taskBox.classList.add("taskBox");

    const title = document.createElement("h4");
    title.textContent = name;

    const checkboxDiv = document.createElement("div");
    checkboxDiv.classList.add("checkbox-div");
    const checkboxContent = document.createElement("h4");
    checkboxContent.textContent = "Task Completed";
    checkboxDiv.appendChild(checkboxContent);
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkboxDiv.appendChild(checkbox);

    const delButton = document.createElement("button");
    delButton.classList.add("deleteButton")
    delButton.textContent = "Delete";
    delButton.addEventListener("click", () => {
        taskBox.style.display = "none";
    })

    taskBox.appendChild(title);
    taskBox.appendChild(checkboxDiv);
    taskBox.appendChild(delButton);

    box.appendChild(taskBox);
}

export default {
    initializeContent,
    createContent,
    loadContent
}