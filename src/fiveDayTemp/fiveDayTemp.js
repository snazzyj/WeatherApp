import React, { Component } from 'react';
import moment from 'moment';
import WeatherContext from '../weatherContext';
const API_URL = 'https://api.openweathermap.org/data/2.5/forecast?';
const ICON_URL = 'http://openweathermap.org/img/wn/';

class FiveDayTemp extends Component {

    static contextType = WeatherContext;

    constructor(props) {
        super(props);
        this.state = {
            weatherData: null,
            isHidden: true,

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
                //Convert the weather list down to a few elements instead of 40 items
                if(weatherDataResp) {
                    this.setState({
                        weatherData: this.convertToSimpleList(weatherDataResp.list)
                    })
                }
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

    //Organizes the original array list
    //By putting each matching day into a new Obj array
    //Checks to see if it exists, if it does, it gets pushed, else we create a new index
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

    //Toggle button to show or hide the hours for each day
    showHours = () => {
        const {isHidden} = this.state
        this.setState({
            isHidden: !isHidden
        })
    }
        

    render() {
        const { weatherData } = this.state;
        return (

            <section className="fiveDay">
                {!!weatherData && Object.keys(weatherData).map((day, index) => {
                    index += 1;
                    return (
                        <div className={day} key={index}>
                            {this.state.weatherData[day].map((hour, index) => {
                                let date = moment(hour.dt_txt).format('MMM DD, h a');
                                
                                return (
                                    <div key={hour.dt} className={ index > 0 ? this.state.isHidden ? "hidden" : "tempInfo tempBoxStyle" : "tempInfo tempBoxStyle" } >
                                        {date}
                                        {this.renderIcon(hour.weather)}
                                        <p>{Math.round(hour.main.temp)}F</p>
                                        <p>High: {Math.round(hour.main.temp_max)}F</p>
                                        <p>Low: {Math.round(hour.main.temp_min)}F</p>   
                                        { index > 0 ? null : <button onClick={this.showHours}>Show Hourly</button> }
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