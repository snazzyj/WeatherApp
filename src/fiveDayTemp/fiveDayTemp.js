import React, { Component } from 'react';
import WeatherContext from '../weatherContext';
const API_URL = 'https://api.openweathermap.org/data/2.5/forecast?';
const ICON_URL = 'http://openweathermap.org/img/wn/';

class FiveDayTemp extends Component {

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
        console.log(searchUrl)
        fetch(searchUrl)
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
            })
            .then(weatherDataResp => {
                console.log(weatherDataResp)
                this.setState({
                    weatherData: this.convertToSimpleList(weatherDataResp.list)
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

    convertToSimpleList = (list) => {
        let res = {}
        for (let i = 0; i < list.length; i++) {
            let day = list[i].dt_txt.slice(0, 10)

            if (!res[day]) {
                res[day] = [list[i]]
            } else {
                res[day].push(list[i])
            }
        }        

        return res
    }
    renderIcon = (weatherArray) => {
        return weatherArray.map(weatherCond =>
           <img key={weatherCond.id} alt={weatherCond.description} src={ICON_URL + weatherCond.icon + '@2x.png'}  />
        )
    }
        

    render() {
        const { weatherData } = this.state;
        console.log(weatherData)
        // console.log(revisdedData)
        return (

            <section className="fiveDay">
                {!!weatherData && Object.keys(weatherData).map((day, index) => {
                    index += 1;
                    return (
                        <div className={day} key={index}>
                            {this.state.weatherData[day].map((hour) => {
                                return (
                                    <div key={hour.dt}>
                                        {this.renderIcon(hour.weather)}
                                        <p>{hour.main.temp}</p>
                                        <p>High: {hour.main.temp_max}</p>
                                        <p>Low: {hour.main.temp_min}</p>
                                        
                                    </div>
                                )
                            })}
                        </div>
                    )
                })}
            </section>
        )
    }

}

export default FiveDayTemp