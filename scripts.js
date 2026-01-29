let para = document.querySelector("p")
let anses = document.querySelector("select")
let btn = document.querySelector(".button1")
let mistake = document.querySelector(".warning")
let o1 = document.querySelector(".fs")
let o2 = document.querySelector(".sn")
let o3 = document.querySelector(".td")
let o4 = document.querySelector(".ft")
let anss = document.querySelector("ol")

var answered = 0

para.textContent = "Как создать объект даты?"
o1.textContent = "datetime.date(day, week, month)"
o2.textContent = "Это невозможно"
o3.textContent = "datetime.day(year, month, day)"
o4.textContent = "datetime.date(year, month, day)"

function ans(){
    let chosen = anses.value
    if (chosen == "n"){
        mistake.textContent = "Выберите ответ"
        return
    }
    else if (answered == 0 & chosen == 4){
        mistake.textContent = "Верный ответ"
        ++answered
        para.textContent = "Как складывать даты?"
        o1.textContent = "к объекту datetime.date добавить datetime.timedelta(years=y, hours=h, и т.д.)"
        o2.textContent = "Никак"
        o3.textContent = "Сложить два объекта datetime.date"
        o4.textContent = "К объекту datetime.date добавить int"
    }
    else if (answered == 1 & chosen == 1){
        mistake.textContent = "Верный ответ"
        ++answered
        para.textContent = "Как создать объект времени?"
        o1.textContent = "datetime.time(second, minute, hour)"
        o2.textContent = "datetime.time(hour, minute, second)"
        o3.textContent = "Никак"
        o4.textContent = "datetime.times(hour, minute, second, 'am'или'pm')"
    }
    else if (answered == 2 & chosen == 2){
        mistake.textContent = "Верный ответ"
        ++answered
        para.textContent = ("Вопросов больше нет!")
        anss.remove()
    }
    else if (answered != 3){
        mistake.textContent = "Вы ответили неверно, попробуйте ещё раз"
    }
}

btn.addEventListener("click", ans);