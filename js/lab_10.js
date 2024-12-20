let name, age;

age = prompt("Ваш возраст");

if(age>18){
    console.log("Вы совершеннолетний")
    alert("Вы совершеннолетний")
}else{
    console.log("Вы не совершеннолетний")
    alert("Вы не совершеннолетний")
}

for(let i = 1; i<11; i++){
    console.log(i);
}

let counter = 10;
while(counter > 0){
    console.log(counter);
    counter -= 1;
}

function printArr(arr){
    arr.join(', ')
}
//debugger
function oArr(arr){
    let narr = arr.filter(function (arr){ return arr.startsWith("О")})
    return narr;
}


const lectures = ['Основы HTML', 'Углубленное изучение HTML', 'Основы работы с CSS']; 
lectures.push(prompt('Введите новую тему лекции'));
printArr(lectures)

console.log('Лекции: ')

lectures.forEach(item => console.log(item));

console.log('\nЛекции, начинающиеся с о: ' + oArr(lectures));


const practices = ['Работа с сетками и разметкой в HTML', 'Адаптивная верстка', 'Bootstrap'];
practices.push(prompt('Введите новую тему практики'));

console.log('Практики: ')
practices.forEach(item => console.log(item));

console.log('\nПрактики, начинающиеся с о: ' + oArr(practices));




