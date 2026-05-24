import "./WeatherApp.css";
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";


export default function WeatherApp(){
    const [weatherInfo , setWeatherInfo] = useState({
        city : "pune",
        feelsLike : 32.44,
        humidity : 34 , 
        temp : 32.86,
        tempMAX : 32.86,
        tempMIN : 32.86,
        weather : "broken clouds"
    });

    const updateInfo = (newInfo) =>{
        setWeatherInfo(newInfo);
    }

    return(
        <div className="WeatherApp">
            <h1>Weather App By Me</h1>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    );
}