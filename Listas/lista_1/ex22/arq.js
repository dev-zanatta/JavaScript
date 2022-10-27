/*Faça um algoritmo que calcule e mostre a tabuada de um número digitado pelo usuário. */

let num = Number(prompt("Insira o numero"))
let tabuada = 0
for(let i=1;i<=10;i++)
{
    tabuada = tabuada + "\n" + i*num
}

alert(tabuada)