function noClique() {

    var v01, v02, x, resul;
    v01 =prompt("Digite valor : ");
    v02 =prompt("Digite valor : ");
    x =prompt("Quer somar ou subtrair? ");
    if (x=="somar")
{
        resul = parseInt(v01) + parseInt(v02);
}
    else if ( x == "subtrair"){
        resul = parseInt(v01) - parseInt(v02);
    }
    document.getElementById("paragrafo").innerText = "resultado = " + resul;
}