function noClique() {

    var v01, v02, x, resul;
    v01 =prompt("Digite valor : ");
    v02 =prompt("Digite valor : ");
    x =prompt("Quer somar ou subtrair? ");
    switch ( x ){
        case "somar":
            resul = parseInt(v01) + parseInt(v02);
            break;
        case "subtrair":
            resul = parseInt(v01) - parseInt(v02);
            break;
            
        default:
            resul= "Operacao nao reconhecida!!!"
            break;
    }
    document.getElementById("paragrafo").innerText = "resultado = " + resul;
}