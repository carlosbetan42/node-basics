function otraFuncion() {
  serompe();
}

function serompe() {
  return 3 + z;
}

function seRompeAsincrona(cb) {
  setTimeout(function () {
    try {
      return 3 + z;
    } catch (err) {
      console.error('Error en mi función asíncrona');
      cb(err);
    }
  });
}

try {
  // serompe();
  // otraFuncion();
  seRompeAsincrona(function (err) {
    console.log(err);
  });
} catch (err) {
  console.log('Error');
  console.log(err);
  console.log('error manejado');
}

console.log('Esto de aqui está al final');