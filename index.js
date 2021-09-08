let buffer = "0";
let previousOperator = null;
let screen= document.querySelector('.result')
let buttons = document.querySelectorAll('button');

for (items of buttons) {
    items.addEventListener("click", function (event) {
        buttonClick(event.target.innerText);    
    });
}


function buttonClick(value){
    if(value === '÷'){
        previousOperator = '/';
        handleInput(previousOperator);
    } else if(value === '˟'){
        previousOperator = '*';
        handleInput(previousOperator);
    } else if(value === '-'){
        previousOperator = '-';
        handleInput(previousOperator);
    } else if(value === '+'){
        previousOperator = '+';
        handleInput(previousOperator);
    } else if(value === 'C'){
        buffer = "0";
    } else if(value === '˿'){
        switch (buffer.length) {
            case 1:
                buffer = "0";
                break;
        
            default:
                buffer = buffer.substring(0, buffer.length - 1);
                break;
        }
    } else if(value === '='){
        handleOutput();
        return true;
    } else{
        handleInput(value);
    }
    rerender()
}

function handleOutput() {
    let result = eval(buffer);
    console.log(result);
    buffer = result;
    screen.innerText = result;
}
function handleInput(value) {
    if (buffer === "0") {
        buffer = value;
    } else {
        buffer += value;
    }
    
}

function rerender() {
    screen.innerText = buffer;
}