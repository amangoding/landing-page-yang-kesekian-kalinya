function Darkmode() {
    let element = document.body;
    let toggleDarkmode = document.querySelector("#toggleDarkmode")

    if (toggleDarkmode.checked) {
       element.classList.toggle("dark-mode")
    } else {
       document.body
    }
}

function darkMode() {
    const element = document.body;
    element.classList.toggle("dark-mode")
}