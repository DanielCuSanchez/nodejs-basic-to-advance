/**Desestructuración de objetos */
const alumnno = {
  nombre: "Daniel",
  apellido: "Cu Sánchez",
  edad: 23,

  getNombreCompleto() {
    return `${nombre} ${apellido}`;
  },
};

const { nombre, apellido, getNombreCompleto } = alumnno;

// console.log(nombre, apellido);
// console.log(getNombreCompleto());

/**Desestructuración de arreglos */

const alumnos = ["Daniel Cu", "Andres Elias", "Cesar Lozano"];

const [daniel, , cesar] = alumnos;

console.log(daniel);

console.log(cesar);
