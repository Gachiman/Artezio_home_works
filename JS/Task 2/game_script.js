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

var flagOpen = false;
var lastPic;
var clickTick = 0;
var prevNum;

function squareClick(number) {

    var currentPic = "url('images/" + picArray[number] + ".png')";
    if (clickTick == 0) {
        clickTick++;
        openPic(number, currentPic);
        lastPick = currentPic;
        prevNum = number;
    } else {
        clickTick--;
        openPic(number, currentPic);
        
        if (picArray[number] != picArray[prevNum]) {
            setTimeout(closePictures, 1000, number, prevNum);
        } else {
            alert('Yes');
        }
    }
}

function closePictures(number, prevNum) {
    closePic(number);
    closePic(prevNum);
}

function openPic(number, pic) {
    document.getElementById('sq' + number).style.backgroundImage = pic;
    document.getElementById('sq' + number).style.backgroundSize = "100% 100%";
}

function closePic(number) {
    document.getElementById('sq' + number).style.backgroundImage = "none";
}