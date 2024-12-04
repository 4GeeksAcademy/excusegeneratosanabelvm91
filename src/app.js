window.onload = function() {
  // arrays con las palabras
  let first = "Un/a ";
  let adj = [
    "dos cabezas ",
    "nuclear ",
    "enojado/a ",
    "solitario/a ",
    "loco/a ",
    "brillante ",
    "maloliente ",
    "lento/a ",
    "viejo/a "
  ];
  let noun = [
    "corredor/a ",
    "mapache ",
    "perro ",
    "mercader/a ",
    "conductor/a ",
    "comediante ",
    "piña ",
    "pirata "
  ];
  let action = [
    "tomó mi ",
    "tiró mi ",
    "gritó a mi ",
    "pateó mi ",
    "robó mi ",
    "quemó mi ",
    "mordió mi ",
    "golpeó mi "
  ];
  let possetion = [
    "dedo del pie ",
    "coche ",
    "reloj ",
    "zapato ",
    "billetera ",
    "camisa ",
    "llaves ",
    "computadora ",
    "teléfono ",
    "sándwich "
  ];
  let where = [
    "en la calle",
    "en mi casa",
    "en mi entrada",
    "frente a la oficina",
    "cerca del centro comercial",
    "cerca del baño",
    "en la estación de autobuses"
  ];

  // variables aleatorias
  let rdm1 = Math.floor(Math.random() * adj.length);
  let rdm2 = Math.floor(Math.random() * noun.length);
  let rdm3 = Math.floor(Math.random() * action.length);
  let rdm4 = Math.floor(Math.random() * possetion.length);
  let rdm5 = Math.floor(Math.random() * where.length);

  // creando una excusa (la oración)
  document.querySelector("#excuse").innerHTML =
    first +
    adj[rdm1] +
    noun[rdm2] +
    action[rdm3] +
    possetion[rdm4] +
    where[rdm5];
};
