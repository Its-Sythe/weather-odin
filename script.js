async function getWeatherData(location) {
    const date = new Date()
    const [year, month, day] = [
        date.getFullYear(),
        date.getMonth() + 1,
        date.getDate(),
    ]
    const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/${year}-${month}-${day}/?key=9RRPN6G672K5V58WQPMM97HU5`)
    const responseData = await response.json();

    return responseData.days
}

async function processData(location) {
    let data = await getWeatherData(location) 
    console.log(data)
    let dataLength = data.length;

    for (let i = 0; i < dataLength; i++) {
        console.log(data[i].temp)
    }
}

processData("nairobi")
