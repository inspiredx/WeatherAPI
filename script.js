fetch("https://api.openweathermap.org/data/2.5/weather?lat=59.90612&lon=29.77253&appid=34680e8710c0db2edaeeb860d9d332f7&lang=ru")
    .then(function (resp) {
        return resp.json()
    })
    .then(function (data) {
        console.log(data);
        document.querySelector('.p-name').textContent = data.name;
        document.querySelector('.temperature').textContent = Math.round(data.main.temp - 273) + '°C';
        document.querySelector('.disclaimer').textContent = data.weather[0].main;
        document.querySelector('.f-1').textContent = data.weather[0].description;
        document.querySelector('.f-2').textContent =  "Wind speed:" + data.wind.speed + " Mph";
    })
    .catch(function () {
        //errors
    })