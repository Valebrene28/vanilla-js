// Inserte el código aquí
import { calculadora } from "./calculadora.js";
function calcular(operacion, numero1, numero2) {
  let resultado;
  if (operacion === "sumar") {
    resultado = calculadora.sumar(numero1, numero2);
  } else if (operacion === "restar") {
    resultado = calculadora.restar(numero1, numero2);
  } else if (operacion === "dividir") {
    resultado = calculadora.dividir(numero1, numero2);
  } else if (operacion === "multiplicar") {
    resultado = calculadora.multiplicar(numero1, numero2);
  }

  return resultado;
}

let resultadoSuma = calcular("sumar", 1, 2);
let resultadoResta = calcular("restar", 5, 2);
let resultadoMultiplicar = calcular("multiplicar", 3, 2);
let resultadoDividir = calcular("dividir", 50, 3);

console.log(resultadoMultiplicar);
