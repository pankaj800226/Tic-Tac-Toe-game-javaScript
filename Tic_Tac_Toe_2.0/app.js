let boxes = document.querySelectorAll('.box')
let resetGame = document.getElementById('reset-btn')
let newGames = document.getElementById('new-btn');
let messageContainer = document.querySelector('.msg-container')
let msg = document.getElementById('msg')
// console.log(messageContainer);
let turn0 = true;

let winnerPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
]

boxes.forEach((box) => {
    box.addEventListener('click', () => {
        console.log('was');

        if (turn0) {
            box.innerHTML = "x"
            box.style.backgroundColor = "black";
            box.style.color = "whitesmoke"
            turn0 = false;
        }
        else {
            box.innerHTML = "o"
            box.style.backgroundColor = "blueviolet"
            box.style.color = "whitesmoke"
            turn0 = true;

        }
        box.disabled = true // disabled to x an o bubble click change (x and o)
        checkWinner();

    })
})

const disableBoxes = () => {
    // this logic work [if game won to disabled boxes]
    for (let box of boxes) {
        box.disabled = true;
    }
}

const enableBtn = () => {
    for (let box of boxes) {
        box.disabled = false;
        //dobara se start hoga
        box.style.backgroundColor = '';
        box.innerHTML = ""
    }
}

const winnerMsg = (winner) => {
    msg.innerText = `Congratulations Winner is a ${winner}`;
    messageContainer.classList.remove("hide");
    disableBoxes();

}
const resetGames = () => {
    turn0 = true
    enableBtn();
    messageContainer.classList.add("hide");
    box.style.backgroundColor = '';

}

const checkWinner = () => {
    for (let pattern of winnerPattern) {
        let pos1value = boxes[pattern[0]].innerText;
        let pos2value = boxes[pattern[1]].innerText;
        let pos3value = boxes[pattern[2]].innerText;
        //check input box empty and not empty logic aply
        if (pos1value !== "" && pos2value !== "" && pos3value !== "") {
            if (pos1value == pos2value && pos2value == pos3value) {
                // check match and ot match logic aply
                winnerMsg(pos1value)
                console.log('winner', pos1value)
            }
        }
    }
}

resetGame.addEventListener('click', resetGames)
newGames.addEventListener('click', resetGames)



//************************************************************* */
// console.log(pattern[0], pattern[1], pattern[2]);
// ckeck  time
// console.log(
// boxes[pattern[0]].innerText,
// boxes[pattern[1]].innerText,
// boxes[pattern[2]].innerText,
// console.log('winner', pos1value);


