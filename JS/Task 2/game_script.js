// JS вижу впервые, пожалуйста не бейте за плохой код

var picArray = [0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7];  // Массив индексов изображений
mixArray(picArray);

var winArray = [];  // Будет содержать индексы плиток, которые уже отгадали

function mixArray(array) {  // Перемешать массив карт
    var j;
    for (var i = 0; i < array.length; i++) {
        j = Math.floor(Math.random() * (array.length - 1));
        [array[i], array[j] ] = [array[j], array[i]];
    }
}

var clickTick = 0;  // Первая карта открыта - равно 1, вторая открыта - уменьшается до нуля
var prevNum = -1;  // Индекс первой открытой карты
var flag = false;  // Замок, не позволяющий открывать карты, пока не закроются открытые

function squareClick(number) {  // Обрабатывает нажатие
    // Если открываем уже открытую карту, либо ещё не закрылись открытые, либо карта уже отгадана
    if (number == prevNum || flag == true || winArray.indexOf(number) != -1) {
        return;
    }
    if (clickTick == 0) {  // Открываем первую карту
        clickTick++;
        openPic(number);
        prevNum = number;
    } else {  // Открываем вторую карту
        flag = true;
        clickTick--;
        openPic(number);
        
        if (picArray[number] != picArray[prevNum]) {  // Не отгадали
            setTimeout(closePictures, 1000, number, prevNum);
        } else {  // Отгадали
            winArray.push(number);
            winArray.push(prevNum);
        }
        prevNum = -1;
    }
}

function closePictures(number, prevNum) {
    closePic(number);
    closePic(prevNum);
    flag = false;
}

function openPic(number) {
    document.getElementById('sq' + number).style.backgroundImage = "url('images/" + picArray[number] + ".png')";
    document.getElementById('sq' + number).style.backgroundSize = "100% 100%";
}

function closePic(number) {
    document.getElementById('sq' + number).style.backgroundImage = "none";
}