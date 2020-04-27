var resultado, valor01,valor02,valor03;
valor01 = prompt("Digite o primeiro valor : ");
valor02 = prompt("Digite o segundo valor : ")
valor03 = prompt("Digite o terceiro valor : ")

resultado = (((valor01 - valor03) * (valor02 - valor01)) / valor03 ) % 2;

alert( "O resultado final e : " + resultado);