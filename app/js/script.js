
const key = "ba425ff854a3ee6bfae7598e816616da"

function updateInfo(data){
    document.querySelector('.title-city').innerHTML = 'Tempo em ' + data.name
    document.querySelector('.degrees').innerHTML = Math.floor(data.main.temp) + "°C"
    document.querySelector('.img-forecast').src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`
    document.querySelector('.text-forecast').innerHTML = data.weather[0].description
    document.querySelector('.humidity').innerHTML = `Umidade = ${data.main.humidity}%`

}

async function searchCity(city){
    let data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`).then(response => response.json())

    updateInfo(data)
    console.log(data)
}   


function click_btn() {
    let city = document.querySelector('.input-city').value

    searchCity(city)
}