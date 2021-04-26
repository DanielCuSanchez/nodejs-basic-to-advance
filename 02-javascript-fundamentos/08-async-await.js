//Arreglo alumnos
const alumnos = [
  {
    id: 1,
    nombre: "Daniel Cu",
  },
  {
    id: 2,
    nombre: "Rodrigo Herrera",
  },
  {
    id: 3,
    nombre: "Andres Elias Ayub",
  },
];
//Areglo calificaciones
const calificaciones = [
  {
    id: 1,
    calificaciones: [
      Math.floor(Math.random() * 100),
      Math.floor(Math.random() * 100),
    ],
  },
  {
    id: 2,
    calificaciones: [
      Math.floor(Math.random() * 100),
      Math.floor(Math.random() * 100),
    ],
  },
  {
    id: 3,
    calificaciones: [
      Math.floor(Math.random() * 100),
      Math.floor(Math.random() * 100),
    ],
  },
];

//Esta funcion recibe un ID de alumno y busca en el arreglo de alumnos
const getAlumno = (id) => {
  return new Promise((resolve, reject) => {
    const alumno = alumnos.find((alumno) => alumno.id === id);
    alumno ? resolve(alumno) : reject(`Id ${id} not exist`);
  });
};

//Esta funcion recibe un alumno y retorna las calificaciones que busca sobre el arreglo de calificaciones
const getCalificacion = (id) => {
  return new Promise((resolve, reject) => {
    const calificacionesAlumno = calificaciones.find(
      (calificacion) => id === calificacion.id
    );

    calificacionesAlumno
      ? resolve(calificacionesAlumno)
      : reject(`calificacion alumno con ${id} not exist`);
  });
};
//Uso de las promesas en cadena

const getInfoAlumno = async (id) => {
  try {
    const alumno = await getAlumno(id);
    const calificaciones = await getCalificacion(id);

    return alumno + calificaciones;
  } catch (error) {
    throw error;
  }
};

const id = 2;

getInfoAlumno(id)
  .then((infoAlumno) => console.log(infoAlumno))
  .catch((e) => console.log(e));
