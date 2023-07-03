const submitbtn = document.querySelector('#submitbtn');
const indexmain = document.querySelector('#indexmain');
const thankmain = document.querySelector('#thankmain');
const rating = document.getElementById('rating');
const n1 = document.querySelector('#n1');
const n2 = document.querySelector('#n2');
const n3 = document.querySelector('#n3');
const n4 = document.querySelector('#n4');
const n5 = document.querySelector('#n5');

submitbtn.addEventListener('click', function(event) {
    event.preventDefault();
    //corrigir erro
    if (n1 || n2 || n3|| n4 || n5) {
        indexmain.style.display = 'none';
        thankmain.style.display = 'flex';
    } else {
        thankmain.style.display = 'none';
        indexmain.style.display = 'flex';
    }
});

n1.addEventListener('click', function() {
    rating.innerHTML = '1'
})

n2.addEventListener('click', function() {
    rating.innerHTML = '2'
})

n3.addEventListener('click', function() {
    rating.innerHTML = '3'
})

n4.addEventListener('click', function() {
    rating.innerHTML = '4'
})

n5.addEventListener('click', function() {
    rating.innerHTML = '5'
})
