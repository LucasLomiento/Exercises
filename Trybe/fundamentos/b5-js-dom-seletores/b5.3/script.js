

function createDaysOfTheWeek() {

  const weekDays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  const weekDaysList = document.querySelector(".week-days");

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement("li");
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }

}

createDaysOfTheWeek();

// Escreva seu código abaixo.

//Coloca todos os dias do mês no calendário
function createDecemeberDays() {
  let decemberDaysList = [
    29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
    20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  ];
  let decemberHolidays = [24, 25, 31];
  let decemberFridays = [4, 11, 18, 25];
  const decemberDaysUl = document.querySelector("#days");

  for (let day of decemberDaysList) {
    const decemberDayLi = document.createElement("li");
    decemberDayLi.innerHTML = day;
    decemberDayLi.classList.add("day");

    decemberDaysUl.appendChild(decemberDayLi);

    decemberHolidays.forEach((value) => {
      if (value == day) decemberDayLi.classList.add("holiday");
    });

    decemberFridays.forEach((value) => {
      if (value == day) decemberDayLi.classList.add("friday");
    });
  }
}

createDecemeberDays();

//Criando o botão Feriados
const btnHoliday = document.createElement("button");
btnHoliday.textContent = "Feriados";
btnHoliday.classList.add("btn-holiday");
document.querySelector(".buttons-container").appendChild(btnHoliday);

//Implementando a função do botão de colorir os feriados
let btnHolidayChanged = false;
btnHoliday.addEventListener("click", function () {
  document.querySelectorAll(".holiday").forEach((value) => {
    if (btnHolidayChanged ===  true) {
      value.style.backgroundColor = "rgb(238,238,238)";
      value.style.color = "#777";
    } else {
      value.style.backgroundColor = "green";
      value.style.color = "whitesmoke";
    } 
  });

  btnHolidayChanged = (btnHolidayChanged == false) ? true : false;
});

//Criando o botão sexta-feira
const btnFriday = document.createElement("button");
btnFriday.textContent = "Sexta-Feira";
btnFriday.classList.add("btn-friday");
document.querySelector(".buttons-container").appendChild(btnFriday);

//Implementando a função do botão de colorir as sextas-feiras
let btnFridayChanged = false;
btnFriday.addEventListener("click", function () {
    document.querySelectorAll(".friday").forEach((value) => {
      if (btnFridayChanged ===  true) {
        value.innerHTML = parseInt(value.previousElementSibling.innerHTML) + 1;
      } else {
        value.innerHTML = "SEXTOU";
      } 
    });
  
    btnFridayChanged = (btnFridayChanged == false) ? true : false;
});

//Implementando a função de ZOOM ao colocar o mouse sobre o dia
const dayBox = document.querySelectorAll(".day");
dayBox.forEach(value => {
    const defaultDayFontSize = value.style.fontSize;
    value.addEventListener("mouseover", function () {
        value.style.fontSize = "28px";
    
    });

    value.addEventListener("mouseleave", function () {
        value.style.fontSize = defaultDayFontSize;
    
    });

})

