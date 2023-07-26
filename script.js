//TODO: funcion para limpiar el display, reiniciar los valores y calcular de nuevo
//TODO: hacer que se pueda seguir calculando con el resultado de la operacion, tomar este resultado como firstValue y obtener un nuevo secondValue
//TODO: funcion para borrar un numero sin tener que reiniciar todo
//TODO: funcion para sacar porcentaje
//TODO: funcion para escribir punto decimal y alterar el valor como float

const operations = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  "x": (a, b) => a * b,
  "/": (a, b) => a / b,
};

const values = {
  firstValue: 0,
  secondValue: 0,
}

let op = "";
let result = 0;
let updateFirst = true;

const num_btns = document.querySelectorAll(".numeric_buttons");
const display = document.getElementById("calculator_display");
const op_btns = document.querySelectorAll(".operator_buttons");
const equal_btn = document.getElementById("equal_button");


function getValue(valueKey) {
  num_btns.forEach((btn) => {
    // btn.addEventListener('click', () => {
    //   values[valueKey] = updateValue(values[valueKey], btn);
    //   updateDisplay(values[valueKey]);
    //   console.log(values[valueKey]); // test
    // })
    btn.addEventListener('click', () => {
      if(updateFirst){
        values[valueKey] = updateValue(values[valueKey], btn);
        updateDisplay(values[valueKey]);
        console.log(values[valueKey]);
      } else {
        values['secondValue'] = updateValue(values['secondValue'], btn)
        updateDisplay(values['secondValue'])
        console.log(values['secondValue']);
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
  display.textContent = value;
}

function getOperator() {
  op_btns.forEach((btn) => {
    btn.addEventListener("click", () => {
      op = btn.textContent;
      console.log(op); // test
      updateDisplay(op);
      // getValue('secondValue')
      updateFirst = false;
    });
  });
}

function makeOperation() {
  equal_btn.addEventListener("click", () => {
    console.log(`operacion: ${values['firstValue']} ${op} ${values['secondValue']}`); // test
    console.log(`resultado: ${operations[op](values['firstValue'], values['secondValue'])}`); // test
    result = operations[op](values['firstValue'], values['secondValue']);
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