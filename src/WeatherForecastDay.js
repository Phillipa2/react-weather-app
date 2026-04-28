import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
    function day() {
        let date = new Date(props.data.dt*1000);
        let day = date.getDay();

        let days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];

        return days[day];
    }
return (
<div>
    <div className="WeatherForecast-day">{day()}</div>
    <WeatherIcon code={props.data.weather[0].icon} size={32} />
    <div className="WeatherForecast-temp">
        <span className="WeatherForecast-temp-max">{Math.round(props.data.main.temp_max)}°</span>
        <span className="WeatherForecast-temp-min">{Math.round(props.data.main.temp_min)}°</span>
    </div>
</div>
);
}