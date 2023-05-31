function diceRoll (){
    let radomNumber1 = Math.floor(Math.random() * 7);
    while (radomNumber1 === 0){
        radomNumber1 = Math.floor(Math.random() * 7);
    }
    return radomNumber1;
}

function diceCompare (){
    let num1 = diceRoll();
    const dice1 = document.querySelector('.img1');
    if (num1 === 1){
        dice1.setAttribute('src','images/dice1.png');
    } else if (num1 === 2){
        dice1.setAttribute('src','images/dice2.png');
    } else if (num1 === 3){
        dice1.setAttribute('src','images/dice3.png');
    } else if (num1 === 4){
        dice1.setAttribute('src','images/dice4.png');
    } else if (num1 === 5){
        dice1.setAttribute('src','images/dice5.png');
    } else if (num1 === 6){
        dice1.setAttribute('src','images/dice6.png');
    }

    let num2 = diceRoll();
    const dice2 = document.querySelector('.img2');
    if (num2 === 1){
        dice2.setAttribute('src','images/dice1.png');
    } else if (num2 === 2){
        dice2.setAttribute('src','images/dice2.png');
    } else if (num2 === 3){
        dice2.setAttribute('src','images/dice3.png');
    } else if (num2 === 4){
        dice2.setAttribute('src','images/dice4.png');
    } else if (num2 === 5){
        dice2.setAttribute('src','images/dice5.png');
    } else if (num2 === 6){
        dice2.setAttribute('src','images/dice6.png');
    }

    const title = document.querySelector('h1');
    if (num1 > num2){
        title.textContent = 'Player 1 Wins!'
    } else if (num2 > num1){
        title.textContent = 'Player 2 Wins!'
    } else if (num2 === num1){
        title.textContent = 'Draw!'
    }
}

diceCompare();