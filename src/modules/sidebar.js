import "../styles/sidebar.css";
import content from "./content";

function initializeSidebar() {
    let index = 1;
    const div = document.createElement("div");
    div.classList.add("sidebar");

    const headerDiv = document.createElement("div");
    headerDiv.classList.add("header");

    const header = document.createElement("h3");
    header.textContent = "Add Project";
    const input = document.createElement("input");
    input.placeholder = "Enter project title";
    const addButton = document.createElement("button");
    addButton.textContent = "+";
    addButton.addEventListener("click", () => {
        addProject(div, input.value, index++);
    })

    headerDiv.appendChild(header);
    headerDiv.appendChild(input);
    headerDiv.appendChild(addButton);

    div.appendChild(headerDiv);
    
    const templateBox = document.querySelector(".template-box");
    templateBox.appendChild(div);
}

function addProject(box, name, index) {
    content.createContent(index);
    const projectBox = document.createElement("div");
    projectBox.setAttribute("index", index);
    projectBox.addEventListener("click", () => {
        content.loadContent(index);
    })
    projectBox.classList.add("projectBox");

    const title = document.createElement("h4");
    title.textContent = name;

    const delButton = document.createElement("button");
    delButton.classList.add("deleteButton")
    delButton.textContent = "Delete";
    delButton.addEventListener("click", () => {
        projectBox.style.display = "none";
    })

    projectBox.appendChild(title);
    projectBox.appendChild(delButton);

    box.appendChild(projectBox);
}

export default initializeSidebar;



