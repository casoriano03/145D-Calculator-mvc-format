

display()

var resultBox = document.getElementById("resultBox");


function display() {
    createResultBoxDiv()
    createDivs(7,'addCharacter','firstInRow')
    createDivs(8,'addCharacter')
    createDivs(9,'addCharacter')
    createDivs('÷','addCharacter')
    createDivs(4,'addCharacter','firstInRow')
    createDivs(5,'addCharacter')
    createDivs(6,'addCharacter')
    createDivs('x','addCharacter')
    createDivs(1,'addCharacter','firstInRow')
    createDivs(2,'addCharacter')
    createDivs(3,'addCharacter')
    createDivs('-','addCharacter')
    createDivs(0,'addCharacter','firstInRow')
    createSpecialDivs('C','clearResult')
    createSpecialDivs("=",'calculate')
    createDivs('+','addCharacter')
}

function createResultBoxDiv() {
    document.getElementById('app').innerHTML += /*html*/`
    <div id="resultBox" class="resultBox"></div>
    `;
}

function createDivs(numberOrSignPrint,onclickName, className) {
    document.getElementById('app').innerHTML += /*html*/`
    <div ${className?`class="firstInRow"`:''} onclick="${onclickName}('${numberOrSignPrint}')">${numberOrSignPrint}</div>
    `;   
}

function createSpecialDivs(signPrint, clickName) {
    document.getElementById('app').innerHTML += /*html*/`
    <div onclick="${clickName}()">${signPrint}</div>
    `;   
}

function addCharacter(x) {
  let print = resultBox.innerHTML += x;
  console.log(print)
}

function calculate() {
  var calculation = resultBox.innerHTML.replace("x", "*").replace("÷", "/");
  resultBox.innerHTML = eval(calculation);
}
function clearResult() {
  resultBox.innerHTML = "";
}
