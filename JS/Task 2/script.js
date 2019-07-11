function buttonClick() {
    var x1 = parseInt(document.getElementById('x1').value);
    var x2 = parseInt(document.getElementById('x2').value);

    if (document.getElementById('x1').value === '' || document.getElementById('x2').value === '') {
        alert("Поля х1 и х2 должны быть заполнены.");
    } else if (Number.isNaN(x1) || Number.isNaN(x2)) {
        alert("В поля х1 и х2 должны быть введены числовые значения.");
    } else {
        if (document.getElementById("resDiv")) {
            document.getElementById("resDiv").remove();
        }
        var resultDiv = document.createElement('div');
        resultDiv.id = "resDiv";
        document.body.appendChild(resultDiv);
        
        var rad = document.getElementsByName('operation');
        if (rad[0].checked) {
            resultDiv.appendChild(document.createTextNode("X1 + X2 = " + (x1 + x2)));
        } else if (rad[1].checked) {
            var sum = 0;
            if (x1 < x2) {
                for (var i = x1; i <= x2; i++)
                    sum += i;
            } else {
                for (var i = x2; i <= x1; i++)
                    sum += i;
            }
            resultDiv.appendChild(document.createTextNode("From X1 to X2 = " + sum));
        } else if (rad[2].checked) {
            var prod = 1;
            if (x1 < x2) {
                for (var i = x1; i <= x2; i++)
                    prod *= i;
            } else {
                for (var i = x2; i <= x1; i++)
                    prod *= i;
            }
            resultDiv.appendChild(document.createTextNode("Product numbers from X1 to X2 = " + prod));
        } else if (rad[3].checked) {
            if (x1 > x2)
                [x1, x2] = [x2, x1];
            var i = x1, arr = [];
            if (x1 < 2)
                i = 2;
            for (var j = i, i = 0; j <= x2; j++) {
                if (isSimple(j))
                    arr[i++] = j;
            }
            resultDiv.appendChild(document.createTextNode("Prime numbers in [X1 ; X2] = " + arr));
        }
    }
}

function isSimple(number) {
    for (var i = 2; i < number; i++) {
        if (number % i == 0)
            return false;
    }
    return true;
}

function buttonClick_2_4() {
    document.getElementById('x1').value = '';
    document.getElementById('x2').value = '';
}