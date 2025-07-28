export const weather = (function () {
  async function getWeatherData(location) {
    const date = new Date();
    const [year, month, day] = [
      date.getFullYear(),
      date.getMonth() + 1,
      date.getDate(),
    ];

    try {
      const response = await fetch(
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/${year}-${month}-${day}/?key=9RRPN6G672K5V58WQPMM97HU5`,
      );
      const responseData = await response.json();
      const data = [
        responseData.days[0].conditions,
        responseData.days[0].temp,
        responseData.days[0].datetime,
        responseData.resolvedAddress,
      ];
      console.log(responseData);
      return data;
    } catch (err) {
      console.log(err)
      return "Error"
    }
  }

  return {
    getWeatherData,
  };
})();
