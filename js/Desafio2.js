
function calculoImc () {

    var peso = Number(document.getElementById("peso").value);
    var estatura = Number(document.getElementById("estatura").value);

    var res = peso/(estatura*estatura);
    var decimales = res.toFixed(2);

    document.getElementById("resu2").innerHTML = "Tu indice de masa corporal es:     " + decimales + " Kg/m^2";



}