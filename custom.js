let btn = document.querySelector('#submit');
var d = '';
var mon = '';
var year = '';
function Button(){
    d = document.getElementById('d').value;
    mon = document.getElementById('mon').value;
    year = document.getElementById('year').value;
    localStorage.setItem('d',d);
    localStorage.setItem('mon',mon);
    localStorage.setItem('year',year);
    location.href='custom_countdown.html';
}

btn.addEventListener('click',Button);
