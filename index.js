console.log('Conexión con JS')

window.addEventListener('load', function() {
    const storedValue = localStorage.getItem('inputValue');
    if (storedValue) {
      inputText.value = storedValue;
    }
});

const button = document.getElementById('button');
const clearButton = document.getElementById('clearButton');
const inputText = document.getElementById('inputText');
const target = document.getElementById('target');

// Al cargar la página, recupera el valor almacenado en localStorage y lo muestra en el input
window.addEventListener('load', function() {
    const storedValue = localStorage.getItem('inputValue');
    if (storedValue) {
      inputText.value = storedValue;
    }
});


btnAdd.addEventListener('click', function() {
// Obtén el valor del input
const inputValue = inputText.value;
// Almacena el valor del input en localStorage
localStorage.setItem('inputValue', inputValue);
// Crea un nuevo elemento p
const newElement = document.createElement('p'); 

//newElement.className('.text');

// Establece el contenido HTML del nuevo elemento al valor del input y a los dos botones
newElement.innerHTML = inputValue + '<button class="btnEdit bg-primary">Editar</button><button class="btnDel bg-danger">Borrar</button>';
// Añade el nuevo elemento al final del elemento target
target.appendChild(newElement);

// Añade un evento click al botón button2
const btnDel = newElement.querySelector('.btnDel');
btnDel.addEventListener('click', function() {
// Elimina el elemento p (el elemento padre del botón button2)
target.removeChild(newElement);
});

// Añade un evento click al botón button1
const btnEdit = newElement.querySelector('.btnEdit');
btnEdit.addEventListener('click', function() {
    // Muestra un cuadro de diálogo de edición de texto
    const newValue = prompt('Ingresa el nuevo valor:');
    // Si el usuario ingresó un valor y no canceló el cuadro de diálogo
    if (newValue !== null) {
      // Establece el contenido HTML del elemento p al nuevo valor y a los dos botones
      newElement.innerHTML = newValue + '<button class="btnEdit bg-primary">Editar</button><button class="btnDel bg-danger">Borrar</button>';
      // Añade un evento click al nuevo botón button1
      const newButton1 = newElement.querySelector('.btnEdit');
      newBtnEdit.addEventListener('click', function() {
        // Muestra un cuadro de diálogo de edición de texto
        const newerValue = prompt('Corrige el nombre:');
        // Si el usuario ingresó un valor y no canceló el cuadro de diálogo
        if (newerValue !== null) {
          // Establece el contenido HTML del elemento p al nuevo valor y a los dos botones
          newElement.innerHTML = newerValue + '<button class="btnEdit bg-primary">Editar</button><button class="btnDel bg-danger">Borrar</button>';
        }
      });
    }
});


clearButton.addEventListener('click', function() {
        // Elimina el valor almacenado en localStorage
localStorage.removeItem('inputValue');
        // Elimina todos los hijos del elemento target
while (target.firstChild) {
target.removeChild(target.firstChild);
        }
});

// Recupera el valor del input almacenado en localStorage
const storedValue = localStorage.getItem('inputValue');
// Si hay un valor almacenado, establece el valor del input al valor almacenado
if (storedValue) {
    inputText.value = storedValue;
}})