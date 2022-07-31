// for in e for of
//FOR IN - O for in percorre os índices de cada posição do array
//1-
// let cars = ['Saab', 'Volvo', 'BMW'];
// 
// for (let index in cars) {
//   console.log(cars[index]);
// }

//2- 
// let car = {
//   type: 'Fiat',
//   model: '500',
//   color: 'white',
// };
// 
// for (let index in car) {
//   console.log(index, car[index]);
// }


// FOR OF - O for of percorre os elementos dos objetos através de seus respectivos valores.
// let food = ['hamburguer', 'bife', 'acarajé'];
// for (let value of food) {
//   console.log(value);
// };
//resultado: hamburguer, bife, acarajé;

// Para fixar
// No exemplo acima, utilizamos o for/of para percorrer o nosso iterável e nos retornar o valor dos índices.
// Agora que você já sabe a diferença entre eles e como usá-los, vamos praticar?
// 1 - Usando o objeto abaixo, utilize for/in e imprima no console a mensagem 'Olá xxxxx' para cada nome, substituindo o xxxxx pelo nome em questão.

// let names = {
//   person1: 'João',
//   person2: 'Maria',
//   person3: 'Jorge',
// };
// 
// for (let index in names){
//   console.log("Olá " + names[index]);
// }

// 2 - Usando o objeto abaixo, utilize for/in e imprima um console.log com as chaves e valores desse objeto.

let carA = {
  model: 'A3 Sedan',
  manufacturer: 'Audi',
  year: 2020
};

for (let key in carA){
  console.log(key, carA[key]);
}

