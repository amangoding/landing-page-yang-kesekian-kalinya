// function Darkmode() {
//     let element = document.body;
//     let toggleDarkmode = document.querySelector("#toggleDarkmode")
//     let body = document.getElementsByTagName("body")

//     if (toggleDarkmode.checked) {
//        element.classList.toggle("dark-mode")
//     } else {
//        body
//     }
// }

function darkMode() {
    let element = document.body;

    element.classList.toggle("dark-mode")
}

function toggledark() {
    const root = document.body;
    const isDark = root.dataset.theme === 'dark';

    if (root.dataset.theme === isDark) {
        'dark'
    } else {
        'light'
    }

    root.dataset.theme = isDark ? 'light' : 'dark'; 
}