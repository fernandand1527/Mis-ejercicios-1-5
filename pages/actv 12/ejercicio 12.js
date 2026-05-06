/** 
 * ACTIVIDAD 12: VALOR MÁXIMO - SUPERCELL-30
 * DESARROLLADORA: Fernanda García 
 */

export function cargarActv12() {
    // 1. Apuntamos al contenedor principal (la terminal negra)
    const contenedorPrincipal = document.getElementById("resultado");
    if (!contenedorPrincipal) return;

    contenedorPrincipal.innerHTML = "";

    // 2. Inyectamos la interfaz con IDs ÚNICOS
    contenedorPrincipal.insertAdjacentHTML("beforeend", `
        <div style="padding: 15px; border: 1px solid #4ec9b0; border-radius: 8px;">
            <h3> Encontrar valor máximo en un Array </h3>
            <hr width="60%">
            <br>
            <label for="arrayInput">Ingresa números separados por coma:</label><br>
            <input type="text" id="arrayInput" placeholder="Ej: 5, 10, 3, 22, 8" style="width: 80%; margin: 10px 0;">
            <br>
            <button id="btnMaximo" style="background-color: #2ea44f; color: white; padding: 8px 15px; border: none; border-radius: 5px; cursor: pointer;">
                Mostrar máximo
            </button>
            <br><br>
            <!-- CAMBIAMOS EL ID AQUÍ PARA EVITAR DUPLICIDAD -->
            <p id="texto-resultado-12" style="color: #fbbf24; font-weight: bold;"></p>
        </div>
    `);

    // 3. Asignamos el evento
    document.getElementById("btnMaximo").addEventListener('click', mostrarMaximo);
}

export function findMaxValue(array) {
    let max = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }
    return max;
}

export function mostrarMaximo() { 
    const input = document.getElementById("arrayInput").value;
    // Apuntamos al ID único que creamos arriba
    const displayResultado = document.getElementById("texto-resultado-12");

    if (!input.trim()) {
        displayResultado.textContent = "⚠️ Por favor ingresa valores.";
        displayResultado.style.color = "red";
        return;
    }

    const array = input.split(",").map(num => Number(num.trim()));
    const max = findMaxValue(array);

    displayResultado.style.color = "#fbbf24";
    displayResultado.textContent = `✅ El valor máximo es: ${max}`;
}