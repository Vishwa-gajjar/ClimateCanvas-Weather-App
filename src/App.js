import React, { useState } from "react";
import Axios from "axios";
import styled from "styled-components";
import City from './components/City';
import Weather from './components/Weather';
import Footer from "./components/Footer";
import Forecast from "./components/Forecast";

export const WeatherIcons = {
  "01d": "./components/images/sunny.svg",
  "01n": "./components/images/night.svg",
  "02d": "./components/images/day.svg",
  "02n": "./components/images/cloudy-night.svg",
  "03d": "./components/images/cloudy.svg",
  "03n": "./components/images/cloudy.svg",
  "04d": "./components/images/perfect-day.svg",
  "04n": "./components/images/cloudy-night.svg",
  "09d": "./components/images/rain.svg",
  "09n": "./components/images/rain-night.svg",
  "10d": "./components/images/rain.svg",
  "10n": "./components/images/rain-night.svg",
  "11d": "./components/images/storm.svg",
  "11n": "./components/images/storm.svg",
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 380px;
  padding: 20px 10px;
  margin: auto;
  border-radius: 15px;
  box-shadow: 0 3px 6px 0 #555;
  background: white;
  font-family: Montserrat;
`;

const AppLabel = styled.span`
  color: black;
  margin: 20px auto;
  font-size: 40px;
  font-weight: bold;
`;


function App() {
  const [city, updateCity] = useState();
  const [weather, updateWeather] = useState();
  const fetchWeather = async (e) => {
    e.preventDefault();
    const response = await Axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=fe4feefa8543e06d4f3c66d92c61b69c`,
    );
    updateWeather(response.data);
    
  };
  return (
    <Container>
      <AppLabel>Climate Canvas</AppLabel>
      {city && weather ? (
        <Weather weather={weather} city={city} />
      ) : (
        <City updateCity={updateCity} fetchWeather={fetchWeather} />
      )}
      <Footer />
    </Container>
  );
}

export default App;