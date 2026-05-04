export function Figueroa() {
    const alimento = document.getElementById("alimentos").value;
    const velitasMarcado = document.getElementById("velitas").checked;
    const cantidadVel = parseInt(document.getElementById("cantidadVelitas").value) || 0;
    const fecha31 = document.getElementById("31dic").checked;


    const cumple = 20; // años de cumpleaños


    const viejo = document.getElementById("resultadoFigueroa");
    if (viejo) viejo.remove();


    let p = document.createElement("p");
    p.id = "resultadoFigueroa";


    if (alimento === "natilla" && velitasMarcado && cantidadVel === 20 && fecha31) {
        const total = cantidadVel + cumple;
        p.textContent = "Total: " + total;
    } else {
        p.textContent = "pocas velitas 🙃";
    }


    document.body.appendChild(p);
}


