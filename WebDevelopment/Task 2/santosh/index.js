const btn = document.querySelector('button');

btn.addEventListener('click', changebg);

function changebg() {
    let element = document.body;
    element.classList.toggle('dark');
}
