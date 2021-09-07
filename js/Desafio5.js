function esPalindromo() {
    var palabra = document.getElementById("palabra").value;
    let array = palabra.split("");
    let reverse = array.reverse();
   

    console.log(reverse);
    console.log(palabra);

    if (palabra == reverse.join("")) {
        //console.log("si");
        document.getElementById("Palindromo").innerHTML = palabra +" - Si es un palindromo ";
    }
    else {
        //console.log("no");
        document.getElementById("Palindromo").innerHTML = palabra +" - No es un palindromo ";

    }

}