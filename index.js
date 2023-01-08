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
const inputValue = inputText.value;
localStorage.setItem('inputValue', inputValue);
const newElement = document.createElement('p'); 

newElement.innerHTML = inputValue + '<button class="btnEdit bg-primary">Editar</button><button class="btnDel bg-danger">Borrar</button>';

target.appendChild(newElement);


const btnDel = newElement.querySelector('.btnDel');
btnDel.addEventListener('click', function() {
target.removeChild(newElement);
});

const btnEdit = newElement.querySelector('.btnEdit');
btnEdit.addEventListener('click', function() {
    const newValue = prompt('Ingresa el nuevo valor:');
    if (newValue !== null) {
      newElement.innerHTML = newValue + '<button class="btnEdit bg-primary">Editar</button><button class="btnDel bg-danger">Borrar</button>';
      
      const newButton1 = newElement.querySelector('.btnEdit');
      newBtnEdit.addEventListener('click', function() {
        const newerValue = prompt('Corrige el nombre:');
        if (newerValue !== null) {
          newElement.innerHTML = newerValue + '<button class="btnEdit bg-primary">Editar</button><button class="btnDel bg-danger">Borrar</button>';
        }
      });
    }
});


clearButton.addEventListener('click', function() {
localStorage.removeItem('inputValue');
while (target.firstChild) {
target.removeChild(target.firstChild);
        }
});

const storedValue = localStorage.getItem('inputValue');
if (storedValue) {
    inputText.value = storedValue;
}})