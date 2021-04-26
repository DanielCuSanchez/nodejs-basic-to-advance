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

const getAlumno = (id, callback) => {
  const alumno = alumnos.find((alumno) => alumno.id === id);
  return alumno ? callback(null, alumno) : callback(`Id ${id} not exist`, null);
};

const getCalificacion = (alumno, callback) => {
  const calificacionesAlumno = calificaciones.find(
    (calificacion) => alumno.id === calificacion.id
  );
  return calificacionAlumno
    ? callback(null, calificacionesAlumno)
    : callback(`calificacion alumno con ${id} not exist`, null);
};

getAlumno(1, (error, alumno) => {
  if (error) {
    console.log(error);
    return;
  }
  console.log(alumno);
  getCalificacion(alumno, (error, { calificaciones }) => {
    if (error) {
      console.log(error);
      return;
    }
    console.log(calificaciones);
  });
});
