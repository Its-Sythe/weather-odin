export const ui = (function() {
    function render() {
        loadMainPageContents();
        createWeatherForm();
        handleClicks()
    }

    function handleClicks() {
        document.querySelector(".form-modal").addEventListener("click", (e) => {
            e.preventDefault();

            if (e.target.id == "submit-location") {
                let result = validateForm()
            
                if (result != undefined || result != null) {
                    //Todo
                }
            }
        })
    }

    function createWeatherForm() {
        const formModal = document.querySelector(".form-modal")
        const locationInput = document.createElement("input");
        locationInput.type = "text"
        locationInput.required = true
        locationInput.placeholder = "Enter city"
        locationInput.id = "form-location"
        locationInput.minLength = "3"
        locationInput.maxLength = "20"

        const submitLocation = document.createElement("button");
        submitLocation.id = "submit-location";
        submitLocation.textContent = "Get Weather"

        formModal.append(locationInput, submitLocation);
        return formModal
    }

    function loadMainPageContents() {
        const navigationContainer = document.querySelector(".nav");
        const mainContentContainer = document.querySelector(".main-content");
        
        const appTitle = document.createElement("p");
        appTitle.class = "app-title"
        appTitle.textContent = "Tenki"
        
        const switchToggleContainer = document.createElement("div")
        const degreeCelcius = document.createElement("li");
        degreeCelcius.id = "degree-temp"
        const fahrenheight = document.createElement("li");
        fahrenheight.id = "fahrenheight-temp"

        switchToggleContainer.append(degreeCelcius, fahrenheight)

        navigationContainer.append(appTitle, switchToggleContainer)


        const weatherIcon = document.createElement("div");
        weatherIcon.id = "weather-icon"

        const weatherName = document.createElement("p");
        weatherName.id = "weather-name"

        const currentTemp = document.createElement("p");
        currentTemp.id = "current-temp"

        const date = document.createElement("p");
        date.id = "date"

        mainContentContainer.append(weatherIcon, weatherName, currentTemp, date)
    }

    function validateForm() {
        const location = document.querySelector("#form-location")

        if (location.checkValidity() == false) {
            location.setCustomValidity("Please enter a location") 
            location.reportValidity()
            return;
        }

        location.setCustomValidity("")
        return location.value
    }

    return { 
        render
    }
})()
