let square = document.getElementById('square'),
    clickMe = document.getElementById('click');

function clickBtn() {
    let button = this;
    square.style.backgroundColor = '#000000';
    button.setAttribute('disabled', 'true');
    setTimeout(clearAll, 2000, button);
}

function clearAll() {
    let square = document.getElementById('square');
    square.style.backgroundColor = 'transparent';
    button.removeAttribute('disabled');
}

clickMe.onclick = clickBtn;