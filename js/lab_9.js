let name, age;
debugger
name = prompt("Ваше имя:");
age = prompt("Ваш возраст");

function getRand(min, max){
    return Math.floor(Math.random()*(max-min)) + min
}

console.log("Привет " + name + " ваш возраст " + age)
alert("Привет " + name + " ваш возраст " + age)
if(age>18){
    console.log("Вы совершеннолетний")
    alert("Вы совершеннолетний")
}else{
    console.log("Вы не совершеннолетний")
    alert("Вы не совершеннолетний")
}

let number = getRand(0, 10)
let guess = prompt("Угадайте число: ")
if(number == guess){
    alert("Поздравляем! Вы угадали число!")
}else if(guess>=5){
    alert("Ваше число больше или равно 5-ти")
}else if(guess<5){
    alert("Ваше число меньше 5-ти")
}


let par = "12345"
let guessPar = prompt("Введите пароль")
if(guessPar != ""){
    if(par == guessPar){
        alert("Доступ разрешен")
    }else{
        alert("Доступ запркщен")
    }
}else{
    alert("Пароль не введен")
}

let num1 = prompt("Введите 1 число: ")
let num2 = prompt("Введите 2 число: ")
let ch = prompt("Введите операцию: ")

switch(ch){
    case "+":
        alert(num1 + num2)
        break
    case "-":
        alert(num1 - num2)
        break
    case "*":
        alert(num1*num2)
        break
    case "/":
        alert(num1/num2)
        break
}