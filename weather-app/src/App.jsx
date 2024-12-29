import { useState, useEffect } from "react";
import Header from "./components/Header";
import WeatherCard from "./components/WeatherCard";

const App = () => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    // Simulating an API call
    const apiData = {
      coord: { lon: 76.3428, lat: 10.0166 },
      weather: [{ id: 721, main: "Haze", description: "haze", icon: "50n" }],
      main: {
        temp: 28.92,
        feels_like: 31.69,
        pressure: 1012,
        humidity: 65,
      },
      wind: { speed: 1.54, deg: 280 },
      name: "Kakkanad",
    };

    setWeatherData(apiData);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-400 to-purple-600 text-gray-900">
      <Header />
      <main className="py-6 ">
        {weatherData ? (
          <WeatherCard weatherData={weatherData} />
        ) : (
          <p className="text-center text-white">Loading...</p>
        )}
      </main>
    </div>
  );
};

export default App;
