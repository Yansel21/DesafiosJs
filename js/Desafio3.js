
function precioBarras() {

    var cantidadBarras = Number(document.getElementById("Barras").value);

    var res = (cantidadBarras * 450) * 0.50;

    document.getElementById("PrecioB").innerHTML = "Precio habitual: $450 ";
    document.getElementById("Descuento").innerHTML = "Descuento por no ser fresca es del 50% ";
    document.getElementById("PrecioFinal").innerHTML = "El coste total es $: " + res;



}