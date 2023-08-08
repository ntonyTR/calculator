// TODO: Al ingresar un '0' despues del '.', el 0 se borra, corregir esto para poder ingresar numeros como '12.020'
const OPERATIONS = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  "x": (a, b) => a * b,
  "/": (a, b) => a / b,
};

const VALUES = {
  a: "",
  b: "",
};

const FIRST_OPERAND = "a";
const SECOND_OPERAND = "b";

let op = undefined;
let result = 0;
let updateFirst = true;
let decimalAdded = false;

const NUM_BTNS = document.querySelectorAll(".numeric_buttons");
const OP_BTNS = document.querySelectorAll(".operator_buttons");
const DISPLAY_PREV = document.getElementById("display_previous");
const DISPLAY_CURR = document.getElementById("display_current")
const EQUAL_BTN = document.getElementById("equal_button");
const RESET_BTN = document.getElementById("reset_button");
const DELETE_BTN = document.getElementById("delete_button");
const DECIMAL_BTN = document.getElementById("decimal_button");
const NEGATIVE_BTN = document.getElementById("negative_button");

RESET_BTN.addEventListener("click", reset);
DELETE_BTN.addEventListener("click", deleteDigit);
DECIMAL_BTN.addEventListener("click", addDecimal);
EQUAL_BTN.addEventListener("click", compute);
NEGATIVE_BTN.addEventListener("click", makeNegative);

NUM_BTNS.forEach((btn) => {
  btn.addEventListener("click", () => {
    let current = getCurrentOperand();
    getValue(btn, current);
    updateDisplay(DISPLAY_CURR, VALUES[current]);
  })
})

OP_BTNS.forEach((btn) => {
  btn.addEventListener("click", () => {
    if(!updateFirst){
      compute();
    }

      getOperator(btn);
      let operationStr = `${VALUES[FIRST_OPERAND]} ${op}`;
      updateDisplay(DISPLAY_PREV, operationStr);
      updateDisplay(DISPLAY_CURR, 0)
      firstOperation = false;
  })
})

updateDisplay(DISPLAY_CURR, 0);

function updateDisplay(element, value) {
  element.textContent = value;
}

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

function makeNegative(){
  let current = getCurrentOperand();
  VALUES[current] *= -1;
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
  updateDisplay(DISPLAY_CURR, result);
  updateDisplay(DISPLAY_PREV, "")
}

function getValue(ele, value){
  VALUES[value] += ele.textContent;
  VALUES[value] = parseFloat(VALUES[value]);
}

function getOperator(ele) {
  op = ele.textContent;
  updateFirst = false;
  decimalAdded = false;
}

function compute() {
  if(op){
    let a = VALUES[FIRST_OPERAND];
    let b = VALUES[SECOND_OPERAND];
    result = OPERATIONS[op](a, b);
    result = parseFloat(result.toFixed(5))

    let completeStr = `${a} ${op} ${b}`
    let resultStr = `= ${result}`
    updateDisplay(DISPLAY_PREV, completeStr);
    updateDisplay(DISPLAY_CURR, resultStr)

    continueCalc();
    firstOperation = true;
  }
}

function continueCalc() {
  VALUES[FIRST_OPERAND] = result;
  VALUES[SECOND_OPERAND] = 0;
  result = 0;
  updateFirst = true;
  decimalAdded = false;
}