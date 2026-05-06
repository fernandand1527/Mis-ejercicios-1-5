/**
 * ACTIVIDAD 13: BÚSQUEDA CON WHILE
 * DESARROLLADORA: Fernanda García 
 */

export function cargarActv13() {
    const contenedorPrincipal = document.getElementById("resultado");
    if (!contenedorPrincipal) return;

    contenedorPrincipal.innerHTML = "";

    // Inyectamos la interfaz con un ID de salida único (res13)
    contenedorPrincipal.insertAdjacentHTML("beforeend", `
        <div style="padding: 15px; border: 1px solid #4ec9b0; border-radius: 8px;">
            <hr width="60%">
            <h3> Búsqueda en array con ciclo while </h3>
            <hr width="60%">
            <br>
            <label for="dataInput">Ingresa datos separados por coma:</label><br>
            <input type="text" id="dataInput" placeholder="Ej: manzana, amarillo, 75" style="width: 80%;"><br><br>

            <label for="searchInput">Valor a buscar:</label><br>
            <input type="text" id="searchInput" placeholder="Ej: Empanadas" style="width: 80%;"><br><br>

            <button id="btnBuscar" style="background-color: #2ea44f; color: white; padding: 8px 15px; border: none; border-radius: 5px; cursor: pointer;">
                Buscar elemento
            </button>

            <p style="margin-top: 10px; font-size: 0.9em; color: #888;"> (Recuerda que se empieza a contar desde 0) </p>
            <!-- ID ÚNICO PARA EL RESULTADO -->
            <p id="res13" style="color: #fbbf24; font-weight: bold;"></p>
        </div>
    `);

    document.getElementById("btnBuscar").addEventListener("click", procesarBusqueda);
}

export function searchInArray(dataArray, searchValue) {
    let index = 0;
    while (index < dataArray.length) {
        if (dataArray[index] === searchValue) {
            return index; 
        }
        index++;
    }
    return -1;
}

export function procesarBusqueda() {
    const dataInput = document.getElementById("dataInput").value;
    const searchValue = document.getElementById("searchInput").value.trim();
    const displayResultado = document.getElementById("res13");

    if (!dataInput.trim() || !searchValue) {
        displayResultado.innerHTML = "⚠️ Por favor complete ambos campos.";
        displayResultado.style.color = "red";
        return;
    }

    const dataArray = dataInput.split(",").map(item => item.trim());
    const position = searchInArray(dataArray, searchValue);

    displayResultado.style.color = "#fbbf24";
    if (position !== -1) {
        displayResultado.innerHTML = `✅ Elemento encontrado en la posición: ${position}`;
    } else {
        displayResultado.innerHTML = `❌ Elemento <b>${searchValue}</b> no se encuentra en el array.`;
    }
}