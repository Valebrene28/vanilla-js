// Inserte el código aquí
function MostrarHora(){
    var elementoHora= document.getElementById("hora");
    var fecha = new Date();
    var hora1 = fecha.getHours()
    var hora2 = fecha.getMinutes()
    var hora3 = fecha.getSeconds()

    elementoHora.innerHTML= hora1+ ":"+hora2+ ":"+hora3
    console.log(hora1, hora2, hora3);
}
MostrarHora()

setInterval(MostrarHora, 1000)