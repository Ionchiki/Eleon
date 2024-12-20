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



