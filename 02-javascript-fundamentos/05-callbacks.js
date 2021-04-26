// Funcion para simular petición asíncrona con un callback que regresa error y usuario
const getUsuarioById = (id, callback) => {
  const usuario = {
    id,
    nombre: "Daniel Cu",
  };
  setTimeout(() => {
    //calback(error, usuario)
    callback(null, usuario);
  }, 1000);
};

// Solicitud de petitcion pasando el callback
// getUsuarioById(10, (error, usuario) => {
//   console.log(error);
//   console.log(usuario);
// });

// Solicitud de petitcion pasando el callback a ejecutar con desestructuración
getUsuarioById(10, (error, usuario) => {
  const { id, nombre } = usuario;
  console.log(error);
  console.log(nombre.toUpperCase());
  console.log(id);
  console.log(usuario);
});
