// Inserte el código aquí

///////////////1////////////
let emojis = ["🌸", "🌺", "🌷"]

let clonarArreglo = function (emojis) {
    nuevoArreglo = [...emojis]
    console.log("ajsdf")
    console.log(nuevoArreglo)
    return nuevoArreglo
}
clonarArreglo(emojis)
// NO MODIFICAR
//export { clonarArreglo, clonarObjeto, sumar, saludar };

// NO MODIFICAR
// export { clonarArreglo, clonarObjeto, sumar, saludar };

//////////////////////////////2/////////////////
let personas = {
    edward: 50,
    valery: 20,
    astrid: 29,
}

let cambio= function () {
    let personasClone = personas
    console.log(personasClone+(" años"))
    return personasClone
}
cambio()

////////////////////3/////////////////////





///////////////4////////////////////

function saludar (nombre){
    nombre = "Desconocido"
    return "Hola" +(nombre)
}
console.log(saludar("Maria"))