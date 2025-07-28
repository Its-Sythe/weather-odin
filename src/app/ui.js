import { weather } from './logic.js'

export const ui = (function() {
    function render() {
        handleClicks()
    }

    function handleClicks() {
        document.querySelector('#submit-location').addEventListener("click", (e) => {
            e.preventDefault();
            let result = validateForm()
             displayWeatherData(weather.getWeatherData(result))
        })
    }

    function validateForm() {
        const form = document.forms["weather-form"];
        const location = form["location"]
        
        if (location.checkValidity() == false) {
            location.setCustomValidity("Please provide a location") 
            location.reportValidity()
            return;
        } else {
            location.setCustomValidity("")
            return location.value
        }
    }

    async function displayWeatherData(data) {
        data = await data
        if (data != "Error") {
            const weather = document.querySelector(".weather")
            weather.textContent = "Weather: " + data[0]
            const currentTemp = document.querySelector('.current-temp')
            currentTemp.textContent = "Temp: " + data[1] + " °F"
            const currentDate = document.querySelector(".date")
            currentDate.textContent = "Date: " + data[2]
            const currentLocation = document.querySelector(".weather-location")
            currentLocation.textContent = "Location: " + data[3]

            document.forms["weather-form"].reset()
        } else {
            alert("Unknown location")
        }
    }

    return {
        render
    }
})()
