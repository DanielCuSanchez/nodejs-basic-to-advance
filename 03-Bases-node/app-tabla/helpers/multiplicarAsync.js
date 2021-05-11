const fs = require("fs");

const crearTablaMultiplicacion = async (base) => {
  let salidaParaGuardar = `=============================\n       Tabla del ${base}\n=============================`;
  for (let i = 1; i <= 10; i++) {
    salidaParaGuardar += `\n${i} x ${base} = ${i * base}`;
  }
  let nombreArchivo = `tabla_${base}.txt`;
  const err = await fs.writeFileSync(nombreArchivo, salidaParaGuardar);
  if (err) return err;
  else return nombreArchivo;
};

module.exports = { crearTablaMultiplicacion };
