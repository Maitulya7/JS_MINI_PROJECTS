let cards = []
let sum = 0
let hasBlackjack = false
let isAlive = false

let messageEl = document.querySelector("#message-el")

let sumEl = document.querySelector("#sum-el")

let cardsEl = document.querySelector("#cards-el")


let player = {
    name: "Maitulya: ",
    chip: "1000"
}

let playerEl = document.querySelector("#player-el")

playerEl.textContent = player.name + " $ " + player.chip


console.log(cards)

function getRandomCard() {

    let randomNumber = Math.floor(Math.random() * 13) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }

}

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    hasBlackjack = false
    renderGame()
}

function renderGame() {

    cardsEl.textContent = "Cards: "

    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += " " + cards[i] + " , "
    }

    sumEl.textContent = "Sum: " + sum

    if (sum <= 20) {
        message = "Do you want to continue ?"
    }
    else if (sum === 21) {
        message = "You got BlackJack!"
        hasBlackjack = true
        player.chip += 100
        playerEl.textContent = player.name + " $ " + player.chip



    } else {
        message = "You lose the game"
        isAlive = false
        player.chip -= 10
        playerEl.textContent = player.name + " $  " + player.chip

    }

    messageEl.textContent = message
}


function newCard() {

    if (isAlive === true && hasBlackjack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        console.log(cards)
        renderGame()

    }

}


let hands = ["rock" , "paper" , "scissor"]

function randomHands (){
    let randomIndex =  Math.floor(Math.random() * 3 )  + 1  
    return randomIndex

}

if(randomHands() === 1 ){
    console.log("rock")
}else if (randomHands() === 2){
    console.log("paper")
}else{
    console.log("scissor")
}


