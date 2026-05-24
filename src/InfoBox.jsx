import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css"
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import SunnyIcon from '@mui/icons-material/Sunny';
import AcUnitIcon from '@mui/icons-material/AcUnit';

export default function InfoBox({ info }) {
    const INIT_URL = "https://media.istockphoto.com/id/1263079471/photo/beautiful-white-fluffy-cloud-formation-on-vivid-blue-sky-in-a-sunny-day-above-big-city-view.jpg?s=612x612&w=0&k=20&c=rFz-tbLLjfaAmDl6ixtfRUMWynIM2XLiJvz4cW3mww4="
    const HOT_URL = "https://media.istockphoto.com/id/1454028868/photo/silhouette-of-a-construction-crane-on-a-building-at-sunset.webp?a=1&b=1&s=612x612&w=0&k=20&c=kyuGiu6UzZugUOO9v865OAmaDNazY94eagHxplxP3F4="
    const COLD_URL = "https://plus.unsplash.com/premium_photo-1672115680863-9353a690495a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29sZCUyMGNpdHl8ZW58MHx8MHx8fDA%3D"
    const RAINY_URL = "https://plus.unsplash.com/premium_photo-1666700698920-d2d2bba589f8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cmFpbnklMjBjaXR5fGVufDB8fDB8fHww"
    return (
        <div>
            <div className='cardContainer'>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={info.humidity > 80 ? RAINY_URL : info.temp > 15 ? HOT_URL : COLD_URL}
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {info.humidity > 80 ? <ThunderstormIcon/> : info.temp > 15 ? <SunnyIcon/> : <AcUnitIcon/>}<br></br>
                            {info.city}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                            <div>
                                <p>Temperature = {info.temp}&deg;C </p><br></br>
                                <p>Humidity = {info.humidity}</p><br></br>
                                <p>Maximum Temperature = {info.tempMAX}&deg;C</p><br></br>
                                <p>Minimum Temperature = {info.tempMIN}&deg;C</p><br></br>
                                <p>The Weather can be Described as <i>{info.weather}</i> and Feels Like {info.feelsLike}&deg;C</p>

                            </div>
                        </Typography>
                    </CardContent>

                </Card>
            </div>
        </div>
    )
}