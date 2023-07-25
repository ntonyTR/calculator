// TODO: Actualmente no funciona, debido a que al clickear en un boton de numero, se actualizan ambas variables (firstValue y secondValue) con el mismo valor, es necesario separar la declaracion de la primer variable de la segunda (tal vez tomando el segundo valor hasta que se presiona un operador?)

const operations = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  x: (a, b) => a * b,
  "/": (a, b) => a / b,
};

const num_btns = document.querySelectorAll(".numeric_buttons");
const display = document.getElementById("calculator_display");
const op_btns = document.querySelectorAll(".operator_buttons");
const equal_btn = document.getElementById("equal_button");
let firstValue = 0;
let secondValue = 0;
let op = "";
let result = 0;

function getFirstValue() {
  num_btns.forEach((btn) => {
    btn.addEventListener("click", () => {
      firstValue = updateValue(firstValue, btn);
      updateDisplay(firstValue);
      console.log(firstValue); // test
    });
  });
}

function getSecondValue() {
  num_btns.forEach((btn) => {
    btn.addEventListener("click", () => {
      secondValue = updateValue(secondValue, btn);
      updateDisplay(secondValue);
      console.log(secondValue);
    });
  });
}

function updateValue(value, element) {
  value += element.textContent;
  value = +value;
  return value;
}

function updateDisplay(value) {
  display.textContent = value;
}

function getOperator() {
  op_btns.forEach((btn) => {
    btn.addEventListener("click", () => {
      op = btn.textContent;
      console.log(op); // test
      updateDisplay(op);
    });
  });
}

function makeOperation() {
  equal_btn.addEventListener("click", () => {
    console.log(`operacion: ${firstValue} ${op} ${secondValue}`);
    console.log(`resultado: ${operations[op](firstValue, secondValue)}`);
    result = operations[op](firstValue, secondValue);
    updateDisplay(result);
  });
}

getFirstValue();
getOperator();
getSecondValue();
makeOperation();

// function reiniciar() {
//   valor1 = recibirPrimerValor();
//   operador = recibirOperador();
//   valor2 = recibirSegundoValor();
//   resultado = ejecutarOperacion(operador, valor1, valor2);
//   return;
// }

// function continuar(resultado) {
//   let continuar = "n";
//   if (continuar == "y") {
//     console.log("si continuar");
//     valor1 = resultado;
//     operador = recibirOperador();
//     valor2 = recibirSegundoValor();
//     resultado = ejecutarOperacion(operador, valor1, valor2);
//     continuar();
//   } else if (continuar == "n") {
//     console.log("no continuar");
//   }
// }
