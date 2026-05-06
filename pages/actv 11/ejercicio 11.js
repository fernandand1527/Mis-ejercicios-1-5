export function cargarActv11() {
    const contenedorPrincipal = document.getElementById("resultado");
    contenedorPrincipal.innerHTML = "";

    contenedorPrincipal.insertAdjacentHTML("beforeend", `
        <div style="padding: 20px; border: 1px solid #2ea44f; border-radius: 8px; margin-top: 20px;">
            <h3> Suma de elementos de vector con ciclo 'for' </h3>
            <hr width="60%">
            <br>
            <label for="vectorInput"> Llenar Array con números desde 0 hasta: </label>
            <input type="number" id="vectorInput" style="padding: 5px; border-radius: 4px;">
            <br><br>
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

export function procesarVector() {
    const inputElement = document.getElementById("vectorInput");
    const arraylimit = parseInt(inputElement.value);

    if (isNaN(arraylimit)) {
        document.getElementById("sumaTotalVectores").innerHTML = "<p style='color: red;'>⚠️ Ingresa un número válido.</p>";
        return;
    }

    let arr = [];
    for (let i = 0; i <= arraylimit; i++) { arr.push(i); }

    document.getElementById("vectoresGenerados").innerHTML = `<p>Vector: [${arr.join(", ")}]</p>`;
    document.getElementById("sumaTotalVectores").innerHTML = `<p>Resultado: La suma es ${sumArrayElements(arr)}</p>`;
}

export function sumArrayElements(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) { sum += arr[i]; }
    return sum;
}
