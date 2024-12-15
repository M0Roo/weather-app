let row = document.getElementById('row');
let searchInp = document.getElementById('searchInp');
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
];


function getWeather() {
    var lat
    var lon
    navigator.geolocation.getCurrentPosition(
        (position) => {
            const latitude = position.coords.latitude;
            lat = latitude
            const longitude = position.coords.longitude;
            lon = longitude

    return new Promise(function () {
        let html = new XMLHttpRequest()
        html.open("GET", `http://api.weatherapi.com/v1/forecast.json?key=86adbdbab8e546f6880194929241312&q=${lat},${lon}&days=3&aqi=no&alerts=yes`)
        html.send()
        html.addEventListener('load', function () {
            var obj = JSON.parse(html.response)
            console.log(obj);
            
        
            const date1 = new Date(obj.forecast.forecastday[0].date);
            const date2 = new Date(obj.forecast.forecastday[1].date);
            const date3 = new Date(obj.forecast.forecastday[2].date);

            row.innerHTML = `<div class="card-group">

                <div class="card today ">

                    <div class="top d-flex justify-content-between">
                        <span>${days[date1.getDay()]}</span>
                        <span>${date1.getDate()} ${months[date1.getMonth()]} </span>
                    </div>
                    <div class="body">
                        <h5 class="py-2">${obj.location.name}</h5>
                        <h5 class="py-2 fw-light text-primary">${obj.location.region}</h5>

                        <h2 class="py-3">${obj.current.temp_c} <span class="fs-4">C</span></h2>
                        <img class="d-block p-1 "src="${obj.current.condition.icon}"></img>
                        <span class="text-info">${obj.current.condition.text}</span>
                        <div class="d-flex justify-content-start align-items-center p-3">
                            <div>
                                <img src="images/icon-umberella@2x.png" class="w-25" alt="umbrella">
                                <span>20%</span>
                            </div>
                            <div>
                                <img src="images/icon-wind@2x.png" alt="wind" class="w-25">
                                <span> ${obj.forecast.forecastday[0].day.maxwind_kph} Km/h</span>
                            </div>
                            <div>
                                <img src="images/icon-compass@2x.png" alt="compass" class="w-25">
                                <span>east</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="card tomorrow">


                    <div class="text-center top">
                        <span>${days[date2.getDay()]}</span>
                    </div>

                    <div class="body d-flex flex-column align-items-center justify-content-center">

                        <img class="d-block py-5" src='${obj.forecast.forecastday[1].day.condition.icon}'></img>

                        <h3 class="py-3 fs-1">${obj.forecast.forecastday[1].day.maxtemp_c} <span class="fs-4">C</span></h3>
                        <span>${obj.forecast.forecastday[1].day.mintemp_c}</span>
                        <span class="py-5 text-info">${obj.forecast.forecastday[1].day.condition.text}</span>
                    </div>


                </div>

                <div class="card today">



                    <div class="text-center top">
                        <span>${days[date3.getDay()]}</span>
                    </div>

                    <div class="body d-flex flex-column align-items-center justify-content-center">

                        <img class="d-block py-5" src='${obj.forecast.forecastday[2].day.condition.icon}'></img>

                        <h3 class="py-3 fs-1">${obj.forecast.forecastday[2].day.maxtemp_c} <span class="fs-4">C</span></h3>
                        <span>${obj.forecast.forecastday[2].day.mintemp_c}</span>
                        <span class="py-5 text-info">${obj.forecast.forecastday[2].day.condition.text}</span>
                    </div>


                </div>

            </div>
                `
        })
    })
})
} 

getWeather()

searchInp.addEventListener('input', function (e) {

    if (e.target.value.length >= 3) {

        let html = new XMLHttpRequest()
        html.open("GET", `http://api.weatherapi.com/v1/forecast.json?key=86adbdbab8e546f6880194929241312&q=${e.target.value}&days=3&aqi=no&alerts=yes`)
        html.send()
        html.addEventListener('readystatechange', function (){
            
        if( html.readyState == 4 && html.status == 200)
            {    
            var obj = JSON.parse(html.response)
            const date1 = new Date(obj.forecast.forecastday[0].date);
            const date2 = new Date(obj.forecast.forecastday[1].date);
            const date3 = new Date(obj.forecast.forecastday[2].date);

            row.innerHTML = `<div class="card-group">

                <div class="card today ">

                    <div class="top d-flex justify-content-between">
                        <span>${days[date1.getDay()]}</span>
                        <span>${date1.getDate()} ${months[date1.getMonth()]} </span>
                    </div>
                    <div class="body">
                        <h5 class="py-2">${obj.location.name}</h5>
                        <h5 class="py-2 fw-light text-primary">${obj.location.region}</h5>
                        <h2 class="py-3">${obj.current.temp_c} <span class="fs-4">C</span></h2>
                        <img class="d-block p-1 "src="${obj.current.condition.icon}"></img>
                        <span class="text-info">${obj.current.condition.text}</span>
                        <div class="d-flex justify-content-start align-items-center p-3">
                            <div>
                                <img src="images/icon-umberella@2x.png" class="w-25" alt="umbrella">
                                <span>20%</span>
                            </div>
                            <div>
                                <img src="images/icon-wind@2x.png" alt="wind" class="w-25">
                                <span> ${obj.forecast.forecastday[0].day.maxwind_kph} Km/h</span>
                            </div>
                            <div>
                                <img src="images/icon-compass@2x.png" alt="compass" class="w-25">
                                <span>east</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="card tomorrow">


                    <div class="text-center top">
                        <span>${days[date2.getDay()]}</span>
                    </div>

                    <div class="body d-flex flex-column align-items-center justify-content-center">

                        <img class="d-block py-5" src='${obj.forecast.forecastday[1].day.condition.icon}'></img>

                        <h3 class="py-3 fs-1">${obj.forecast.forecastday[1].day.maxtemp_c} <span class="fs-4">C</span></h3>
                        <span>${obj.forecast.forecastday[1].day.mintemp_c}</span>
                        <span class="py-5 text-info">${obj.forecast.forecastday[1].day.condition.text}</span>
                    </div>


                </div>

                <div class="card today">



                    <div class="text-center top">
                        <span>${days[date3.getDay()]}</span>
                    </div>

                    <div class="body d-flex flex-column align-items-center justify-content-center">

                        <img class="d-block py-5" src='${obj.forecast.forecastday[2].day.condition.icon}'></img>

                        <h3 class="py-3 fs-1">${obj.forecast.forecastday[2].day.maxtemp_c} <span class="fs-4">C</span></h3>
                        <span>${obj.forecast.forecastday[2].day.mintemp_c}</span>
                        <span class="py-5 text-info">${obj.forecast.forecastday[2].day.condition.text}</span>
                    </div>


                </div>

            </div>
                `
        }
        else if(html.status !=200){
            getWeather()
            
        }
    })
    }else{
        getWeather()
    }

})







