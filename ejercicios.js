/** 
 * CONTROLADOR CENTRAL - PROYECTO SUPERCELL-30
 * DESARROLLADORA: Fernanda García 
 */

import * as actv11 from "./pages/actv 11/ejercicio 11.js";
import * as actv12 from "./pages/actv 12/ejercicio 12.js";
import * as actv13 from "./pages/actv 13/ejercicio 13.js";
import * as actv14 from "./pages/actv 14/ejercicio 14.js";
import * as actv15 from "./pages/actv 15/ejercicio 15.js";

// Función para actualizar el título de la tarjeta blanca
const actualizarInterfaz = (titulo) => {
    const elTitulo = document.getElementById('titulo-actividad');
    if (elTitulo) elTitulo.innerText = titulo;
    
    // Limpiamos la terminal negra para el nuevo ejercicio
    const terminal = document.getElementById('resultado');
    if (terminal) terminal.innerHTML = "<p style='color: #888;'>Cargando actividad...</p>";
};

// Vinculación de botones del HTML (window para que sean globales)
window.ejecutarActividad11 = () => {
    actualizarInterfaz("Actividad 11: Suma de Vectores");
    actv11.cargarActv11();
};

window.ejecutarActividad12 = () => {
    actualizarInterfaz("Actividad 12: Valor Máximo");
    actv12.cargarActv12();
};

window.ejecutarActividad13 = () => {
    actualizarInterfaz("Actividad 13: Búsqueda While");
    actv13.cargarActv13();
};

window.ejecutarActividad14 = () => {
    actualizarInterfaz("Actividad 14: Invertir Array");
    actv14.cargarActv14();
};

window.ejecutarActividad15 = () => {
    actualizarInterfaz("Actividad 15: Conteo de Pares");
    actv15.cargarActv15();
};

// Reemplazo de alerta por escritura en DOM
window.validarSprint = () => {
    const terminal = document.getElementById('resultado');
    if (terminal) {
        terminal.innerHTML = `
            <div style="color: #4ec9b0; padding: 10px; border: 1px dashed #4ec9b0;">
                <p>✅ <strong>Sprint Validado:</strong> Todas las funciones están operativas.</p>
                <p>Desarrollado por: Fernanda García - ADSO Popayán</p>
            </div>
        `;
    }
};