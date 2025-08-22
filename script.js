// function cambiarTexto(){
//     document.getElementById("titulo")
//     .innerText = "Hola gente que programa mucho"


const input = document.getElementById('input');
const agregarBtn = document.getElementById('agregarBtn');
const lista = document.getElementById('lista');
agregarBtn.addEventListener('click', function() {
const nuevaTareaTexto = input.value;
if (nuevaTareaTexto === '') return;
const nuevaTareaLi = document.createElement('li');
nuevaTareaLi.textContent = nuevaTareaTexto;
lista.appendChild(nuevaTareaLi);
input.value = '';
});