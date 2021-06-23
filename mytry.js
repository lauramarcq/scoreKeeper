const player1 = {
    score: 0,
    button: document.querySelector('#p1Button'),
    display: document.querySelector('#p1num')
}

const player2 = {
    score: 0,
    button: document.querySelector('#p2Button'),
    display: document.querySelector('#p2num')
}


const resetButton = document.querySelector('#reset');



let winScore = 11;

let isGameOver = false;

function updateScores(player, opponent) {
    if (!isGameOver) {
        player.score += 1;
        if (player.score === winScore) {
            isGameOver = true;
            player.display.classList.add('has-text-success');
            opponent.display.classList.add('has-text-danger');
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
        player.display.textContent = player.score;
    }
}

player1.button.addEventListener('click', function () {
    updateScores(player1, player2);
})

player2.button.addEventListener('click', function () {
    updateScores(player2, player1);
})

const playtoSelect = document.querySelector('#playto');
playtoSelect.addEventListener('click', function () {
    const rbs = document.querySelectorAll('input[name="answer"]');
    let selectedValue;
    for (const rb of rbs) {
        if (rb.checked) {
            selectedValue = rb.value;
            break;
        }
    }
    winScore = parseInt(selectedValue);
    reset();
})


resetButton.addEventListener('click', reset);

function reset() {
    isGameOver = false;
    for (let p of [player1, player2]) {
        p.score = 0;
        p.display.textContent = 0;
        p.display.classList.remove('has-text-success', 'has-text-danger');
        p.button.disabled = false;
    }
}
