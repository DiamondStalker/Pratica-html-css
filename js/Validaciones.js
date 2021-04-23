function SoloN(e) {
  tecla = (document.all) ? e.keyCode : e.which;
  //Tecla de retroceso para borrar, siempre la permite
  if (tecla == 8) {
    return true;
  }
  // Patron de entrada, en este caso solo acepta numeros
  patron = /[0-9]/;
  tecla_final = String.fromCharCode(tecla);
  return patron.test(tecla_final);
}

function SoloL(e) {
  tecla = (document.all) ? e.keyCode : e.which;
  //Tecla de retroceso para borrar, siempre la permite
  if (tecla == 8) {
    return true;
  }
  //Tecla de Espacio, siempre la permite
  if (tecla == 32) {
    return true;
  }
  // Patron de entrada, en este caso solo acepta letras
  patron = /^[A-Za-z]+$/;
  tecla_final = String.fromCharCode(tecla);
  return patron.test(tecla_final);
}

function Telefono(e) {
  tecla = (document.all) ? e.keyCode : e.which;
  //Tecla de retroceso para borrar, siempre la permite
  if (tecla == 8) {
    return true;
  }
  if (tecla == 32) {
    return true;
  }
  if (tecla == 45) {
    return true;
  }
  // Patron de entrada, en este caso solo acepta numeros
  patron = /[0-9]/;
  tecla_final = String.fromCharCode(tecla);
  return patron.test(tecla_final);
}

function validarEmail() {
  Correo = document.getElementById("email").value;
  console.log("El correo que esta leyendo es :" + Correo);
  expr = /^\w+([\.-]?\w+)*@(?:|hotmail|outlook|yahoo|live|gmail)\.(?:|com|es)+$/;
  if (!expr.test(Correo))
    alert("Error: La dirección de correo " + Correo + " es incorrecta.");
}

function Hora(e) {
  tecla = (document.all) ? e.keyCode : e.which;
  //Tecla de retroceso para borrar, siempre la permite
  if (tecla == 8) {
    return true;
  }
  //Codigo de : valido
  if (tecla == 58) {
    return true;
  }
  // Patron de entrada, en este caso solo acepta numeros
  patron = /[0-9]/;
  tecla_final = String.fromCharCode(tecla);
  return patron.test(tecla_final);
}

function Validar_Hora() {
  Hora = document.getElementById("Hora_contacto").value;
  console.log("La hora leida es :" + Hora);
  expr = /^[0-9]{2}[:][0-9]{2}/;

  Horario = Hora.split(':');

  if (expr.test(Hora)) { //Si tiene el formato deseado
    if (Horario[0] != 06 && Horario[0] != 16) { // Preguntamos si el horario el 06 o 16, En caso contrario preguntaremos por el minutero
      if (Horario[0] < 06 | Horario[0] > 16) { // Preguntamos Si la hora es menor de las 06 y menor que las 16 Horas; En caso de ser cierto mostramos una alerta
        alert("La hora ingresada no es valida \n Hora de atencion: \n 06:00 \n 16:40");
      }
      if (Horario[1] < 00 && Horario[1] > 60) { // Preguntamos si los minutos estan Fuetra del rango 00 - 40 minutos para mostrar una alrta
        alert("La hora ingresada no es valida \n Hora de atencion: \n 06:00 \n 16:40");
      }
    } else if (Horario[1] < 00 | Horario[1] > 40) { //Como ya sabemos que el horario es 06 o 16 preguntamos por el munutero
      alert("La hora ingresada no es valida \n Hora de atencion: \n 06:00 \n 16:40");
    }
  }
}
