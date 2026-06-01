const datalist = document.querySelector('.datalist')
const elemenanune = document.createElement('p')

elemenanune.innerHTML = 'silahkan masukkan framework anda'

datalist.append(elemenanune)

function darkMode() {
    let element = document.body;

    element.classList.toggle("dark-mode")
}

function toggledark() {
    const root = document.body;
    const isDark = root.dataset.theme === 'dark';

    root.dataset.theme = isDark ? 'light' : 'dark'; 
}