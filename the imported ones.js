// --- IMPORTACIONES ---
import * as examen from './pages/Evaluacion/eval.js';
import * as vectores from './pages/vectores/Actv Vectores.js';

import * as actv1 from './pages/actv 1/ejercicio 1.js';
import * as actv2 from './pages/actv 2/ejercicio 2.js';
import * as actv3 from './pages/actv 3/ejercicio 3.js';
import * as actv4 from './pages/actv 4/ejercicio 4.js';
import * as actv5 from './pages/actv 5/ejercicio 5.js';
// ... agrega las demás importaciones (actv6 a actv30) aquí

// --- EXPORTACIÓN PARA EL NAVEGADOR (ESM) ---
export {
    examen,
    vectores,
    actv1,
    actv2,
    actv3,
    actv4,
    actv5
    // Agrega aquí las demás según las importes
};

// --- PUENTE PARA JEST (CommonJS) ---
// Este bloque solo se ejecuta cuando corres 'npm test' en la terminal
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { 
        actv1, 
        actv2, 
        actv3, 
        actv4, 
        actv5 
    };
}

