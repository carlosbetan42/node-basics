function hola(nombre) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("Hola, " + nombre);
      resolve(nombre);
    }, 1500);
  });
}

function hablar() {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log("Bla bla bla bla...");
      resolve();
    }, 1000);
  });
}

function adios(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log("Adios " + nombre);
      resolve();
    }, 1000);
  });
}

async function main() {
  let nombre = await hola("Carlos");
  await hablar();
  await hablar();
  await hablar();
  await adios(nombre);
  console.log("Termina el proceso");
}

console.log("Empezamos el proceso");
main();
console.log("Va ser la segunda instrucción");
