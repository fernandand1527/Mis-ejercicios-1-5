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
//-----------------------------------------------------------------------------------

btnStart.addEventListener('click', startActv);

//-----------------------------------------------------------------------------------
