export function Hector() {
    const cantidadVel = parseInt(document.getElementById('cantidadVelitas').value) || 0;

    if (cantidadVel < 1) {
        alert('Por favor ingresa un número de velitas válido.');
        return;
    }

    let html = '';
    html += `<div class="vector-box">
                <div class="vector-title">Velitas Vector</div>
                <table border="1">
                    <thead>
                        <tr>
                            <th>i →</th>`;

    // Cabeceras de índice
    for (let i = 0; i < cantidadVel; i++) {
        html += `<th>${i}</th>`;
    }

    html += `      </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>`;

    // Inputs para cada posición
    for (let i = 0; i < cantidadVel; i++) {
        html += `<td><input type="text" id="velita_${i}" placeholder="Velita_[${i}]" /></td>`;
    }

    html += `      </tr>
                    </tbody>
                </table>
            </div>`;

    // Mostrar en div contenedor
    document.getElementById('vectorVelitas').innerHTML = html;
}


