/**
 * Renderiza la interfaz de la Actividad 11 en el contenedor de resultados.
 * No utiliza alertas, cumpliendo con los requerimientos del Sprint.
 */
export function cargarActv11() {
    const contenedorPrincipal = document.getElementById("resultados");
    contenedorPrincipal.innerHTML = "";

    // Inyección de la interfaz mediante párrafos y elementos de bloque
    contenedorPrincipal.insertAdjacentHTML("beforeend", `
        <div style="padding: 20px; border: 1px solid #2ea44f; border-radius: 8px; margin-top: 20px;">
            <hr width="60%">
            <h3> Suma de elementos de vector con ciclo 'for' </h3>
            <hr width="60%">
            <br>
            <label for="vectorInput"> Llenar Array con números desde el 0 hasta el: </label>
            <input type="number" id="vectorInput" style="padding: 5px; border-radius: 4px;">
            <br><br>
            <p><strong>Operación:</strong> Se generará un array desde 0 hasta el límite y se sumarán sus componentes.</p>
            <button id="procesarVector" style="background-color: #2ea44f; color: white; padding: 8px 15px; border: none; border-radius: 5px; cursor: pointer;"> 
                Mostrar Vector 
            </button>
            <br><br>
            <div id="vectoresGenerados" style="color: #4ec9b0; font-family: monospace;"></div>
            <div id="sumaTotalVectores" style="color: #fbbf24; font-weight: bold; margin-top: 10px;"></div>
        </div>
    `);

    document.getElementById("procesarVector").addEventListener('click', procesarVector);
}

/**
 * Procesa la lógica del vector y muestra el resultado en un párrafo del DOM.
 */
export function procesarVector() {
    const inputElement = document.getElementById("vectorInput");
    const arraylimit = parseInt(inputElement.value);

    if (isNaN(arraylimit)) {
        document.getElementById("sumaTotalVectores").innerHTML = "<p style='color: red;'>⚠️ Por favor, ingresa un número válido.</p>";
        return;
    }

    let arr = [];
    for (let i = 0; i <= arraylimit; i++) {
        arr.push(i);
    }

    document.getElementById("vectoresGenerados").innerHTML = `<p>Vector generado: [${arr.join(", ")}]</p>`;
    
    let suma = sumArrayElements(arr);
    document.getElementById("sumaTotalVectores").innerHTML = `<p>Resultado Final: La suma es ${suma}</p>`;
}

/**
 * Lógica pura de backend para sumar elementos.
 */
export function sumArrayElements(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
