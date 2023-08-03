//TODO: despues de introducir el primer operador, los demas tambien mostraran el resultado de la operacion
//TODO: actualizar display al introducir operador, mostrar "2 +" en lugar de solo "+", al clickear "=", mostrar la operacion completa -> "2 + 2 = 4"
//TODO: aceptar un numero negativo como primer valor (empezar con '-')
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
let decimalAdded = false;



const DISPLAY_PREV = document.getElementById("display_previous");
const DISPLAY_CURR = document.getElementById("display_current")

function updateDisplay(element, value) {
  element.textContent = value;
}

const NUM_BTNS = document.querySelectorAll(".numeric_buttons");
const OP_BTNS = document.querySelectorAll(".operator_buttons");
const EQUAL_BTN = document.getElementById("equal_button");
const RESET_BTN = document.getElementById("reset_button");
const DELETE_BTN = document.getElementById("delete_button");
const DECIMAL_BTN = document.getElementById("decimal_button");

RESET_BTN.addEventListener("click", reset);
DELETE_BTN.addEventListener("click", deleteDigit);
DECIMAL_BTN.addEventListener("click", addDecimal);

getValue();
getOperator();
makeOperation();
updateDisplay(DISPLAY_CURR, VALUES[FIRST_OPERAND]);

function getCurrentOperand() {
  return updateFirst ? FIRST_OPERAND : SECOND_OPERAND;
}

function addDecimal() {
  let current = getCurrentOperand();
  if (!decimalAdded) {
    VALUES[current] += ".";
    decimalAdded = true;
  }
  updateDisplay(DISPLAY_CURR, VALUES[current]);
}

function deleteDigit() {
  let current = getCurrentOperand();
  VALUES[current] = +VALUES[current].toString().slice(0, -1);
  updateDisplay(DISPLAY_CURR, VALUES[current]);
}

function reset() {
  for (let value in VALUES) {
    VALUES[value] = 0;
  }
  result = 0;
  op = "";
  updateFirst = true;
  decimalAdded = false;
  updateDisplay(DISPLAY_CURR, "");
}

function getValue() {
  NUM_BTNS.forEach((btn) => {
    btn.addEventListener("click", () => {
      let current = getCurrentOperand();

      VALUES[current] += btn.textContent;
      VALUES[current] = +VALUES[current];

      updateDisplay(DISPLAY_CURR, VALUES[current]);
    });
  });
}

function getOperator() {
  OP_BTNS.forEach((btn) => {
    btn.addEventListener("click", () => {
      op = btn.textContent;
      let str = `${VALUES[FIRST_OPERAND]} ${op}`
      updateDisplay(DISPLAY_PREV, str);
      updateDisplay(DISPLAY_CURR, "")
      updateFirst = false;
      decimalAdded = false;
    });
  });
}

function makeOperation() {
  EQUAL_BTN.addEventListener("click", () => {
    let a = VALUES[FIRST_OPERAND];
    let b = VALUES[SECOND_OPERAND];
    result = OPERATIONS[op](a, b);
    let str = `${VALUES[FIRST_OPERAND]} ${op} ${VALUES[SECOND_OPERAND]}`
    let str2 = `= ${result}`
    updateDisplay(DISPLAY_PREV, str);
    updateDisplay(DISPLAY_CURR, str2)
    continueCalc();
  });
}

function continueCalc() {
  VALUES[FIRST_OPERAND] = result;
  VALUES[SECOND_OPERAND] = 0;
  result = 0;
  updateFirst = true;
  decimalAdded = false;
}
