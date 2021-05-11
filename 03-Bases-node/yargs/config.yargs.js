const yargs = require("yargs")
  .options({
    b: {
      alias: "base",
      type: "number",
      demandOption: true,
      describe: "Párametro base de tabla de multiplicar",
    },
    l: {
      alias: "lista",
      type: "boolean",
      demandOption: false,
      describe: "Lista tabla de multiplicar",
    },
    h: {
      alias: "hasta",
      type: "number",
      demandOption: true,
      default: "10",
      describe: "Limite de tabla de multiplicar",
    },
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw "La base tiene que ser un número";
    }
    return true;
  }).argv;

module.exports = { yargs };
