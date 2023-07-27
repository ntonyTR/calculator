//TODO: funcion para sacar porcentaje
//TODO: funcion para borrar un numero sin tener que reiniciar todo
//TODO: funcion para escribir punto decimal y alterar el valor como float
//TODO: hacer que se pueda seguir calculando con el resultado de la operacion, tomar este resultado como a y obtener un nuevo b
//TODO: aceptar un numero negativo como primer valor (empezar con '-')
//TODO: aceptar mas de dos operandos y mas de un operador sin necesidad de clickear '='

const OPERATIONS = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  "x": (a, b) => a * b,
  "/": (a, b) => a / b,
};

const VALUES = {
  a: 0,
  b: 0,
};

const FIRST_OPERAND = "a";
const SECOND_OPERAND = "b";

let op = "";
let result = 0;
let updateFirst = true;

const NUM_BTNS = document.querySelectorAll(".numeric_buttons");
const DISPLAY = document.getElementById("calculator_display");
const OP_BTNS = document.querySelectorAll(".operator_buttons");
const EQUAL_BTN = document.getElementById("equal_button");
const RESET_BUTTON = document.getElementById("reset_button");

RESET_BUTTON.addEventListener("click", reset);

function reset() {
  for (let value in VALUES) {
    VALUES[value] = 0;
  }
  result = 0;
  op = "";
  updateFirst = true;
  updateDisplay("");
}

function getValue() {
  NUM_BTNS.forEach((btn) => {
    btn.addEventListener("click", () => {
      let currentOperand = updateFirst ? FIRST_OPERAND : SECOND_OPERAND;
      VALUES[currentOperand] = updateValue(VALUES[currentOperand], btn);
      updateDisplay(VALUES[currentOperand]);
    });
  });
}

function updateValue(value, element) {
  value += element.textContent;
  value = +value;
  return value;
}

function updateDisplay(value) {
  DISPLAY.textContent = value;
}

function getOperator() {
  OP_BTNS.forEach((btn) => {
    btn.addEventListener("click", () => {
      op = btn.textContent;
      updateDisplay(op);
      updateFirst = false;
    });
  });
}

function makeOperation() {
  EQUAL_BTN.addEventListener("click", () => {
    let a = VALUES[FIRST_OPERAND];
    let b = VALUES[SECOND_OPERAND];
    result = OPERATIONS[op](a, b);
    updateDisplay(result);
  });
}

getValue();
getOperator();
makeOperation();

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
