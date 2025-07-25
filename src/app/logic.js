export const weather = (function(){
    async function getWeatherData(location) {
        const date = new Date()
        const [year, month, day] = [
            date.getFullYear(),
            date.getMonth() + 1,
            date.getDate(),
        ]

        const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/${year}-${month}-${day}/?key=9RRPN6G672K5V58WQPMM97HU5`)
        const responseData = await response.json()
        const days = responseData.days;

        for(let i = 0; i < days.length; i++) {
            console.log(days[i].temp)
        }
    }

    return {
        getWeatherData
    }

})()
