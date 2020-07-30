import React, { Component, Fragment } from 'react';
import WeatherContext from '../weatherContext';
const API_URL = 'https://api.openweathermap.org/data/2.5/weather?';
const ICON_URL = 'http://openweathermap.org/img/wn/';


class CurrTemp extends Component {
    
    static contextType = WeatherContext;
    
    constructor(props) {
        super(props);
        this.state = {
            weatherData: null
        }
    }
    
    componentDidMount() {
        const { API_KEY, coords } = this.context;
        const params = {
            lat: coords.lat,
            lon: coords.lon,
            units: 'imperial',
            mode: 'json',
            appid: API_KEY
        }
        const queryString = this.generateQueryString(params);
        const searchUrl = API_URL + queryString
        fetch(searchUrl)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
        })
        .then(weatherDataResp => {
            this.setState({
                weatherData: weatherDataResp
            })
        })
        .catch(error => {
                alert(error)
            })
        }
        
        generateQueryString = (params) => {
            
            const queryItems = Object.keys(params)
            .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`);
            return queryItems.join('&');
            
        }
        
        displayIcon = (weatherArray) => {
            return weatherArray.map(weatherCond =>
                <img key={weatherCond.id} alt={weatherCond.description} src={ICON_URL + weatherCond.icon + '@2x.png'}  />
            )
        }

        render() {
        const { weatherData } = this.state;
        return (
            <section className="currentTemp">
                {!!weatherData && (
                    <div className="currTemp">
                        <h1>{weatherData.name}</h1>
                        <p>
                            {this.displayIcon(weatherData.weather)}
                            <span>
                                {Math.round(weatherData.main.temp)} F
                            </span>
                        </p>
                        <p>
                            High: {Math.round(weatherData.main.temp_max)} F             
                        </p>
                        <p>
                            Low: {Math.round(weatherData.main.temp_min)} F
                        </p>
                    </div>
                )}
            </section>
        )
    }

}

export default CurrTemp