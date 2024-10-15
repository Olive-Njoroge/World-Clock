
 function updateTime() {
       
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

        //Asia/Bangkok
        let Bangkok = document.querySelector("#Bangkok");
        let BangkokDate = document.querySelector("#Bangkokdate");
        BangkokDate.innerHTML = moment().tz("Asia/Bangkok").format("dddd MMMM Do YYYY");
        let BangkokTime = document.querySelector("#Bangkoktime");
        let rightBangkokTime = moment().tz("Asia/Bangkok").format("h:mm:ss");
        let PmAm = moment().tz("Asia/Bangkok").format("A");
        BangkokTime.innerHTML = `${rightBangkokTime} <small>${PmAm}</small>`;
    }

    document.addEventListener("DOMContentLoaded",updateTime);
     setInterval(updateTime, 1000);
     


     function updateCity(event){
     let cityTimeZone = event.target.value;
     if(cityTimeZone === "current"){
        cityTimeZone = moment.tz.guess();
     }
     let cityName = cityTimeZone.split("/")[1];
     let cityDate = moment().tz(cityTimeZone).format("dddd MMMM Do YYYY");
     let cityTime = moment().tz(cityTimeZone).format("h:mm:ss");
     let mPam = moment().tz("America/Chicago").format("A");

     
     let cities = document.querySelector("#cities");
     cities.innerHTML = `<div class="city">
        <div>
        <h2>${cityName}</h2>
        <p class="date">${cityDate}</p>
        </div>
        <div class="selectTime" >${cityTime}<small>${mPam}</small></div>
    </div>`
     
     }

     
     document.addEventListener("change", updateCity);
     

    