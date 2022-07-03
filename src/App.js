import './App.css';
import { useEffect, useState } from 'react';
import background from './icons/background.jpg'

const axios = require('axios')
 

function App() {
const [cityname, setCityname] = useState('madrid')
const [city, setCity] = useState(null)
const [country, setCountry] = useState(null)
const [region, setRegion] = useState(null)
const [time, setTime] = useState(null)
const [temperature, setTemperature] = useState(null)
const [weatherdescription, setWeatherdescription] = useState(null)
const [humidity, setHumidity] = useState(null)

  let api = "http://api.weatherstack.com/current?access_key=ff5c2d1c0f80f17921c879b46028d5fa&query="+cityname.toString()


  useEffect(()=>{

    if(cityname!=""){
      axios.get(api).then((res)=>{


        setCity(res.data.location.name)
        setCountry(res.data.location.country)
        setRegion(res.data.location.region)
        setTime(res.data.location.localtime)
        setTemperature(res.data.current.temperature)
        setWeatherdescription(res.data.current.weather_descriptions)
        setHumidity(res.data.current.humidity)
      
        
        
            })
    }
    

  },[api])

  
const handleKeyDown = function(e) {
  if (e.key === 'Enter') {
    setCityname(e.target.value)
  }
}

const update = ()=>{
  setCityname()
}

  return (
<div id='weather' >


<h1 id='city' >{city}</h1>
<div id='text' >
<h1 id='country' >Country: {country}</h1>
<h1>Region: {region}</h1>
<h1>Time: {time}</h1>
<h1 id='temperature' >{temperature}</h1>
<h1 id='temperature2' >ºC</h1>
<h1>{weatherdescription}</h1>
<h1 id='humidity' >Humidity: {humidity} % </h1>
</div>
<img id='background' src={background} />


<input autocomplete="off" onKeyDown={handleKeyDown} type="search" placeholder="Search here..."  id='input' />

<button id='button' onClick={update} type="submit">Search</button>


</div>
    
   
  );

}

export default App;
