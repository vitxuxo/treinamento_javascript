import {
  idade1,
  idade2,
  idade3,
  idade4,
  idade5,
  idade6,
  idade7,
  idade8,
} from "../tela.mjs";

export function menorIdade() {
  if (
    idade1 < idade2 &&
    idade1 < idade3 &&
    idade1 < idade4 &&
    idade1 < idade5 &&
    idade1 < idade6 &&
    idade1 < idade7 &&
    idade1 < idade8
  ) {
    console.log("menor de idade" + " " + idade1);
  } else if (
    idade2 < idade1 &&
    idade2 < idade3 &&
    idade2 < idade4 &&
    idade2 < idade5 &&
    idade2 < idade6 &&
    idade2 < idade7 &&
    idade2 < idade8
  ) {
    console.log("menor de idade" + " " + idade2);
  } else if (
    idade3 < idade1 &&
    idade3 < idade2 &&
    idade3 < idade4 &&
    idade3 < idade5 &&
    idade3 < idade6 &&
    idade3 < idade7 &&
    idade3 < idade8
  ) {
    console.log("menor de idade" + " " + idade3);
  } else if (
    idade4 < idade1 &&
    idade4 < idade3 &&
    idade4 < idade2 &&
    idade4 < idade5 &&
    idade4 < idade6 &&
    idade4 < idade7 &&
    idade4 < idade8
  ) {
    console.log("menor de idade" + " " + idade4);
  } else if (
    idade5 < idade1 &&
    idade5 < idade3 &&
    idade5 < idade4 &&
    idade5 < idade2 &&
    idade5 < idade6 &&
    idade5 < idade7 &&
    idade5 < idade8
  ) {
    console.log("menor de idade" + " " + idade5);
  } else if (
    idade6 < idade1 &&
    idade6 < idade3 &&
    idade6 < idade4 &&
    idade6 < idade5 &&
    idade6 < idade2 &&
    idade6 < idade7 &&
    idade6 < idade8
  ) {
    console.log("menor de idade" + " " + idade6);
  } else if (
    idade7 < idade1 &&
    idade7 < idade3 &&
    idade7 < idade4 &&
    idade7 < idade5 &&
    idade7 < idade6 &&
    idade7 < idade2 &&
    idade7 < idade8
  ) {
    console.log("menor de idade" + " " + idade7);
  } else if (
    idade8 < idade1 &&
    idade8 < idade3 &&
    idade8 < idade4 &&
    idade8 < idade5 &&
    idade8 < idade6 &&
    idade8 < idade7 &&
    idade8 < idade2
  ) {
    console.log("menor de idade" + " " + idade8);
  }
}
