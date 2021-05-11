const { options } = require("yargs");
const {
  crearTablaMultiplicacion,
} = require("./app-tabla/helpers/multiplicarAsync");
const yargs = require("yargs")
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
  })
  .check((arv, options) => {
    if (isNaN(arv.b)) {
      throw "La base tiene que ser un número";
    }
  }).argv;

console.log(yargs);

// crearTablaMultiplicacion(yargs.b)
//   .then((tabla) => console.log(tabla))
//   .catch((e) => console.log(e));
