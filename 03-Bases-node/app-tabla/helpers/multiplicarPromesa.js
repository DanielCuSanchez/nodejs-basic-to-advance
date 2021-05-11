const fs = require("fs");
const colors = require("colors");
const crearTablaMultiplicacion = (base, listar, hasta) => {
  return new Promise((resolve, reject) => {
    let salidaParaGuardar,
      consola = `=============================\n       Tabla del ${base}\n=============================`;
    for (let i = 1; i <= hasta; i++) {
      salidaParaGuardar += `\n${i} x ${base} = ${i * base}`;
      consola += `\n${i} x ${base} = ${i * base}`;
    }
    let nombreArchivo = `tabla_${base}.txt`;

    if (listar) {
      console.log(consola.rainbow);
      console.log(nombreArchivo.blue);
    }

    fs.writeFile(`tablasTXT/${nombreArchivo}`, salidaParaGuardar, (err) => {
      if (err) reject(err);
      resolve("Yes");
    });
  });
};

module.exports = { crearTablaMultiplicacion };
