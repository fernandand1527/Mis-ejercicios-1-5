export function generarFormulario() {
    const html = `
    <form id="festividadesForm">
        <fieldset>
            <legend>Alimentos</legend>
            <label for="alimentos">Alimentos</label>
            <br><br>
            <select id="alimentos">
                <option value="">--seleccione una opción--</option>
                <option value="natilla">Natilla</option>
                <option value="bunuelos">Buñuelos</option>
                <option value="empanadas">Empanadas</option>
                <option value="lechona">Lechona</option>
            </select>
            <br><br>
        </fieldset>

        <fieldset>
            <legend>Festividades</legend>
            <label><input type="checkbox" id="velitas"> Velitas</label>
            <input type="number" id="cantidadVelitas" min="0" placeholder="Cantidad">
            <br><br>
            <label><input type="checkbox" id="25dic"> 25 de Diciembre</label>
            <br><br>
            <label><input type="checkbox" id="31dic"> 31 de Diciembre</label>
        </fieldset>

        <fieldset>
            <legend>Regalos</legend>
            <label><input type="radio" name="regalos" value="ropa"> Ropa</label>
            <input type="number" id="cantidadRopa" min="0" placeholder="Cantidad">
            <br><br>
            <label><input type="radio" name="regalos" value="juegos"> Juegos</label>
            <input type="number" id="cantidadJuegos" min="0" placeholder="Cantidad">
            <br><br>
            <label><input type="radio" name="regalos" value="otro"> Otro</label>
        </fieldset>

        <div id="vectorVelitas"></div>
    </form>
    <br><br>
    <button id="btnFigueroa">Ejecutar Figueroa</button>

    <br><br>

    (Escoge "Natilla" en alimentos, "Velitas" y pide 20, el 31 de diciembre)
    <br><br>

    <button id="btnLopez">Ejecutar Lopez</button>

    <br><br>

    (Escoge ropa, 25 de diciembre y en cant. ropa pon 20; o contrario, desmarca el 25 de diciembre)

    <br><br>

    <button id="btnHector">Ejecutar Hector</button>

    <br><br>

    (Ingresa un valor en cantidad de ropa, luego esto generará esa misma cantidad de de vectores)

    <br><br>
    `;

    // Insertar el formulario en el contenedor
    document.getElementById('resultados').innerHTML = html;


    // Botones

    document.getElementById('btnFigueroa').addEventListener('click', () => {
        import('./Daniel.js').then(mod => mod.Figueroa());
    });

    document.getElementById('btnLopez').addEventListener('click', () => {
        import('./Andres.js').then(mod => mod.Lopez());
    });

    document.getElementById('btnHector').addEventListener('click', () => {
        import('./Maricel.js').then(mod => mod.Hector());
    });

}
