let fs = require('fs');  // importo libreria para leer archivos de texto
const { listenerCount } = require('process');
let {listarTareas, guardarTarea, borrarTarea, filtrarTarea} = require('./funcionesDeTareas');

let obj_json = fs.readFileSync('./tareas.json');  // Leo el archivo con o sin 'utf-8'
let obj_literal = JSON.parse(obj_json);  // convierto el archivo


let TN = {
    codigo: 8,
    titulo: "Testear codigo",
    estado: "En progreso" 
}

guardarTarea(obj_literal,TN);

obj_literal = borrarTarea(obj_literal,8);

let tareasFiltradas = filtrarTarea(obj_literal,"En progreso")

listarTareas(obj_literal);

listarTareas(tareasFiltradas);

console.log(listarTareas(tareasFiltradas))