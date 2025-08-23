// function cambiarTexto(){
//     document.getElementById("titulo")
//     .innerText = "Hola gente que programa mucho"


const input = document.getElementById('input');
const agregarBtn = document.getElementById('agregarBtn');
const lista = document.getElementById('lista');

agregarBtn.addEventListener('click', function() {
    const nuevaTareaTexto = input.value.trim();
    if (nuevaTareaTexto === '') return;

    
    const nuevaTareaLi = document.createElement('li');
    nuevaTareaLi.textContent = nuevaTareaTexto;

    const btnEliminar = document.createElement('button');
    btnEliminar.textContent = 'Eliminar';
    btnEliminar.style.marginLeft = '10px';

    
    btnEliminar.addEventListener('click', function() {
        nuevaTareaLi.remove();
    });

    
    nuevaTareaLi.appendChild(btnEliminar);   
    lista.appendChild(nuevaTareaLi);

    input.value = '';
});
