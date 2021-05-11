const {
  crearTablaMultiplicacion,
} = require("./app-tabla/helpers/multiplicarPromesa");
const { yargs } = require("./yargs/config.yargs");

const { b, l, h } = yargs;
crearTablaMultiplicacion(b, l, h)
  .then((res) => {
    console.log(res);
  })
  .catch((e) => console.log(e));
