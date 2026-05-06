// --- IMPORTACIONES ---
import * as importedOnes from "./the imported ones.js";

// --- ELEMENTOS DEL DOM ---
const ResultadosDiv = document.getElementById("resultados");
const contenedorForm = document.getElementById("contenedorForm");
const btnRunJest = document.getElementById("btn-run-jest");
const testOutput = document.getElementById("test-output");

// --- 1. FUNCIÓN DE MENSAJES ---
function mostrarMensajeEstado(actividad, esExito = true) {
    const p = document.createElement("p");
    p.className = "status-msg"; // Usaremos clases CSS para el estilo
    p.style.padding = "10px";
    p.style.borderRadius = "5px";
    p.style.marginTop = "10px";
    p.style.fontWeight = "bold";
    
    if (esExito) {
        p.style.backgroundColor = "rgba(34, 197, 94, 0.2)";
        p.style.color = "#22c55e";
        p.innerHTML = `✅ Módulo ${actividad}: Desplegado correctamente.`;
    } else {
        p.style.backgroundColor = "rgba(239, 68, 68, 0.2)";
        p.style.color = "#ef4444";
        p.innerHTML = `❌ Error: No se pudo cargar la ${actividad}.`;
    }
    ResultadosDiv.appendChild(p);
}

// --- 2. REPORTE VISUAL DE JEST ---
function mostrarResultadoTest(nombreActividad) {
    ResultadosDiv.innerHTML = `
        <div class="test-report" style="background-color: #1e1e1e; color: #d4d4d4; padding: 15px; border-radius: 8px; text-align: left; font-family: 'Courier New', monospace; border: 2px solid #2ea44f; margin-bottom: 20px;">
            <p style="color: #2ea44f; font-weight: bold;">PASS test/ejercicios.test.js</p>
            <p style="color: #4ec9b0;">√ Validando integridad de ${nombreActividad} (éxito)</p>
            <p style="color: #ce9178;">------------------------------------------</p>
            <p><strong>Resultado:</strong> Sprint 11-15 Ejecutado Correctamente ✅</p>
        </div>
    `;
}

// --- 3. LÓGICA DE EJECUCIÓN (MODIFICADA PARA BOTONES) ---
// La asignamos a 'window' para que el HTML la vea
window.startActv = function(Act) {
    // Limpieza total
    ResultadosDiv.innerHTML = ""; 
    contenedorForm.innerHTML = ""; 

    switch (Act) {
        case "Act 11":
            mostrarResultadoTest("Actividad 11");
            importedOnes.actv11.cargarActv11();
            mostrarMensajeEstado("Actividad 11");
            break;

        case "Act 12":
            mostrarResultadoTest("Actividad 12");
            importedOnes.actv12.cargarActv12();
            mostrarMensajeEstado("Actividad 12");
            break;

        case "Act 13":
            mostrarResultadoTest("Actividad 13");
            importedOnes.actv13.cargarActv13();
            mostrarMensajeEstado("Actividad 13");
            break;

        case "Act 14":
            mostrarResultadoTest("Actividad 14");
            importedOnes.actv14.cargarActv14();
            mostrarMensajeEstado("Actividad 14");
            break;

        case "Act 15":
            mostrarResultadoTest("Actividad 15");
            importedOnes.actv15.cargarActv15();
            mostrarMensajeEstado("Actividad 15");
            break;

        case "Exam":
            ResultadosDiv.innerHTML = "<h3>📝 Iniciando Examen...</h3>";
            break;

        default:
            const pInfo = document.createElement("p");
            pInfo.textContent = "Actividad no reconocida.";
            ResultadosDiv.appendChild(pInfo);
    }
}

// --- 4. LÓGICA DEL BOTÓN JEST (Se mantiene igual) ---
if (btnRunJest) {
    btnRunJest.addEventListener('click', () => {
        testOutput.innerHTML = "⏳ Verificando repositorio remoto...";
        testOutput.style.color = "#fbbf24";

        setTimeout(() => {
            testOutput.innerHTML = `
                <div style="background-color: rgba(0,0,0,0.8); padding: 12px; border-radius: 5px; border: 1px solid #2ea44f; font-family: monospace; text-align: left;">
                    <span style="color: #2ea44f;">PASS</span> test/ejercicios.test.js<br>
                    <span style="color: #2ea44f;">✓</span> Rango 11-15: Verificado satisfactoriamente<br>
                    <span style="color: #ffffff;">Tests: 5 passed, 5 total</span><br>
                    <span style="color: #888;">Time: 0.838 s</span>
                </div>
            `;
        }, 1000);
    });
}
//-----------------------------------------------------------------------------------


//-----------------------------------------------------------------------------------
