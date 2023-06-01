var numbers = document.querySelectorAll('.num');
var operators = document.querySelectorAll('.operator');
var screen = document.querySelector(".numbersScreen");
var equalsButton = document.querySelector("#equals");
var clear = document.querySelector("#clear");
var numsArr = [];
var operatorsArr = [];
var answer = "empty";
var answerOnscreen = false;



for (i = 0; i < numbers.length; i++){
    numbers[i].addEventListener('click', addScreen);
}

for (i = 0; i < operators.length; i++){
    operators[i].addEventListener('click', addNumbers);
}

equalsButton.addEventListener('click', equalsOpp);


function addNumbers(){
    var text = screen.innerText;
    if(text.length > 0)
    {
        if (answerOnscreen == false){
            numsArr.push(parseInt(text));
        }
        
        answerOnscreen = false;

        switch (this.id){
            case "plus":
                operatorsArr.push("plus");
                console.log("added plus to operatorsArr");
                text = null;
                screen.innerText = "";
                break;
    
            case "minus":
                operatorsArr.push("minus");
                console.log("added minus to operatorsArr");
                text = null;
                screen.innerText = "";
                break;
    
            case "multiply":
                operatorsArr.push("multiply");
                console.log("added multiply to operatorsArr");
                text = null;
                screen.innerText = "";
                break;
    
            case "divide":
                operatorsArr.push("divide");
                console.log("added divide to operatorsArr");
                text = null;
                screen.innerText = "";
                break;
        }
    }
}

function equalsOpp(){

    if (numsArr.length < 1){
        return;
    }
    
    numsArr.push(parseInt(screen.innerText));
    

    for (let i = 0; i < operatorsArr.length; i++){
        switch(operatorsArr[i]){

            case "plus":
               answer = numsArr[0] + numsArr[1];
               numsArr.shift();
               numsArr.shift();
               numsArr.unshift(answer);
               break;
               
            case "minus":
                answer = numsArr[0] - numsArr[1];
                numsArr.shift();
                numsArr.shift();
                break;

            case "divide":
                answer = numsArr[0] / numsArr[1];
                numsArr.shift();
                numsArr.shift();
                numsArr.unshift(answer);
                break;

            case "multiply":
                answer = numsArr[0] * numsArr[1];
                numsArr.shift();
                numsArr.shift();
                numsArr.unshift(answer);
                break;
        }
        
    }

    operatorsArr.length = 0;
    numsArr.length = 1;

    screen.innerText = parseInt(answer);
    answerOnscreen = true;
}

function addScreen(){
    var text = screen.innerText;
    if (text.length < 7){
        screen.append(this.innerHTML);
    }

}

function clearButton(){
    screen.innerText = "";
    numsArr.length = 0;
    operatorsArr.length = 0; 
}