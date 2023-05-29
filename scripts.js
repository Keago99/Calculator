var numbers = document.querySelectorAll('.num');
var screen = document.querySelector(".numbersScreen");

for (i = 0; i < numbers.length; i++){
    numbers[i].addEventListener('click', addScreen);
}

function addScreen(){
    var text = screen.innerText;
    if (text.length < 5){
        screen.append(this.innerHTML);
    }

}