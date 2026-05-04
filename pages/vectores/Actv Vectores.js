function cargarPagina() {
    const contenedorPrincipal = document.getElementById("resultados");

    contenedorPrincipal.innerHTML = ""; //limpia la pantalla al ejecutar la siguiente función.

    contenedorPrincipal.insertAdjacentHTML("beforeend", `

            <label for="tam1">Tamaño del Vector 1: </label>
            <input type="number" id="tam1">

            <br><br>

            <label for="tam2">Tamaño del Vector 2: </label>
            <input type="number" id="tam2">

            <br><br>

            <button id = "generarInputs">Generar Cajas</button>
            <br>
            `);

    document.getElementById("generarInputs").addEventListener("click", generarInputs);

    return contenedorPrincipal;

}

function generarInputs() {

    let tam_1 = parseInt(document.getElementById("tam1").value);
    let tam_2 = parseInt(document.getElementById("tam2").value);

    console.log(tam_1, tam_2);

    if (isNaN(tam_1) || isNaN(tam_2) || tam_1 <= 0 || tam_2 <= 0) {
        alert("Por favor ingresa tamaños validos para ambos Vectores.");

        return;
    }

    let html = `<h3>Valores del Vector 1</h3>`;
    for (let i = 0; i < tam_1; i++) {
        html += `<input type="number" id="v1_${i}" placeholder="Caja V1_[${i}]">`;
    }
    html += `<h3>Valores del Vector 2</h3>`;
    for (let j = 0; j < tam_2; j++) {
        html += `<input type="number" id="v2_${j}" placeholder="Caja V2_[${j}]">`;
    }

    html += `<br><br><button id = "mostrarValores"> Mostrar Valores </button>`;

    document.getElementById("resultados").innerHTML = html;

    document.getElementById("mostrarValores").addEventListener("click", () => { mostrarValores(tam_1, tam_2)});

    return html;


}


function mostrarValores(tam_1, tam_2) {
    let vector1 = [];
    let vector2 = [];

    for (let i = 0; i < tam_1; i++) {
        vector1.push(parseFloat(document.getElementById(`v1_${i}`).value) || 0);
    }

    for (let j = 0; j < tam_2; j++) {
        vector2.push(parseFloat(document.getElementById(`v2_${j}`).value) || 0);
    }

    alert(`Vector 1: [${vector1}] \n Vector 2: [${vector2}]`);
}

export { cargarPagina, generarInputs, mostrarValores };
