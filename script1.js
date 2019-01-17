function homework__function__01() {
    function num_to_obj(num) {
        var arrNumber = num.split('');
        while (arrNumber.length < 3) {
            arrNumber.unshift(0);
        }
        var objNumber = {};
        if (arrNumber.length > 3) {
            return null;
        }
        else {
            objNumber['сотни'] = +arrNumber[0];
            objNumber['десятки'] = +arrNumber[1];
            objNumber['единицы'] = +arrNumber[2];
            return objNumber;
        }
    }
    var number = prompt("Введите число от 0 до 999");
    var obj = num_to_obj(number);
    if (obj == null) {
        console.log("Object is null");
    }
    else {
        console.log(obj);
    }
}