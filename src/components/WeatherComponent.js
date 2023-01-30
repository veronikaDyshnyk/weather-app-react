// function UserComponent(props) {
//     let {item: {id,name,email}}= props
//     return (
//         <div>
//
//             <h2>{name} {id}</h2>
//             <p>{email}</p>
//         </div>
//     );
// }
//
// export default UserComponent;

//'https://jsonplaceholder.typicode.com/users'


function WeatherComponent({data}) {
    return (
        <div>
            <p className="city">{data.name}</p>
            <p>{Math.round(data.main.temp)} °C</p>
            <p>{data.weather[0].main}</p>
            <p> Wind speed {data.wind.speed} km</p>
            <p>Humidity {data.main.humidity} %</p>
        </div>
    );
}

export default WeatherComponent;
