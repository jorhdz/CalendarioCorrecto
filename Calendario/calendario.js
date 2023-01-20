
function averigualo() {
    let dia = document.getElementById("dia").value;
    let mes = document.getElementById("mes").value;
    let anio = document.getElementById("anio").value;
    let extraerFecha= new Date(anio, mes, dia).getDay();
    console.log(extraerFecha);
    switch (extraerFecha) {
     case 0:
         return document.getElementById("resultado").innerHTML=//"El día seleccionado es domingo, día inhabil.";//
         `<span style="color: red;">El día seleccionado es domingo, día inhabil.</span>`;
     case 1:
         return document.getElementById("resultado").innerHTML=//"El día seleccionado es lunes, día habil.";//
         `<span style="color: green;">El día seleccionado es lunes, día habil.</span>`;
     case 2:
         return document.getElementById("resultado").innerHTML=//"El día seleccionado es martes, día habil.";//
         `<span style="color: green;">El día seleccionado es martes, día habil.</span>`;
     case 3:
         return document.getElementById("resultado").innerHTML=//"El día seleccionado es miércoles, día habil";//
         `<span style="color: green;">El día seleccionado es miércoles, día habil.</span>`;
     case 4:
         return document.getElementById("resultado").innerHTML=//"El día seleccionado es jueves, día habil.";//
         `<span style="color: green;">El día seleccionado es jueves, día habil.</span>`;
     case 5:
         return document.getElementById("resultado").innerHTML=//"El día seleccionado es viernes, día habil.";//
         `<span style="color: green;">El día seleccionado es viernes, día habil.</span>`;
     case 6:
         return document.getElementById("resultado").innerHTML=//"El día seleccionado es sábado, día inhabil.";//
         `<span style="color: red;">El día seleccionado es sábado, día inhabil.</span>`;
     default:
         return document.getElementById("resultado").innerHTML="Aquí te falta algo.";//¿Qué es esto?//
        
    }

    /*function validarNumero(dia) {
        if (dia >= 31 || -=0) {
          var element = document.getElementById("result");
          element.innerHTML = "El número es inválido";
        }*/

        
 }