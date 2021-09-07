
function pago () {

    var valorH = Number(document.getElementById("valorH").value);
    var horas = Number(document.getElementById("horas").value);

    var res = valorH*horas;

    document.getElementById("resu").innerHTML = "El Total a pagar es: $     " + res;

  

}
