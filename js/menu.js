function cargar() {
  oculta('Fomulario');
  oculta('Quienes-Somos');
  oculta('PQA');
  oculta('Calculadoraa');
  oculta('Contact');
}


function muestra_oculta(id) {

  if (document.getElementById) { //se obtiene el id
    var el = document.getElementById(id); //se define la variable "el" igual a nuestro div
    el.style.display = (el.style.display == 'none') ? 'block' : 'none'; //damos un atributo display:none que oculta el div
  }
  /*
   * Cierrar el conetido al cambiar de submenu
   */
  if (id == "Fomulario") {
    oculta('Quienes-Somos');
    oculta('PQA');
    oculta('Contact');
    oculta('Calculadoraa');
  }
  if (id == "Quienes-Somos") {
    oculta('Fomulario');
    oculta('PQA');
    oculta('Contact');
    oculta('Calculadoraa');
  }
  if (id == "PQA") {
    oculta('Fomulario');
    oculta('Quienes-Somos');
    oculta('Contact');
    oculta('Calculadoraa');
  }
  if (id == "Contact") {
    oculta('Fomulario');
    oculta('Quienes-Somos');
    oculta('PQA');
    oculta('Calculadoraa');
  }
  if (id == "Calculadoraa") {
    oculta('Fomulario');
    oculta('Quienes-Somos');
    oculta('PQA');
    oculta('Contact');
  }
}

//--- Funcion mejorada de mostar y ocultar ---//
function muestra(id) { //Si le da al radio que si muestra
  if (document.getElementById) { //se obtiene el id
    var el = document.getElementById(id); //se define la variable "el" igual a nuestro div
    el.style.display = (el.style.display == 'block') ? 'block' : 'block'; //damos un atributo display:none que oculta el div
  }
}


function oculta(id) { //Si le da al radio que no oculta
  if (document.getElementById) { //se obtiene el id
    var el = document.getElementById(id); //se define la variable "el" igual a nuestro div
    el.style.display = (el.style.display == 'none') ? 'none' : 'none'; //damos un atributo display:none que oculta el div
  }
}


/*  Script que permite deplegar el menu */
/*  Si se activa uno los otros se cierran*/

$(document).ready(function() {
  $("#accordian a").click(function() {

    var link = $(this);
    var closest_ul = link.closest("ul");
    var parallel_active_links = closest_ul.find(".active");
    var closest_li = link.closest("li");
    var link_status = closest_li.hasClass("active");
    var count = 0;
    closest_ul.find("ul").slideUp(function() {
      if (++count === closest_ul.find("ul").length)
        parallel_active_links.removeClass("active");
      //Preguntas para el submenu estudiante
      //Cierrar el contenido mostrado al cambiar de menu
      if ($('#contenido').is(':visible'))
        oculta("contenido");
      if ($('#tablaestudiantes').is(':visible'))
        oculta("tablaestudiantes");
      if ($('#Acudiente').is(':visible'))
        oculta("Acudiente");
      //Preguntas para el submenu deportes
      if ($('#Deportes-insertar').is(':visible'))
        oculta("Deportes-insertar");
      if ($('#tabladeportes').is(':visible'))
        oculta("tabladeportes");
      if ($('#asignar-hora').is(':visible'))
        oculta("asignar-hora");
      if ($('#profesor_deporte-contend').is(':visible'))
        oculta("profesor_deporte-contend");
      if ($('#Ver_Docente').is(':visible'))
        oculta("Ver_Docente");
      if ($('#Insertardocente').is(':visible'))
        oculta("Insertardocente");
    });
    if (!link_status) {
      closest_li.children("ul").slideDown();
      closest_li.addClass("active");
    }
  });
});
/*
 Funcion para que solo acepte numeros
 Se
 usa esta funcion porque el de pordefecto de html5 al principio acepta todo y luego valida que solo sean numeros %
 este es en tiepo real
 */
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
