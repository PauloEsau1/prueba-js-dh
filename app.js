/*
    FORMATO DE CADA TAREA
        - titulo: string
        - status: string (
           * terminada
           * pendiente
         )
*/
const fs = require('fs')
const tareas ={
    path: 'tareas.json',
    leer:function(){
        const tareas = fs.readFileSync(this.path)
    }
}

exports.leerTareas = function () {
    const tareas = fs.readFileSync(this.path, 'utf-8');
    return JSON.parse(listado);
}

exports.agregarTarea = function (tarea) {
    
    tareas.push(tarea);

}

exports.filtrarTareasPorEstado = function (estado) {
    let EstadoTareas= tareas.filter(item=>item.status === estado);
         return EstadoTareas;
}
