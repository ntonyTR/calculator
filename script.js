//TODO: funcion para limpiar el display, reiniciar los valores y calcular de nuevo
//TODO: hacer que se pueda seguir calculando con el resultado de la operacion, tomar este resultado como firstValue y obtener un nuevo secondValue
//TODO: funcion para borrar un numero sin tener que reiniciar todo
//TODO: funcion para sacar porcentaje
//TODO: funcion para escribir punto decimal y alterar el valor como float

const OPERATIONS = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  "x": (a, b) => a * b,
  "/": (a, b) => a / b,
};

const VALUES = {
  firstValue: 0,
  secondValue: 0,
}

let op = "";
let result = 0;
let updateFirst = true;

const NUM_BTNS = document.querySelectorAll(".numeric_buttons");
const DISPLAY = document.getElementById("calculator_display");
const OP_BTNS = document.querySelectorAll(".operator_buttons");
const EQUAL_BTN = document.getElementById("equal_button");


function getValue(valueKey) {
  NUM_BTNS.forEach((btn) => {
    btn.addEventListener('click', () => {
      if(updateFirst){
        VALUES[valueKey] = updateValue(VALUES[valueKey], btn);
        updateDisplay(VALUES[valueKey]);
      } else {
        VALUES['secondValue'] = updateValue(VALUES['secondValue'], btn)
        updateDisplay(VALUES['secondValue'])
      }
    })
  })
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
    result = OPERATIONS[op](VALUES['firstValue'], VALUES['secondValue']);
    updateDisplay(result);
  });
}


getValue('firstValue')
getOperator();
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

