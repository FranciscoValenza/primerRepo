let fs = require('fs');  // importo libreria para leer archivos de texto

function listarTareas(estructuraTareas){
    estructuraTareas.forEach(function(dato){
        console.log("Tarea: " + dato.titulo);
    });
}

function guardarTarea(estructuraTareas,nuevaTarea){
    estructuraTareas.push(nuevaTarea);
    fs.writeFileSync('./tareas.json',JSON.stringify(estructuraTareas,null," "));
}

function borrarTarea(estructuraTareas,codigoBusqueda){
    let nuevaEstructuraTareas = estructuraTareas.filter(function(elemento){
        return elemento.codigo!=codigoBusqueda;
    });

    fs.writeFileSync('./tareas.json',JSON.stringify(nuevaEstructuraTareas,null," "));

    return nuevaEstructuraTareas;
}

function filtrarTarea(estructuraTareas,estadoFiltro){
    let nuevaEstructuraTareas = estructuraTareas.filter(function(elemento){
        return elemento.estado==estadoFiltro;
    });

    return nuevaEstructuraTareas;
}

module.exports = {listarTareas, guardarTarea, borrarTarea, filtrarTarea}