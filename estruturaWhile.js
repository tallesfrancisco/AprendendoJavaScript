function noClique(){
    var nome,idade,limite,cont;
    limite= prompt("Quantidade de vezes de verificacao da idade: ");
    cont=0;
    while (cont < limite ) { 
        nome = prompt("Digite o nome da pessoa: ");
        idade = prompt("Digite a idade da pessoa :");
        if (idade > 18) {
            document.getElementById("paragrafo").innerText = nome + ", voce e maior de idade!!!";    
        }
        else{
            document.getElementById("paragrafo").innerText = nome + ", voce e menor de idade!!!";     
        }
        cont++
        
    
        
    }
    
}
