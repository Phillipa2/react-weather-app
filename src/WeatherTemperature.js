import React, { useState } from "react";

export default function WeatherTemperature(props) {
const [unit, setUnit] = useState("celsius");

function showFahreinheit(event) {
    event.preventDefault();
    setUnit("fahreinheit");
}
function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
}
function fahreinheit() {
    return (props.celsius * 9)/5 + 32; 
}

if (unit === "celsius") {
return (
<div className="WeatherTemperature">
    <span className="temperature">{Math.round(props.celsius)}</span>
    <span className="unit">℃ |{" "}<a href="/" onClick={showFahreinheit}>℉</a></span>
</div>
);
} else {
    return (
<div className="WeatherTemperature">
    <span className="temperature">{Math.round(fahreinheit())}</span>
    <span className="unit">
        <a href="/" onClick={showCelsius}>
        ℃</a>{" "}| ℉</span>
</div>
);
}
}