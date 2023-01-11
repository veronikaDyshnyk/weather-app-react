import React, {useEffect, useState} from 'react';
import './App.css';
import Weather from "./components/Weather";



function App() {

    const [data, setData] = useState([]);
    const [cityName, setCityName] = useState("");
// const cityName = "lviv";

    // useEffect(() => {
    //     const fetchData  = () => {
    //         // navigator.geolocation.getCurrentPosition(function(position) {
    //         //     setLat(position.coords.latitude);
    //         //     setLong(position.coords.longitude);
    //         // });
    //         fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=4631b8e3f2231a4b4679e2aa1c4aadb1`)
    //             .then(res => res.json())
    //             .then(data => {
    //                 setData(data)
    //                 console.log(data);
    //             });
    //     }
    //     fetchData();
    // }, [])

    const fetchData  = (event) => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=4631b8e3f2231a4b4679e2aa1c4aadb1`)
            .then(res => res.json())
            .then(data => {
                setData(data)
                console.log(data);
            });
    }

    return (
            // <div className="app">
            //     {(typeof data.main != 'undefined') ? (
            //         <Weather weatherData={data}/>
            //     ) : (
            //         <div></div>
            //     )}
            //
            // </div>

        <div>
            <input
                typeof="text"
                className="input"
                placeholder="enter city"
                onChange={event => setCityName(event.target.value)}
                value={cityName}

                onKeyDown={fetchData}
            />
        </div>

        );
    }

    export default App;
