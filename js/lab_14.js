// 1. Анимация увеличения заголовка h1 при наведении мыши
const interactiveHeader = document.getElementsByClassName('.tabSig')[0];
interactiveHeader.addEventListener('mouseover', () => {
    interactiveHeader.style.transform = 'scale(1.2)';
    interactiveHeader.style.transition = 'transform 0.3s ease-in-out';
});

interactiveHeader.addEventListener('mouseout', () => {
    interactiveHeader.style.transform = 'scale(1)';
});

// 2. Анимация изменения цвета фона для параграфа при клике
const colorParagraph = document.getElementById('colorParagraph');
colorParagraph.addEventListener('click', () => {
    colorParagraph.style.backgroundColor = colorParagraph.style.backgroundColor === 'yellow' ? '' : 'yellow';
});

// 3. Плавное появление таблицы с лекциями при нажатии на кнопку
const showLecturesButton = document.getElementById('showLecturesButton');
const lectureTable = document.getElementById('lectureTable');

showLecturesButton.addEventListener('click', () => {
    lectureTable.classList.toggle('show');
});

// 4. Анимация вращения фотографии студента при наведении мыши
const studentPhoto = document.getElementById('studentPhoto');
studentPhoto.addEventListener('mouseover', () => {
    studentPhoto.style.transform = 'rotate(360deg)';
    studentPhoto.style.transition = 'transform 0.5s ease-in-out';
});

studentPhoto.addEventListener('mouseout', () => {
    studentPhoto.style.transform = 'rotate(0deg)';
});

// 5. Обработчик события для формы с анимацией сообщения
const exampleForm = document.getElementById('exampleForm');
const formMessage = document.getElementById('formMessage');

exampleForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Предотвратить отправку формы
    formMessage.classList.add('show');
    formMessage.style.color = 'blue';
    setTimeout(() => {
        formMessage.style.color = 'green';
    }, 300);
});

