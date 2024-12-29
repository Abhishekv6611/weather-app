const WeatherCard = ( {weatherData} ) => {
    if (!weatherData) {
      return <p className="text-center text-white">No weather data available</p>;
    }
  
    const {
      name,
      main: { temp, feels_like, humidity, pressure } = {},
      weather = [],
      wind: { speed } = {},
    } = weatherData;
  
    return (
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-md mx-auto mt-6">
        <h2 className="text-2xl font-bold mb-4">{name || "Unknown Location"}</h2>
        {weather.length > 0 && (
          <div className="flex items-center mb-4">
            <img
              src={`http://openweathermap.org/img/wn/${weather[0]?.icon}@2x.png`}
              alt={weather[0]?.description || "No Description"}
              className="w-16 h-16"
            />
            <p className="text-lg capitalize ml-4">{weather[0]?.description}</p>
          </div>
        )}
        <p className="text-xl font-semibold">Temperature: {temp || "--"}°C</p>
        <p>Feels like: {feels_like || "--"}°C</p>
        <p>Humidity: {humidity || "--"}%</p>
        <p>Pressure: {pressure || "--"} hPa</p>
        <p>Wind Speed: {speed || "--"} m/s</p>
      </div>
    );
  };
  
  export default WeatherCard;
  