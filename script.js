function Darkmode() {
    let element = document.body;
    let toggleDarkmode = document.querySelector("#toggleDarkmode")
    let body = document.getElementsByTagName("body")

    if (toggleDarkmode.checked) {
       element.classList.toggle("dark-mode")
    } else {
       body
    }
}

function darkMode() {
    const element = document.body;
    element.classList.toggle("dark-mode")
}