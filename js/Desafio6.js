
var array = Array();
function calculos() {
    var numeros = document.getElementById("numeros").value;
    array = numeros.split(',');

    //console.log(array);
    //console.log(array.length);

    var suma = 0;
    var suma2 = 0;
    var media = 0;
    var desviacion = 0;

    for (var i = 0; i < array.length; i++) {
        suma += parseInt(array[i]);
    }
    media = suma / (array.length)
    console.log(media);

    for (var i = 0; i < array.length; i++) {
        suma2 += (parseInt(array[i]) - media) * (parseInt(array[i]));
    }

    desviacion = Math.sqrt(suma2/(array.length-1))
    //console.log(suma2);
    //console.log(desviacion);

    document.getElementById("media").innerHTML = "La media de los datos es: " + media ;
    document.getElementById("desviacionEstandar").innerHTML = "La desviacion estandar de los datos es: " + desviacion.toFixed(4); ;
}