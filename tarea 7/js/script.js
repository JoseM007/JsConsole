

let num1 = prompt("Ingrese el primer número para restar");
let num2 = prompt("Ingrese el segundo número para restar");

let resta = num1 - num2;

alert(`La resta de ${num1} y ${num2} es ${resta}`);
//



function calcularCuadrado(lado) {
  let perimetro = lado * 4;
  let superficie = lado * lado;

  console.log(`El perímetro del cuadrado es: ${perimetro}`);
  console.log(`La superficie del cuadrado es: ${superficie}`);
}

// Ejemplo de uso de la función:
calcularCuadrado(5);

//

function fahrenheitToCelsius(fahrenheit) {
  let celsius = (fahrenheit - 32) * 5 / 9;
  return celsius;
}
// Ejemplo de uso de la función:
let temperaturaF = prompt("Ingrese la temperatura en grados Fahrenheit");
let temperaturaC = fahrenheitToCelsius(temperaturaF);
alert(`La temperatura en grados Celsius es: ${temperaturaC}`);

//
let numero = prompt("Ingrese un número par o impar");

if (numero % 2 === 0) {
  alert("El número es par");
} else {
  alert("El número es impar");
}

//

let cadena = prompt("Ingrese una cadena de caracteres en texto");

let enMayusculas = cadena.toUpperCase();
let enMinusculas = cadena.toLowerCase();

alert(`En mayúsculas: ${enMayusculas}`);
alert(`En minúsculas: ${enMinusculas}`);


//.6
let nota = prompt("Ingrese la nota del alumno");

if (nota >= 0 && nota <= 3) {
  alert("Muy deficiente");
} else if (nota > 3 && nota <= 5) {
  alert("Insuficiente");
} else if (nota > 5 && nota <= 6) {
  alert("Suficiente");
} else if (nota > 6 && nota <= 7) {
  alert("Bien");
} else if (nota > 7 && nota <= 9) {
  alert("Notable");
} else if (nota > 9 && nota <= 10) {
  alert("Sobresaliente");
} else {
  alert('error nadie saca esa nota')
}