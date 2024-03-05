var rounds = null;
var computer_value;
var human_value;
var current_round = 0;

const input_box = document.getElementById("input-box");
const ok_btn = document.getElementById("ok"); 

const human_ground = document.getElementById("human");
const computer_ground = document.getElementById("computer");

const round_holder = document.getElementById("round-num");

const start_btn = document.getElementById("start");

ok_btn.addEventListener("click", () => {
    rounds = Number(input_box.value);
});

function playRound() {
    for (let i = 0; i < rounds; i++) {

        human_value = Math.floor(Math.random() * 3);

        round_holder.innerHTML = i + 1;

        if (human_value === 0) {
            human_ground.innerHTML = "Rock";
        } else if (human_value === 1) {
            human_ground.innerHTML = "Paper";
        } else {
            human_ground.innerHTML = "Scissor";
        }

        //computer section
        var rand_num = Math.floor(Math.random() * 3);
        computer_value = rand_num;

        if (computer_value === 0) {
            computer_ground.innerHTML = "Rock";
        } else if (computer_value === 1) {
            computer_ground.innerHTML = "Paper";
        } else {
            computer_ground.innerHTML = "Scissor";
        }


    };
    
};



start_btn.addEventListener("click", () => {

    if (rounds === null) {
        alert("Enter the Rounds to start ...");
    } else {
        playRound();
    }    
});