//const { crearTablaMultiplicacion } = require("./helpers/multiplicarPromesa");
const { crearTablaMultiplicacion } = require("./helpers/multiplicarAsync");

crearTablaMultiplicacion(2233)
  .then((tabla) => console.log(tabla))
  .catch((e) => console.log(e));
