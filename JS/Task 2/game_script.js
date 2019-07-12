var picArray = [0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7];
mixArray(picArray);

var winArray = [];

function mixArray(array) {
    var j;
    for (var i = 0; i < array.length; i++) {
        j = Math.floor(Math.random() * (array.length - 1));
        [array[i], array[j] ] = [array[j], array[i]];
    }
}

var clickTick = 0;
var prevNum = -1;

function squareClick(number) {
    if (number == prevNum) {
        //closePic(number);
        return;
    }
    if (winArray.indexOf(number) != -1) {
        return;
    }
    if (clickTick == 0) {
        clickTick++;
        openPic(number);
        prevNum = number;
    } else {
        clickTick--;
        openPic(number);
        
        if (picArray[number] != picArray[prevNum]) {
            setTimeout(closePictures, 1000, number, prevNum);
        } else {
            alert('Yes');
            winArray.push(number);
            winArray.push(prevNum);
        }
        prevNum = -1;
    }
}

function closePictures(number, prevNum) {
    closePic(number);
    closePic(prevNum);
}

function openPic(number) {
    document.getElementById('sq' + number).style.backgroundImage = "url('images/" + picArray[number] + ".png')";
    document.getElementById('sq' + number).style.backgroundSize = "100% 100%";
}

function closePic(number) {
    document.getElementById('sq' + number).style.backgroundImage = "none";
}