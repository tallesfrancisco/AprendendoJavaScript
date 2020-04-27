function noClique() {
    var n, x,cont;
    n = prompt("Digite um numero para calcular o seu fatorial: ")
    x = 1

    for (cont = 1; cont <= n; cont++) {
        x = x * cont
    }
    document.getElementById("paragrafo").innerText = "resultado = " + x;

    
}