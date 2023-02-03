//Calculadora de promedios.

alert("Bienvenido a la calculadora de promedios.");

const usuarioAutorizado = "francisco";
const contraseniaAutorizada = 1234;

let usuario = prompt("Ingrese su nombre de usuario: ");
let contrasenia = parseInt(prompt("Ingrese su contraseña: "));

if (usuarioAutorizado === usuario && contraseniaAutorizada === contrasenia) {
  alert("Los datos son correctos, bienvenido " + usuario);

  let cantidadAlumnos = parseInt(
    prompt("Ingrese la cantidad de alumnos que evaluará: ")
  );

  for (let i = 0; i < cantidadAlumnos; i++) {
    let nombreAlumno = prompt("Ingrese el nombre del alumno a evaluar: ");
    let notaUno = parseInt(
      prompt("Ingrese la primer nota del alumno " + nombreAlumno + ": ")
    );
    let notaDos = parseInt(
      prompt(
        "Ingrese el valor de la segunda nota del alumno " + nombreAlumno + ": "
      )
    );
    let notaTres = parseInt(
      prompt(
        "Ingrese el valor de la tercer nota del alumno " + nombreAlumno + ": "
      )
    );

    let notaCuatro = parseInt(
      prompt("Ingresar la última nota del alumno " + nombreAlumno + ": ")
    );

    let promedio = calcularPromedio(notaUno, notaDos, notaTres, notaCuatro);
    alert("El promedio del alumno " + nombreAlumno + " es: " + promedio);

    let aprueba = apruebaAnio(promedio);

    if (aprueba) {
      alert("El alumno " + nombreAlumno + " aprobó el año.");
    } else {
      alert("El alumno " + nombreAlumno + " desaprobó el año.");
    }
  }
} else {
  alert(
    "Hubo un error, asegúrese de que los datos introducidos sean los correctos."
  );
}

function calcularPromedio(notaUno, notaDos, notaTres, notaCuatro) {
  let promedio = (notaUno + notaDos + notaTres) / 3;
  return promedio;
}

function apruebaAnio(promedio) {
  if (promedio >= 7) {
    return true;
  } else {
    return false;
  }
}
