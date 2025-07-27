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

        document.querySelector(".temp-switch").addEventListener("click", (e) => {
            e.preventDefault();
            let tgt = e.target;
            
            if (e.target.className == "toggle-degrees") {

            } else if (e.target.className == "toggle-fahreheight") {

            }
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
            weather.textContent = data[0]
            const currentTemp = document.querySelector('.current-temp')
            currentTemp.textContent = data[1]
            const currentDate = document.querySelector(".date")
            currentDate.textContent = data[2]
            const currentLocation = document.querySelector(".weather-location")
            currentLocation.textContent = data[3]

            document.forms["weather-form"].reset()
        } else {
            alert("Unknown location")
        }
    }

    async function convertToCelcius() {

    }

    async function convertToFahren() {

    }

    return {
        render
    }
})()
