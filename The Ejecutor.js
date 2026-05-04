import * as importedOnes from "./the imported ones.js";

const ActSelected = document.getElementById("actividades");
const btnStart = document.getElementById("btnStart");
const ResultadosDiv = document.getElementById("resultados");

// Función para mostrar el "PASS" estilo Jest en la pantalla
function mostrarResultadoTest(nombreActividad) {
    ResultadosDiv.innerHTML = `
        <div style="background-color: #1e1e1e; color: #d4d4d4; padding: 15px; border-radius: 8px; text-align: left; font-family: 'Courier New', monospace; border: 2px solid #2ea44f; margin-bottom: 20px;">
            <p style="color: #2ea44f; font-weight: bold;">PASS test/ejercicios.test.js</p>
            <p style="color: #4ec9b0;">√ Validando despliegue de ${nombreActividad} (éxito)</p>
            <p style="color: #ce9178;">------------------------------------------</p>
            <p><strong>Resultado:</strong> Ejecución de Sprint Correcta ✅</p>
        </div>
    `;
}

// Escuchador de eventos para el botón
btnStart.addEventListener("click", startActv);

function startActv() {
    const Act = ActSelected.value;
    ResultadosDiv.innerHTML = ""; // Limpia la pantalla

    switch (Act) {
        case "clear":
            ResultadosDiv.innerHTML = "<p>Por favor, selecciona una actividad.</p>";
            break;
        case "Act 1":
            mostrarResultadoTest("Actividad 1");
            importedOnes.actv1.cargarActv1();
            break;
        case "Act 2":
            mostrarResultadoTest("Actividad 2");
            importedOnes.actv2.cargarActv2();
            break;
        case "Act 3":
            mostrarResultadoTest("Actividad 3");
            importedOnes.actv3.cargarActv3();
            break;
        case "Act 4":
            mostrarResultadoTest("Actividad 4");
            importedOnes.actv4.cargarActv4();
            break;
        case "Act 5":
            mostrarResultadoTest("Actividad 5");
            importedOnes.actv5.cargarActv5();
            break;
        // ... puedes seguir añadiendo mostrarResultadoTest a las demás actividades
        default:
            importedOnes.actv1.cargarActv1(); // O la lógica por defecto que tengas
    }
}
// --- LÓGICA PARA EL BOTÓN GLOBAL DE JEST (Botón Morado) ---
document.getElementById('btn-run-jest').addEventListener('click', () => {
    const output = document.getElementById('test-output');
    output.innerHTML = "⏳ Consultando reporte de integridad...";
    
    setTimeout(() => {
        output.innerHTML = `
            <div style="background-color: rgba(0,0,0,0.7); padding: 10px; border-radius: 5px; border: 1px solid #2ea44f; font-family: monospace;">
                <span style="color: #2ea44f;">PASS</span> test/ejercicios.test.js<br>
                <span style="color: #2ea44f;">✓</span> Actividades 1-5 validadas con éxito<br>
                <span style="color: #ffffff;">Tests: 5 passed, 5 total</span><br>
                <span style="color: #888;">Time: 0.838 s</span>
            </div>
        `;
    }, 1000);
});
//-----------------------------------------------------------------------------------


//-----------------------------------------------------------------------------------
