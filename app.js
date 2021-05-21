/*
    FORMATO DE CADA TAREA
        - titulo: string
        - status: string (
           * terminada
           * pendiente
         )
*/
const fs = require('fs');
path = "tareas.json";

let leerTareas = function () {
    let listado = fs.readFileSync(path,'utf-8');
    return JSON.parse(listado);
}

let agregarTarea = function (tarea) {
    let Agregatareas = leerTareas();
    Agregatareas.push(tarea);
    let tradu = JSON.stringify(Agregatareas);
    fs.writeFileSync(path,tradu,'utf-8');
    return tradu;

}

let filtrarTareasPorEstado = function (estado) {
    let tareas = leerTareas();
    let EstadoTareas= tareas.filter(item=>item.status === estado);
         return EstadoTareas;
}
exports.leerTareas = leerTareas;
exports.agregarTarea = agregarTarea;
exports.filtrarTareasPorEstado = filtrarTareasPorEstado;