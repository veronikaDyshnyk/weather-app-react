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
            <p>{data.name}</p>
            <p>{data.main.temp}</p>
            <p>{data.weather[0].main}</p>
            <p> wind speed {data.wind.speed} km</p>
        </div>
    );
}

export default WeatherComponent;
