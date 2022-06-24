const firstNumber = Number (prompt("Enter first number"))

const secondNumber = Number (prompt("Enter first number"))

const operator = prompt("enter operator (+,-,/,*)")

let answer;
if (operator == '+'){
answer = firstNumber + secondNumber;
} else if (operator == '-'){
answer = firstNumber - secondNumber
}else if (operator == '*'){
    answer = firstNumber * secondNumber
    }else if (operator == '/'){
        answer = firstNumber / secondNumber
        }    

 alert(answer)       