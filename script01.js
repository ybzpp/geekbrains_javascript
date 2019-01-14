function homework__function__01() {
var i = 1;
var mas = [];
perebor: while (i < 100) {
    i++;
    
    var j = 2
    while (j < i) {
        if (i % j == 0) continue perebor;
        j++
    }
    mas.push(i);
    
}

console.log('Простые числа: ' + mas);
    }