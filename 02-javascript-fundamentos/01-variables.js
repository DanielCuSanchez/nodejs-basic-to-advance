// VAR

var personaje1 = "Global";

if (true) {
  var personaje1 = "Renombrado";
}
console.log(personaje1);

// LET
let personaje2 = "Scope";

if (true) {
  let personaje2 = "Renombrado";
}

console.log(personaje2);

// CONST

const personaje3 = "Scope";

if (true) {
  const personaje3 = "Renombrado";
}

console.log(personaje3);
