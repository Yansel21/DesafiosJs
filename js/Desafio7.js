function agregarFruta(){
    function frutaInfo(fruta,precioFruta)
    {

    this.fruta=fruta;
    this.precioFruta=precioFruta;
    }

    var frutaCaptura = document.getElementById("fruta").value;
    var precioCaptura = Number(document.getElementById("precioFruta").value);

    document.getElementById("frutaAgregada").innerHTML = "Acaba de agregar: " + frutaCaptura ;
   
    // console.log(frutaCaptura);
    //console.log(precioCaptura);

    nuevaFruta = new frutaInfo(frutaCaptura,precioCaptura);
    console.log(nuevaFruta);
    agregarF();
}
const baseDatos =[];
function agregarF(){
    baseDatos.push(nuevaFruta);
    console.log(baseDatos);
}
function Encontrar(){
    var precioTotalFruta = 0;
    var kilosFruta = Number(document.getElementById("KilosF").value);
    var frutaBuscar = document.getElementById("BuscarF").value;

   frutaE = baseDatos.find(elemento => elemento.fruta==frutaBuscar);

    //console.log(frutaE.precioFruta)
    if(frutaBuscar == frutaE.fruta){
        console.log("si hay mi loco");
        console.log(frutaE.fruta);

        precioTotalFruta = kilosFruta*frutaE.precioFruta;
        console.log(precioTotalFruta);

        document.getElementById("lavelPrecioTotal").innerHTML = "El precio total de "+ kilosFruta + " Kilos" + " es: $ " + precioTotalFruta ;

    }
    else{
    console.log("no hay mi loco");
    }

    //console.log(Object.values(frutaE));
    
    /*for (frt in baseDatos) {
        console.log(baseDatos[frt]);
      }
    */
}  
