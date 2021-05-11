const fs = require("fs");

const crearTablaMultiplicacion = (base) => {
  return new Promise((resolve, reject) => {
    let salidaParaGuardar = `=============================\n       Tabla del ${base}\n=============================`;
    for (let i = 1; i <= 10; i++) {
      salidaParaGuardar += `\n${i} x ${base} = ${i * base}`;
    }
    let nombreArchivo = `tabla_${base}.txt`;
    fs.writeFile(nombreArchivo, salidaParaGuardar, (err) => {
      if (err) reject(err);
      resolve(nombreArchivo);
    });
  });
};

module.exports = { crearTablaMultiplicacion };
