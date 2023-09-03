// import logo from './logo.svg';
import "./App.css";
import SearchForm from "./SearchForm";

function App() {
  let weatherInfo = {
    city: "London",
    temperature: 19,
    date: "Sunday, 10:00AM",
    description: "Cloudy",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
    humidity: 88,
    wind: 4,
    pressure: 1012,
  };

  return (
    <div className="App">
      <div className="weather-app">
        <div className="row">
          <div className="col-5">
            <h1>{weatherInfo.city}</h1>
            <p>{weatherInfo.date}</p>
          </div>
          <div className="col-7">
            <SearchForm />
          </div>
        </div>

        <div className="row overview">
          <div className="col-6">
            <ul>
              <li>Humidity : {weatherInfo.humidity}%</li>
              <li>Wind : {weatherInfo.wind}km/h</li>
              <li>Pressure : {weatherInfo.pressure}hPa</li>
            </ul>
          </div>
          <div className="col-6">
            <div className="d-flex">
              <img
                src={weatherInfo.imgUrl}
                alt={weatherInfo.description}
                id="icon"
              />
              <div>
                <strong>{weatherInfo.temperature}</strong>
                <span className="units">°C | °F</span>
              </div>
            </div>
            <h3>{weatherInfo.description}</h3>
          </div>
        </div>
      </div>
      <small>
        <a
          href="https://github.com/ChawSu-coder/Vanilla-weather-app"
          target="_blank"
          alt="github link"
          rel="noreferrer"
        >
          Open-source code
        </a>
        , by Khin Chaw Su Han, from SheCodes
      </small>
    </div>
  );
}

export default App;
