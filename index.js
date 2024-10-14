/*let Kenya = document.querySelector("#Kenya");
let kenyaDate = document.querySelector("#date");
//let KenyaTime = document.querySelector("#time");
kenyaDate.innerHTML = moment().format("dddd MMMM Do YYYY");*/
 function updateTime() {
        let Kenya = document.querySelector("#Kenya");
        let kenyaDate = document.querySelector(".date");
        kenyaDate.innerHTML = moment().tz("Africa/Nairobi").format("dddd MMMM Do YYYY");
        let KenyaTime = document.querySelector(".time");
        let rightTime = moment().tz("Africa/Nairobi").format("h:mm:ss");
        let amPm = moment().tz("Africa/Nairobi").format("A");
        KenyaTime.innerHTML = `${rightTime} <small>${amPm}</small>`;


        //Chicago Time
        let Chicago = document.querySelector("#Chicago");
        let chicagoDate = document.querySelector("#Chicagodate");
        chicagoDate.innerHTML = moment().tz("America/Chicago").format("dddd MMMM Do YYYY");
        let chicagoTime = document.querySelector("#Chicagotime");
        let rightChicagoTime = moment().tz("America/Chicago").format("h:mm:ss");
        let Pmam = moment().tz("America/Chicago").format("A");
        chicagoTime.innerHTML = `${rightChicagoTime} <small>${Pmam}</small>`;
    }
     document.addEventListener("DOMContentLoaded",updateTime);
     setInterval(updateTime, 1000);

     