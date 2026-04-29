import React, { useState } from "react";
import WeatherForecastDay from "./WeatherForecastDay";
import axios from "axios";

import "./WeatherForecast.css";

export default function WeatherForecast(props) {
let [loaded, setLoaded] = useState(false);
let [forecast, setForecast] = useState(null);

function handleResponse(response) {
let dailyData = response.data.list.filter(item => item.dt_txt.includes("12:00:00"));

let sixDays = [response.data.list[0], ...dailyData];
setForecast(sixDays);
setLoaded(true);
}

if (loaded) {
return (
<div className="WeatherForecast">
    <div className="row">
        {forecast.filter(function(dailyForecast, index) {
            return index < 6;
        })
        .map(function(dailyForecast, index) {
                 return (
                <div className="col" key={index}>
                    <WeatherForecastDay data={dailyForecast} />
                </div>
            );
    })}
</div>
</div>
);
} else {
let apiKey = "25fb3dce5bdd0825104d2cf9360c6708";
let longitude = props.coordinates.lon;
let latitude = props.coordinates.lat;
let apiUrl =
`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(handleResponse);
return "Loading...";
}

}