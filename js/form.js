// Получаем элементы модального окна и кнопок
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const closeBtn = document.getElementsByClassName("close")[0];
const message = document.getElementById("but");

// Функция для открытия модального окна
function openModal(service) {
    modalTitle.textContent = `Вы выбрали: ${service}`; // Устанавливаем заголовок
    modal.style.display = "block"; // Показываем модальное окно
    
}

// Функция для закрытия модального окна
closeBtn.onclick = function() {
    modal.style.display = "none"; // Скрываем модальное окно
}

// Закрытие модального окна при клике вне его
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none"; // Скрываем модальное окно
    }
}

// Назначаем обработчики событий на кнопки
const buttons = document.querySelectorAll(".cardName");
buttons.forEach(button => {
    button.addEventListener("click", () => {
        const service = button.getAttribute("data-service"); // Получаем название услуги
        openModal(service); // Открываем модальное окно с заголовком
    });
});

function validation(form) {
    let result = true

    const allInputs =  form.querySelectorAll('input');

    for (const input of allInputs) {
        if(input.value == "") {
            result = false
        }
    }


    return result
}

document.getElementById('add-form').addEventListener('submit', function(event) {
    event.preventDefault()
    if(validation(this) == true) {
        alert("Форма успешно проверена")
    } else {
        alert("Ошибка валидации")
    }
})
