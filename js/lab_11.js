const title = document.getElementsByClassName("title")
title[0].textContent = "Добро пожаловать на наш сайт!"

const elem1 = document.getElementById("frontend")
const elem2 = document.getElementById("backend")

elem1.style.color = "red"
elem2.style.color = "red"

const fpar = document.getElementById("firstParagraph")
fpar.textContent =  "Это новый текст параграфа."

const videos = document.getElementsByClassName("vidWrapper")
for(let i = 0; i<videos.length; i++){
    videos[i].style.display = "none"
}
