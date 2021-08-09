import {
  notaEscola1,
  notaEscola2,
  notaEscola3,
  notaEscola4,
  notaEscola5,
  notaEscola6,
} from "../tela.mjs";

let mediaEscolaTotal;

export function mediaEscolar() {
  console.log(
    (mediaEscolaTotal =
      (notaEscola1 +
        notaEscola2 +
        notaEscola3 +
        notaEscola4 +
        notaEscola5 +
        notaEscola6) /
      6)
  );
  if (mediaEscolaTotal >= 6) {
    console.log("Está Aprovado");
  } else if (mediaEscolaTotal < 5.9 && mediaEscolaTotal >= 4) {
    console.log("Está de recuperaçao");
  } else {
    console.log("Está reprovado.");
  }
}
