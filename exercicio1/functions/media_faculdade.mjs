import { notaFaculdade1, notaFaculdade2 } from "../tela.mjs";

let mediaFaculdadeTotal;

export function mediaFaculdade() {
  console.log((mediaFaculdadeTotal = (notaFaculdade1 + notaFaculdade2) / 2));

  if (mediaFaculdadeTotal >= 6) {
    console.log("Está aprovado");
  } else if (mediaFaculdadeTotal <= 5.9 && mediaFaculdadeTotal >= 4) {
    console.log("Está de recuperaçao");
  } else {
    console.log("Está reprovado");
  }
}
