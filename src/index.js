// Inserte el código aquí
function MostrarHora() {
  var elementoHora = document.getElementById("hora");
  var fecha = new Date();
  var hora1 = fecha.getHours();
  var hora2 = fecha.getMinutes();
  var hora3 = fecha.getSeconds();

  elementoHora.innerHTML = hora1 + ":" + hora2 + ":" + hora3;
}
MostrarHora();

setInterval(MostrarHora, 1000);

let usuarios = [];
fetch("http://localhost:3000/user")
  .then((data) => data.json())
  .then((users) => {
    console.log(users);
  })

  .catch((error) => {
    console.log(error);
    alert("Error en las peticiones");
  });
