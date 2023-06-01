var numbers = document.querySelectorAll('.num');
var operators = document.querySelectorAll('.operator');
var screen = document.querySelector(".numbersScreen");
var numsArr = [];
var operatorsArr = [];


for (i = 0; i < numbers.length; i++){
    numbers[i].addEventListener('click', addScreen);
}

for (i = 0; i < operators.length; i++){
    operators[i].addEventListener('click', addNumbers);
}


function addNumbers(){
    var text = screen.innerText;
    if(text.length > 0)
    {
        numsArr.push(parseInt(text));

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


function addScreen(){
    var text = screen.innerText;
    if (text.length < 7){
        screen.append(this.innerHTML);
    }

}