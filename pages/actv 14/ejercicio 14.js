/**
 * ACTIVIDAD 14: INVERTIR ARRAY
 * DESARROLLADORA: Fernanda García 
 */

export function cargarActv14() {
    const contenedorPrincipal = document.getElementById("resultado");
    if (!contenedorPrincipal) return;

    contenedorPrincipal.innerHTML = "";

    // Inyectamos la interfaz asegurando que el diseño sea consistente con las otras actividades
    contenedorPrincipal.insertAdjacentHTML("beforeend", `
        <div style="padding: 15px; border: 1px solid #4ec9b0; border-radius: 8px;">
            <hr width="60%">
            <h3> Invertir un array con ciclo FOR </h3>
            <hr width="60%">
            <br>
            <label for="arrayInput14">Ingresa valores separados por coma:</label><br>
            <input type="text" id="arrayInput14" placeholder="Ej: 1, 2, 3, 4, 5" style="width: 80%; margin: 10px 0;"><br>

            <button id="btnInvertir14" style="background-color: #2ea44f; color: white; padding: 8px 15px; border: none; border-radius: 5px; cursor: pointer;">
                Invertir
            </button>

            <br><br>
            <!-- Usamos un ID específico para mostrar el resultado -->
            <p id="resultado14" style="color: #fbbf24; font-weight: bold;"></p>
        </div>
    `);

    document.getElementById("btnInvertir14").addEventListener("click", mostrarInvertido);
}

/**
 * Lógica para invertir el arreglo recorriendo desde el final
 */
export function reverseArray(arr) {
    const invertido = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        invertido.push(arr[i]);
    }
    return invertido;
}

/**
 * Captura los datos y muestra el resultado en la interfaz
 */
export function mostrarInvertido() {
    const input = document.getElementById("arrayInput14").value;
    const resultado = document.getElementById("resultado14");

    if (!input.trim()) {
        resultado.style.color = "red";
        resultado.innerHTML = "⚠️ Por favor ingresa valores.";
        return;
    }

    // Convertir texto a array y limpiar espacios
    const array = input.split(",").map(item => item.trim());

    // Ejecutar lógica de inversión
    const invertido = reverseArray(array);

    // Mostrar resultado final
    resultado.style.color = "#fbbf24";
    resultado.innerHTML = `Array invertido: <b>[${invertido.join(", ")}]</b>`;
}