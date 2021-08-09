import { numero1, numero2, numero3, numero4, numero5 } from "../tela.mjs";

export function maiorMenor() {
  console.log(numero1, numero2, numero3, numero4, numero5);
  if (
    numero1 > numero2 &&
    numero1 > numero3 &&
    numero1 > numero4 &&
    numero1 > numero5
  ) {
    console.log("Este é o maior" + " " + numero1);
  } else if (
    numero2 > numero1 &&
    numero2 > numero3 &&
    numero2 > numero4 &&
    numero2 > numero5
  ) {
    console.log("Este é o maior" + " " + numero2);
  } else if (
    numero3 > numero1 &&
    numero3 > numero2 &&
    numero3 > numero4 &&
    numero3 > numero5
  ) {
    console.log("Este é o maior" + " " + numero3);
  } else if (
    numero4 > numero1 &&
    numero4 > numero3 &&
    numero4 > numero2 &&
    numero4 > numero5
  ) {
    console.log("Este é o maior" + " " + numero4);
  } else if (
    numero5 > numero1 &&
    numero5 > numero3 &&
    numero5 > numero4 &&
    numero5 > numero2
  ) {
    console.log("Este é o maior" + " " + numero5);
  }
}
