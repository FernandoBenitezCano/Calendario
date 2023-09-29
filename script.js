let mainElement=document.getElementsByTagName("main");
const monthNames=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
let monthCounter=8;
let startYear=2023
let currentDate= new Date(`${startYear}-${monthCounter}-1`);
console.log(currentDate);


 
function addMonth(){
    let monthElement=document.createElement("div");
    monthElement.classList.toggle("month");

    let monthName=document.createElement("h4");
    monthName.innerText=monthNames[monthCounter];

    let daysElement=document.createElement("div");
    daysElement.classList.toggle("days");

    daysElement= `<div class="day">L</div>
                  <div class="day">M</div>
                  <div class="day">X</div>
                  <div class="day">J</div>
                  <div class="day">V</div>
                  <div class="day">S</div>
                  <div class="day">D</div>`

    //let numDaysMonth = ;


}