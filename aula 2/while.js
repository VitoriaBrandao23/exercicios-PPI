var x = 1;
var tabuada = [4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48];

while (x <=50){

    if (tabuada.includes(x)){
        document.write('MÚLTIPLO <br>');
    } else {
        document.write(x + '<br>');
    }

    x++;
}