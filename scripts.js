var numbers = document.querySelectorAll('.num');
var operators = document.querySelectorAll('.operator');
var screen = document.querySelector(".numbersScreen");
var num1 = null;
var num2 = null;


for (i = 0; i < numbers.length; i++){
    numbers[i].addEventListener('click', addScreen);
}

for (i = 0; i < operators.length; i++){
    operators[i].addEventListener('click', addNumbers);
}

function addNumbers(){
    var text = screen.innerText;
    var numbo = parseInt(screen.innerText);
    if (num1 === null && text.length > 0){
        num1 = numbo;
        console.log("num1 added" + " " + num1);
    }
    else if (num2 === null && text.length > 0){
        num2 = numbo;
        console.log("num2 added" + " " + num2);
    }
    screen.innerHTML = "";
}


function addScreen(){
    var text = screen.innerText;
    if (text.length < 7){
        screen.append(this.innerHTML);
    }

}