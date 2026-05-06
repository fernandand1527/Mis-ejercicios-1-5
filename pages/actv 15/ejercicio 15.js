/**
 * ACTIVIDAD 15: CONTEO DE NÚMEROS PARES
 * DESARROLLADORA: Fernanda García 
 */

export function cargarActv15() {
    const contenedorPrincipal = document.getElementById("resultado");
    if (!contenedorPrincipal) return;

    contenedorPrincipal.innerHTML = "";

    // Inyección de la interfaz con diseño coherente
    contenedorPrincipal.insertAdjacentHTML("beforeend", `
        <div style="padding: 15px; border: 1px solid #2ea44f; border-radius: 8px;">
            <hr width="60%">
            <h3> Conteo de números pares usando 'for' </h3>
            <hr width="60%">
            <br>
            <label for="numbersInput">Números (separados por comas):</label><br>
            <input type="text" id="numbersInput" placeholder="Ej: 10, 5, 8, 3, 2" style="width: 80%; margin: 10px 0;"><br>
            
            <button id="btnProcesar15" style="background-color: #2ea44f; color: white; padding: 8px 15px; border: none; border-radius: 5px; cursor: pointer;">
                Contar pares
            </button>

            <br><br>
            <!-- ID único para evitar conflictos con el contenedor principal -->
            <p id="resultado15" style="color: #fbbf24; font-weight: bold;"></p>
        </div>
    `);

    document.getElementById("btnProcesar15").addEventListener("click", procesarNumeros);
}

/**
 * Lógica pura para contar números pares en un arreglo
 */
export function countEvenNumbers(numbersArray) {
    let contador = 0;
    for (let i = 0; i < numbersArray.length; i++) {
        // Operador módulo para verificar si es par
        if (numbersArray[i] % 2 === 0) {
            contador++;
        }
    }
    return contador;
}

/**
 * Captura datos de la interfaz y muestra el resultado
 */
export function procesarNumeros() {
    const input = document.getElementById("numbersInput").value;
    const resultDisplay = document.getElementById("resultado15");

    if (!input.trim()) {
        resultDisplay.style.color = "red";
        resultDisplay.innerHTML = "⚠️ Por favor ingresa números.";
        return;
    }

    // Convertir entrada a array numérico
    const numbersArray = input.split(",").map(num => Number(num.trim()));
    
    // Filtrar posibles errores de conversión (NaN)
    if (numbersArray.some(isNaN)) {
        resultDisplay.style.color = "red";
        resultDisplay.innerHTML = "⚠️ Error: Asegúrate de ingresar solo números válidos.";
        return;
    }

    const totalPares = countEvenNumbers(numbersArray);
    
    // Mostrar resultado final
    resultDisplay.style.color = "#fbbf24";
    resultDisplay.innerHTML = `✅ Cantidad de números pares encontrados: ${totalPares}`;
}