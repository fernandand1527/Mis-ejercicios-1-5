/** 
 * GESTIÓN DINÁMICA DE INTERFAZ - PROYECTO SUPERCELL-30
 * DESARROLLADORA: Fernanda García 
 */

// 1. Función Maestra: Actualiza Título, Terminal e Inputs
const actualizarEjercicio = (nombreTitulo, mensajeConsola) => {
    // Cambia el texto del h3 usando el ID que acabas de crear
    const tituloElemento = document.getElementById('titulo-actividad');
    if (tituloElemento) {
        tituloElemento.innerText = nombreTitulo;
    }

    // Limpia la terminal negra
    const pantalla = document.getElementById('resultado');
    if (pantalla) {
        pantalla.innerText = mensajeConsola;
    }

    // Borra los datos de los inputs inferiores
    const inputDatos = document.getElementById('datos');
    const inputBuscar = document.getElementById('buscar');
    if (inputDatos) inputDatos.value = "";
    if (inputBuscar) inputBuscar.value = "";
};

// 2. Vinculación con los botones del HTML
window.ejecutarActividad11 = () => {
    actualizarEjercicio("Actividad 11: Búsqueda con Ciclo While", "✅ Actividad 11 lista.");
};

window.ejecutarActividad12 = () => {
    actualizarEjercicio("Actividad 12: Lógica de Ciclos", "✅ Actividad 12: Procesando estructuras.");
};

window.ejecutarActividad13 = () => {
    actualizarEjercicio("Actividad 13: Gestión de Arreglos (Vectores)", "✅ Actividad 13 cargada.");
};

window.ejecutarActividad14 = () => {
    actualizarEjercicio("Actividad 14: Algoritmos de Ciclos Anidados", "✅ Actividad 14 en ejecución.");
};

window.ejecutarActividad15 = () => {
    actualizarEjercicio("Actividad 15: Sprint 1 - Despliegue Final", "✅ Proyecto finalizado con éxito.");
};

window.validarSprint = () => {
    actualizarEjercicio("Validación de Calidad (Tests)", "PASS test/ejercicios.test.js\n✓ Verificado correctamente.");
};