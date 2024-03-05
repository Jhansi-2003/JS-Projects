const number = document.getElementsByClassName("number")[0];

const increase = document.getElementsByClassName("increase")[0];

const decrease = document.getElementsByClassName("decrease")[0];

let value = Number(number.innerHTML);

increase.addEventListener("click", () => {
    value++;
    number.innerHTML = value;
});

decrease.addEventListener("click", () => {
    value--;
    number.innerHTML = value;
});