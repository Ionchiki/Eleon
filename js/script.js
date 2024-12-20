
//lab 12 ===========================================================================================
function showMessage(text){
    console.log(text)
}

function  changeBackgroundColor(color){
    let pageBG = document.querySelector("body")
    pageBG.style.backgroundColor = color
}

function toggleVisibility(selector){
    let elem = document.querySelector(selector)
    elem.style.display = "none"
    //elem.style.backgroundColor = "red"
}

function currentDate(){
    let date = new Date()
    console.log("Текущее время " + date)
}
function resetBGcolor(){
    let item = document.querySelector("body")
    item.style.backgroundColor = "white"
}

function updateH1WithUTMTerm() {
    // Получаем текущий URL
    const urlParams = new URLSearchParams(window.location.search);

    // Извлекаем значение параметра utm_term  ( "?utm_term=что-то")
    const utmTerm = urlParams.get('utm_term');

    // Находим элемент H1 на странице
    const h1Element = document.querySelector('h1');

    // Если utm_term присутствует в URL, меняем текст H1
    if (utmTerm) {
        h1Element.textContent = utmTerm;
    } 

}

//debugger
showMessage("Скрипт загружен!")

currentDate()

document.addEventListener('DOMContentLoaded', function () {
    
  
    const color = prompt("Введите цвет")
    changeBackgroundColor(color)
    //resetBGcolor()

    toggleVisibility(".content")
})
updateH1WithUTMTerm()
//=================================================================================================

//lab 13 ===========================================================================================

const line = document.getElementById("clickLine")

const semester = document.getElementById("smstr")

const picture = document.getElementById("image")

line.addEventListener('click', () =>{
    line.textContent = "Вы кликнули на заголовок\n так держать!"
    line.style.fontFamily = "oswald"
    line.style.fontWeight = "bold"
    line.style.fontSize = "30px"
})

const list = ["Базовое бэкенд-приложение",
     "HTTP-запросы",
     "JSON и работа с ним",
     "HTTP-ответы",
     "Проектирование API",
     "Роутинг и его настройка",
     "NoSQL базы данных",
     "Обеспечение авторизации и доступа пользователей",
    "Работа сторонних сервисов уведомления и авторизации",
     "Основы ReactJS"]

// semester.addEventListener('click', () => {
//     if(semester.textContent == "1 семестер"){
//         semester.textContent = "2 семестер"
        
//     }else{
//         semester.textContent = "1 семестер"
        
//     }
//     semester.style.fontFamily = "victorMono"
//     const tableRows = document.getElementsByTagName('td');

//     for (let curr = 0; curr < tableRows.length; curr++) {
//         if(tableRows[curr].textContent != ""){
//             tableRows[curr].textContent = list[curr]

//         }
//     }
    
// })

semester.addEventListener('click', () => {
    if(semester.textContent == "1 семестер"){
        semester.textContent = "2 семестер"
                
    }else{
        semester.textContent = "1 семестер"
                
    }
            semester.style.fontFamily = "victorMono"
    // Получаем все строки таблицы
    const rows = document.querySelectorAll('table tbody tr');

    // Проходим по всем строкам таблицы и меняем текст в ячейках
    rows.forEach((row, index) => {
        const cells = row.querySelectorAll('td');
        if (cells.length > 0 && list[index]) {
            cells[0].textContent = list[index];
        }
    });
});

picture.addEventListener('click', () => {
    
    picture.setAttribute('src', "../imgs/lynch-movie-influence.jpg")
})

picture.addEventListener('dblclick', () =>{
    alert("слишком много кликов")
})






