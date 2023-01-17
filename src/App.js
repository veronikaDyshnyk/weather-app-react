import React, {useEffect, useState} from 'react';
import WeatherComponent from "./components/WeatherComponent";

function App() {

    const [data, setData] = useState([]);
    const [cityName, setCityName] = useState("");

    const fetchData = () => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=4631b8e3f2231a4b4679e2aa1c4aadb1&units=metric`)
            .then(value => value.json())
            .then(value => {
                setData(value);
                console.log(value);
            });
    }


    return (
        <div>
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
                        welcome
                    </p>
                </div>
            ) : (
                <div>
                    <WeatherComponent key={data.id} data={data} />
                </div>
            )}
        </div>
    );
}

export default App;
