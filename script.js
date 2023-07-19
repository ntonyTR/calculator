const operaciones = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  "*": (a, b) => a * b,
  "/": (a, b) => a / b,
};

function recibirPrimerValor() {
  let a;
  while(isNaN(a)) {
    a = 2 //+prompt("Ingresa un valor numerico: ");
  }
  console.log(`Primer valor: ${a}`);
  return a;
}

function recibirOperador() {
  let op;
  let operadores = Object.keys(operaciones);
  while(!operadores.includes(op)){
  op = '+' //prompt("Ingresa un operador (+, -, *, /): ");
  }
  console.log(`operador: ${op}`);
  return op;
}

function recibirSegundoValor() {
  let b;
  while(isNaN(b)){
  b = 2 //+prompt("Ingresa un valor numerico: ");
  }
  console.log(`Segundo valor: ${b}`);
  return b;
}

function ejecutarOperacion(op, a, b) {
  console.log(`operacion: ${a} ${op} ${b}`);
  console.log(`resultado: ${operaciones[op](a, b)}`);
  return operaciones[op](a, b);
}

function reiniciar() {
  valor1 = recibirPrimerValor();
  operador = recibirOperador();
  valor2 = recibirSegundoValor();
  resultado = ejecutarOperacion(operador, valor1, valor2);
  return;
}

function continuar(resultado) {
  let continuar = 'n' //prompt(`Resultado: ${resultado}\n Deseas continuar calculando?`);
  if (continuar == 'y') {
    console.log('si continuar')
    valor1 = resultado;
    operador = recibirOperador()
    valor2 = recibirSegundoValor();
    resultado = ejecutarOperacion(operador, valor1, valor2);
    continuar()
  } else if (continuar == 'n'){
    console.log('no continuar');
  }
}

// let valor1 = recibirPrimerValor();
// let operador = recibirOperador();
// let valor2 = recibirSegundoValor();
// let resultado = ejecutarOperacion(operador, valor1, valor2);
// continuar(resultado)

//TODO: MOSTRAR VALORES PRESIONADOS EN LA PANTALLA


const number_buttons = document.querySelectorAll(".number_button")
const display = document.getElementById('calculator_display')

let value = '';
let numericValue = 0;
number_buttons.forEach(button => {
  button.addEventListener('click', () => {
    value += button.textContent;
    numericValue = +value;
    console.log(value);
    display.textContent = value;
  })
});


