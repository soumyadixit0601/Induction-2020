let button = document.querySelector('button');

button.addEventListener('click', changebg);

function changebg() {
    let element = document.body;
    element.classList.toggle('dark');
}