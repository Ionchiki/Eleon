function dataPrint(formData){
    let items = ["Имя:", "E-mail:", "Телефон:", "Дата: ", "Комментарий: "]
    let i = 0
    for(var key in formData){
        console.log(items[i] + formData[key])
        i++
    }
}

//const formData = document.getElementById("myform")

const form = document.getElementById("myform")
form.addEventListener("submit", function(event){
    event.preventDefault();
    let formData = {
        name: "12",
        email: "q",
        phone: "w", 
        date: "wq",
        comment: "qw"
    }
    formData.name = document.getElementById("username").value
    formData.email = document.getElementById("email").value
    formData.phone = document.getElementById("phone").value
    formData.date = document.getElementById("date").value
    formData.comment = document.getElementById("comment").value
    dataPrint(formData)
});