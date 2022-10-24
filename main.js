const counter = document.querySelector(".counter");
let count = 0;

// add eventListener to each button

// const minus = document.querySelector('.minus');
// const reset = document.querySelector('.reset');
// const plus = document.querySelector('.plus');

// minus.addEventListener('click', function (){
//     counter.textContent--;
// })

// reset.addEventListener('click', function(){
//     counter.textContent = 0;
// })

// plus.addEventListener('click', function(){
//     counter.textContent++;
// })

// add event listener to all buttons in one time

const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    let styles = e.currentTarget.classList;
    styles.contains("minus")
      ? count--
      : styles.contains("plus")
      ? count++
      : (count = 0);

    counter.textContent = count;

    count > 0
      ? (counter.style.color = "green")
      : count < 0
      ? (counter.style.color = "red")
      : (counter.style.color = "black");
  });
});
