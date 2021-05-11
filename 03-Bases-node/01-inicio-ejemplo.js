const fs = require("fs");
const base = 10;

const tablaMultiplicacion = (base) => {
  let salida = `=============================\n       Tabla del ${base}\n=============================`;
  for (let i = 1; i <= 10; i++) {
    salida += `\n${i} x ${base} = ${i * base}`;
  }
  console.log(salida);
  fs.writeFileSync(`tabla_${base}.txt`, salida, (err) => {
    if (!err) return;
    console.log(err);
  });
};

tablaMultiplicacion(base);
