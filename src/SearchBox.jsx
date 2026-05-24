import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from 'react';

export default function SearchBox({ updateInfo }) {
    const [city, setCity] = useState("");
    const [error, setError] = useState(false);

    let API_URL = import.meta.env.VITE_WEATHER_API_URL;
    let API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

    let getWeatherInfo = async () => {
        try {
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse = await response.json();
            let result = {
                city: city,
                temp: jsonResponse.main.temp,
                tempMAX: jsonResponse.main.temp_max,
                tempMIN: jsonResponse.main.temp_min,
                humidity: jsonResponse.main.humidity,
                feelsLike: jsonResponse.main.feels_like,
                weather: jsonResponse.weather[0].description
            };
            console.log(result);
            return result;
        } catch (error) {
            throw error;
        }
    }

    const handleInput = (event) => {
        setCity(event.target.value);
    }

    const handleSubmit = async (event) => {
        try {
            event.preventDefault();
            console.log(city);
            let newInfo = await getWeatherInfo();
            updateInfo(newInfo);
            setError(false);  //removes old err
            setCity("");
        } catch (error) {
            setError(true);
        }
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <TextField id="city" label="City Name" variant="outlined" value={city} required onChange={handleInput} />
                <br></br><br></br>
                <Button variant="contained" type="submit">Search</Button>
            </form>
            {error && <p style={{ color: "red", marginTop: 10 }}>This place Doesn't Exists!!</p>}
        </div>
    )
}