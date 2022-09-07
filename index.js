var buttons  = document.getElementsByClassName("btn-col");
var display = document.getElementById("display");


var operand1 = 0;
var operand2 = 0;
var operator = null;

function isOperator(value){
    return value=='+' || value=='-' || value=='*' || value=='/';
}

for(var i=0; i<buttons.length; i++){
    buttons[i].addEventListener('click', function() {
        var value = this.getAttribute('data-value');
        var text = display.textContent.trim();

        if(isOperator(value)){
            operand1 = parseFloat(text);
            operator = value;
            display.textContent= '';

        } 
        else if(value == 'AC') {
            display.textContent= '';
            operand1=0;
            operand2=0;
            operator=null;
        }
        else if(value == '+/-') {
            operand1 = parseFloat(text);
            operand1 *= -1;
            display.textContent = operand1;
        }
        else if(value == '=') {
            operand2 = parseFloat(text);
            var result = eval(operand1 + '' + operator + '' + operand2);
            if(result){
                display.textContent= result; 
                operand1=0;
                operand2=0;
                operator=null;
            }
        }
        else if(value == '.'){
            if(!text.includes('.')){
                 display.textContent = text + '.';
            }

        }
        else if(value == '%'){
            operand1 = parseFloat(text);
            operand1 = operand1/100;
            display.textContent = operand1;
        }

        else{
            display.textContent += value;
        }

    });
}


// var count=0;
// var ele=document.getElementById('box');
// var para = document.getElementById('para');
// ele.addEventListener("click",function(){
// count++;
// para.innerText= count;
// });