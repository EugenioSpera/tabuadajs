var tabuada = parseFloat(prompt("Digite um número"));
var tamTabuada = parseFloat(prompt("Digite o tamanho da tabuada"));
var indice = 1;

while(indice <= tamTabuada){
    document.write(tabuada + " x " + indice + " = " +(indice * tabuada) + "<br>");
    indice++
}
document.write("Fim da Tabuada");

 