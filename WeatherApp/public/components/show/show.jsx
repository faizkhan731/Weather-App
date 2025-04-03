import React, { useState, useEffect } from "react";
import axios from "axios";

const Show = ({ city }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  // api key
  const API_KEY = "4fbfbc5ac3a9041fb6104a784b9d9077";

  useEffect(() => {
    const fetchWeatherData = async () => {
      if (!city) return;

      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
        );
        setWeatherData(response.data);
        setError(null);
      } catch (error) {
        console.error("Error fetching weather data:", error);
        setError("City not found. Please check your  city name.");
        setWeatherData(null);
      }
    };

    if (API_KEY.trim() !== "" && city.trim() !== "") {
      fetchWeatherData();
    } else {
      setError("Invalid API Key or City name.");
    }
  }, [city, API_KEY]);

  return (
    <div
      className="showcont"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
        width: "50%",
        margin: "20px auto",
        borderRadius: "10px",
        boxShadow: "0 0 10px rgba(0,0,0,0.1)",
      }}
    >
      <h2>Weather Details</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {weatherData ? (
        <div className="weatherDetails" style={{ textAlign: "center" }}>
          <p>
            <strong>City:</strong> {weatherData.name}
          </p>
          <p>
            <strong>Temperature:</strong> {weatherData.main.temp}°C
          </p>
          <p>
            <strong>Feels Like:</strong> {weatherData.main.feels_like}°C
          </p>
          <p>
            <strong>Description:</strong> {weatherData.weather[0].description}
          </p>
          <p>
            <strong>Humidity:</strong> {weatherData.main.humidity}%
          </p>
          <p>
            <strong>Wind Speed:</strong> {weatherData.wind.speed} m/s
          </p>
        </div>
      ) : (
        !error && <p>Loading weather data...</p>
      )}
    </div>
  );
};

export default Show;
