let square = document.getElementById('square'),
    clickBlack = document.getElementById('clickBlack');
    clickWhite = document.getElementById('clickWhite');

function black() {
    let button = this;
    square.style.backgroundColor = '#000000';
}

function white() {
    let button = this;
    square.style.backgroundColor = '#ffffff';
}

clickBlack.onclick = black;
clickWhite.onclick = white;