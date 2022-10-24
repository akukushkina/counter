const counter = document.querySelector('.counter');
const minus = document.querySelector('.minus');
const reset = document.querySelector('.reset');
const plus = document.querySelector('.plus');

// counter.textContent = 0;

minus.addEventListener('click', function (){
    counter.textContent--;
})

reset.addEventListener('click', function(){
    counter.textContent = 0;
})

plus.addEventListener('click', function(){
    counter.textContent++;
})



