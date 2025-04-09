const calculadora = document.getElementById("calculadora")
const view = document.getElementById("viewText")

function gerarCardsNumeros(){
    let cardContainer = document.querySelector(".numbers")

    for(let index = 9; index >= 0; index--){
        cardContainer.appendChild(createCard("div", "card", index, "onClick", "addElementInView(this)"))
    }

    cardContainer.appendChild(createCard("div", "card", ".", "onClick", "addElementInView(this)"))
    cardContainer.appendChild(createCard("div", "card", "%"))

}

function createCard(element, className, text, event, func){
    let card = document.createElement(element)
    card.className = className
    card.innerText = text
    card.setAttribute(event, func)
    return card;
}

gerarCardsNumeros()

function captureClickInCard(element) {
    addElementInView(element.innerText)
}

function addElementInView(value){
    view.innerText += value.innerText;
}

function removeNumberInView(){
    let viewText = view.innerText
    view.innerHTML = viewText.slice(0, -1)
}

function clearAllView(){
    view.innerHTML = ""
}

function result(){
    let textInput = view.innerText
    let textOutput = eval(textInput)
    view.innerText = textOutput;
}

