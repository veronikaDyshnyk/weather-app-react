import React, {useEffect, useState} from 'react';
import WeatherComponent from "./components/WeatherComponent";
import './App.css';

function App() {

    const apiKey = "4631b8e3f2231a4b4679e2aa1c4aadb1&units";
    const [data, setData] = useState([]);
    const [cityName, setCityName] = useState("");

    const fetchData = (event) => {
        if (event.key === "Enter"){
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}`)
                .then(value => value.json())
                .then(value => {
                    setData(value);
                    console.log(value);
                    setCityName("");
                });
        }

    }


    return (
        <div className="container">
            <input
                typeof="text"
                className="input"
                placeholder="enter city"
                onChange={event => setCityName(event.target.value)}
                value={cityName}
                onKeyDown={fetchData}
            />

            {typeof data.main === 'undefined' ? (
                <div>
                    <p>
                        welcome, please enter city to get the weather.
                    </p>
                </div>
            ) : (
                <div className= "weather-data">
                    <WeatherComponent key={data.id} data={data} />
                </div>
            )}

            {data.cod === "404" ? (
                <p>City not found</p>
            ): (
                <></>
            )}


        </div>
    );
}

export default App;
