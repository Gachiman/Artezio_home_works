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
        }
    }
}

function buttonClick_2_4() {
    document.getElementById('x1').value = '';
    document.getElementById('x2').value = '';
}