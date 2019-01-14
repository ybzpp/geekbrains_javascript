function homework__function__02() {
var i = +prompt('Введите число от 0 до 10');
do {
    if (i >= 0 && i <= 10) {
        if (i == 0) {
            console.log(i++ + ' - это ноль');
        }
        else if (i % 2 == 0) {
            console.log(i++ + ' - четное число');
        }
        else {
            console.log(i++ + ' - нечетное число');
        }
    }
    else {
        console.log(i + ' - число не находится в промежутке от 0 до 10 ');
    }
} while (i >= 0 && i <= 10);
}