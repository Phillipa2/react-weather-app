import React, { useState, useEffect } from "react";
import WeatherForecastDay from "./WeatherForecastDay";
import axios from "axios";

import "./WeatherForecast.css";

export default function WeatherForecast(props) {
let [loaded, setLoaded] = useState(false);
let [forecast, setForecast] = useState(null);

useEffect(() => {
    setLoaded(false);
    let apiKey = "25fb3dce5bdd0825104d2cf9360c6708";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
}, [props.coordinates]);

function handleResponse(response) {
let allEntries = response.data.list;

let grouped = {};
    allEntries.forEach(item => {
        let date = item.dt_txt.split(" ")[0]; 
        if (!grouped[date]) {
            grouped[date] = [];
        }
        grouped[date].push(item.main.temp);
    });

 let dailyData = Object.keys(grouped).map(date => {
        let temps = grouped[date];
        return {
            date: date,
            temp_max: Math.max(...temps), 
            temp_min: Math.min(...temps), 
            icon: allEntries.find(item =>
                item.dt_txt.includes(date) &&
                item.dt_txt.includes("12:00:00")
            )?.weather[0]?.icon || allEntries[0].weather[0].icon
        };
    });

setForecast(dailyData);
setLoaded(true);
}

if (loaded) {
return (
<div className="WeatherForecast">
    <div className="row">
        {forecast
        .filter(function(dailyForecast, index) {
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
return "Loading...";
}

}