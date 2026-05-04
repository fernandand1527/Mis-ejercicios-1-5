
export function Lopez() {
    const ropaSeleccionada = document.querySelector('input[name="regalos"]:checked')?.value === 'ropa';
    const fecha25 = document.getElementById('25dic').checked;
    const cantidadRopa = parseInt(document.getElementById('cantidadRopa').value) || 0;
    const cantidadVel = parseInt(document.getElementById('cantidadVelitas').value) || 0;


    // Elimina div previo si existe
    const viejoDiv = document.getElementById('resultadoLopez');
    if (viejoDiv) viejoDiv.remove();


    let div = document.createElement('div');
    div.id = 'resultadoLopez';


    if (ropaSeleccionada && fecha25 && cantidadRopa > 0) {
        // Imprime iconos según la cantidad de ropa
        for (let i = 0; i < cantidadRopa; i++) {
            let icono = document.createElement('i');
            icono.textContent = '👕';
            div.appendChild(icono);
        }
    } else {
        // Si no se cumple, imprime la multiplicación de velitas por ropa en iconos
        const total = cantidadVel * cantidadRopa;
        for (let i = 0; i < total; i++) {
            let icono = document.createElement('i');
            icono.textContent = '🕯️';
            div.appendChild(icono);
        }
    }


    document.body.appendChild(div);
}


