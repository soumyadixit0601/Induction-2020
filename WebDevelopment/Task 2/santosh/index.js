/*eslint-env es6*/
const btn = document.querySelector('button');

btn.addEventListener('click', changebg);

function changebg() {
    let element = document.querySelector('body');
    element.classList.toggle('dark');
}
