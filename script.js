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

function addElementInView(valueParam){
    let latterValue = view.innerText.slice(-1)
    let value = valueParam.innerText
    let operators = ["+", "-", "*", "/"];

    // verifica se é numero
    if(!isNaN(value)){
        view.innerText += value;
    
    // verifica se é operador
    } else if(operators.includes(value)){
        console.log("operadores");

        // trocar o includes por um metodo feito por mim
        if(operators.includes(latterValue)){
            console.log("operador antigo");
            removeNumberInView()
            view.innerText += value;
        } else {
            view.innerText += value;
        }
    } else {
        // ponto
        
        if (podeAdicionarPonto(view.innerHTML)) {
            console.log("Sim");
            view.innerText += value;
        } else {
            console.log("nao");
            
        }
    }

    
    
}

// funcao de verificar ponto entre os operadores
function podeAdicionarPonto(expressao) {
    if (expressao === "") return false; // não pode começar com ponto
  
    const ultimoChar = expressao.slice(-1);
    if (["+", "-", "*", "/"].includes(ultimoChar)) {
      return false; // não pode ponto logo após operador
    }
  
    const partes = expressao.split(/[\+\-\*\/]/);
    const ultimoNumero = partes[partes.length - 1];
  
    return !ultimoNumero.includes(".");
  }

function removeNumberInView(){
    let viewText = view.innerText
    view.innerHTML = viewText.slice(0, -1)
}

function clearAllView(){
    view.innerHTML = 0
}

function result(){
    let textInput = view.innerText
    let textOutput = eval(textInput)
    view.innerText = textOutput;
}

