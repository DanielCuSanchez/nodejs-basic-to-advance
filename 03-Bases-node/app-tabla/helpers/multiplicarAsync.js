const fs = require("fs");
const colors = require("colors");

const crearTablaMultiplicacion = async (base, listar, hasta) => {
  let salidaParaGuardar = `=============================\n       Tabla del ${base}\n=============================`;
  for (let i = 1; i <= hasta; i++) {
    salidaParaGuardar += `\n${i} x ${base} = ${i * base}`;
  }
  let nombreArchivo = `tabla_${base}.txt`;

  const err = await fs.writeFileSync(nombreArchivo, salidaParaGuardar);
  if (err) {
    return err;
  } else {
    if (listar) {
      console.log(salidaParaGuardar.rainbow);
      console.log(nombreArchivo.blue);
    }
    return "Yes";
  }
};

module.exports = { crearTablaMultiplicacion };
