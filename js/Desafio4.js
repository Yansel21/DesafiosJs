
var x = 0;
var baseNumeros = Array();

function captura() {
    baseNumeros[x] = document.getElementById("Numer").value;
    x++;
    document.getElementById("Numer").value = ""; //resetar box
    console.log(baseNumeros);
}

function sumaArreglo() {
    var suma = 0;
    for (var i = 0; i < baseNumeros.length; i++) {
        suma += parseInt(baseNumeros[i]);

    }
    // console.log(suma);
    document.getElementById("sumaTotal").innerHTML = "La suma total es: " + suma;

}





