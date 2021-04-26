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
const getAlumno = (id, callback) => {
  const alumno = alumnos.find((alumno) => alumno.id === id);
  return alumno ? callback(null, alumno) : callback(`Id ${id} not exist`, null);
};
//Esta funcion recibe un alumno y retorna las calificaciones que busca sobre el arreglo de calificaciones
const getCalificacion = (alumno, callback) => {
  const calificacionesAlumno = calificaciones.find(
    (calificacion) => alumno.id === calificacion.id
  );
  return calificacionAlumno
    ? callback(null, calificacionesAlumno)
    : callback(`calificacion alumno con ${id} not exist`, null);
};
//Primera llamada a una funcion
getAlumno(1, (error, alumno) => {
  if (error) {
    console.log(error);
    return;
  }
  console.log(alumno);
  //Segunda llamada a una funcion
  getCalificacion(alumno, (error, { calificaciones }) => {
    if (error) {
      console.log(error);
      return;
    }
    console.log(calificaciones);
  });
});
