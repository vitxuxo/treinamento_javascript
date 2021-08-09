let data = new Date("08/03/2020"); //getMonth precisa ter um +1 para
// que na lista entenda que é o mes seguinte, pois é 0 pra janeiro e 11 para dezembro

console.log(
  data.getDate() + " " + (data.getMonth() + 1) + " " + data.getFullYear()
);
