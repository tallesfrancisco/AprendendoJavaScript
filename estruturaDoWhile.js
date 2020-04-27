function noClique(){
    do {
    var sairLoop, v01,v02;
    v01 = prompt("Digite o valor 01: ");
    v02 = prompt("Digite o valor 02: ");
    resul = parseInt(v01) + parseInt(v02) ;
    document.getElementById("paragrafo").innerText = "O resultado e : " + resul;
    sairLoop = prompt (" Voce deseja sair do looping(s/n) ?  ")
    } while (sairLoop == "n");
    
}