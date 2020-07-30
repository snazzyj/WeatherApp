import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import CurrTemp from './currTemp/currTemp';
import FiveDayTemp from './fiveDayTemp/fiveDayTemp';

describe('App Component', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(
        <BrowserRouter>
            <App />
        </BrowserRouter>, 
        div);
        ReactDOM.unmountComponentAtNode(div)
    })
})

describe('Current Temp Component', () => {
    it('renders the data', () => {
        const div = document.createElement('div');
        const weather = {
            "coord": {
                "lon": -84.13,
                "lat": 42.05
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ],
            "base": "stations",
            "main": {
                "temp": 79.59,
                "feels_like": 81,
                "temp_min": 79,
                "temp_max": 80.01,
                "pressure": 1013,
                "humidity": 57
            },
            "visibility": 10000,
            "wind": {
                "speed": 5.41,
                "deg": 32
            },
            "clouds": {
                "all": 97
            },
            "dt": 1596132474,
            "sys": {
                "type": 3,
                "id": 2008693,
                "country": "US",
                "sunrise": 1596104897,
                "sunset": 1596157043
            },
            "timezone": -14400,
            "id": 4987064,
            "name": "Brooklyn",
            "cod": 200
        }
        jest.spyOn(global, "fetch").mockImplementation(() => 
            Promise.resolve({
                json: () => Promise.resolve(weather)
            }))
        const coords = {
            lat:42.0527637,
            lon:-84.1261358
        }
        ReactDOM.render(
            <BrowserRouter>
                <App coords={coords}>
                    <CurrTemp />
                </App>
            </BrowserRouter>, 
            div);
            ReactDOM.unmountComponentAtNode(div)
    })
})

describe('Five Day Forecast', () => {
    it('Renders the data without crashing', () => {
        const weather = {
            "cod": "200",
            "message": 0,
            "cnt": 40,
            "list": [
            {
            "dt": 1596142800,
            "main": {
            "temp": 78.12,
            "feels_like": 77.97,
            "temp_min": 76.57,
            "temp_max": 78.12,
            "pressure": 1013,
            "sea_level": 1012,
            "grnd_level": 979,
            "humidity": 59,
            "temp_kf": 0.86
            },
            "weather": [
            {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04d"
            }
            ],
            "clouds": {
            "all": 94
            },
            "wind": {
            "speed": 7.85,
            "deg": 16
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
            "pod": "d"
            },
            "dt_txt": "2020-07-30 21:00:00"
            },
            {
            "dt": 1596153600,
            "main": {
            "temp": 72.63,
            "feels_like": 73.83,
            "temp_min": 70.72,
            "temp_max": 72.63,
            "pressure": 1012,
            "sea_level": 1012,
            "grnd_level": 978,
            "humidity": 72,
            "temp_kf": 1.06
            },
            "weather": [
            {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04d"
            }
            ],
            "clouds": {
            "all": 92
            },
            "wind": {
            "speed": 5.79,
            "deg": 21
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
            "pod": "d"
            },
            "dt_txt": "2020-07-31 00:00:00"
            },
            {
            "dt": 1596164400,
            "main": {
            "temp": 64.53,
            "feels_like": 65.01,
            "temp_min": 63.5,
            "temp_max": 64.53,
            "pressure": 1014,
            "sea_level": 1014,
            "grnd_level": 979,
            "humidity": 83,
            "temp_kf": 0.57
            },
            "weather": [
            {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04n"
            }
            ],
            "clouds": {
            "all": 100
            },
            "wind": {
            "speed": 4.45,
            "deg": 53
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
            "pod": "n"
            },
            "dt_txt": "2020-07-31 03:00:00"
            },
            {
            "dt": 1596175200,
            "main": {
            "temp": 60.78,
            "feels_like": 60.19,
            "temp_min": 60.64,
            "temp_max": 60.78,
            "pressure": 1013,
            "sea_level": 1013,
            "grnd_level": 979,
            "humidity": 83,
            "temp_kf": 0.08
            },
            "weather": [
            {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04n"
            }
            ],
            "clouds": {
            "all": 86
            },
            "wind": {
            "speed": 4.14,
            "deg": 51
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
            "pod": "n"
            },
            "dt_txt": "2020-07-31 06:00:00"
            },
            {
            "dt": 1596186000,
            "main": {
            "temp": 59.11,
            "feels_like": 57.58,
            "temp_min": 59.11,
            "temp_max": 59.11,
            "pressure": 1013,
            "sea_level": 1013,
            "grnd_level": 978,
            "humidity": 86,
            "temp_kf": 0
            },
            "weather": [
            {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04n"
            }
            ],
            "clouds": {
            "all": 67
            },
            "wind": {
            "speed": 5.44,
            "deg": 16
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
            "pod": "n"
            },
            "dt_txt": "2020-07-31 09:00:00"
            },
            {
            "dt": 1596196800,
            "main": {
            "temp": 60.98,
            "feels_like": 59.65,
            "temp_min": 60.98,
            "temp_max": 60.98,
            "pressure": 1014,
            "sea_level": 1014,
            "grnd_level": 979,
            "humidity": 85,
            "temp_kf": 0
            },
            "weather": [
            {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04d"
            }
            ],
            "clouds": {
            "all": 57
            },
            "wind": {
            "speed": 5.95,
            "deg": 23
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
            "pod": "d"
            },
            "dt_txt": "2020-07-31 12:00:00"
            },
            {
            "dt": 1596207600,
            "main": {
            "temp": 70.66,
            "feels_like": 69.66,
            "temp_min": 70.66,
            "temp_max": 70.66,
            "pressure": 1014,
            "sea_level": 1014,
            "grnd_level": 980,
            "humidity": 70,
            "temp_kf": 0
            },
            "weather": [
            {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04d"
            }
            ],
            "clouds": {
            "all": 77
            },
            "wind": {
            "speed": 7.87,
            "deg": 47
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
            "pod": "d"
            },
            "dt_txt": "2020-07-31 15:00:00"
            },
            {
            "dt": 1596218400,
            "main": {
            "temp": 75.85,
            "feels_like": 74.71,
            "temp_min": 75.85,
            "temp_max": 75.85,
            "pressure": 1013,
            "sea_level": 1013,
            "grnd_level": 980,
            "humidity": 57,
            "temp_kf": 0
            },
            "weather": [
            {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04d"
            }
            ],
            "clouds": {
            "all": 71
            },
            "wind": {
            "speed": 7.49,
            "deg": 37
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
            "pod": "d"
            },
            "dt_txt": "2020-07-31 18:00:00"
            },
            {
            "dt": 1596229200,
            "main": {
            "temp": 75.88,
            "feels_like": 75.52,
            "temp_min": 75.88,
            "temp_max": 75.88,
            "pressure": 1012,
            "sea_level": 1012,
            "grnd_level": 979,
            "humidity": 59,
            "temp_kf": 0
            },
            "weather": [
            {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04d"
            }
            ],
            "clouds": {
            "all": 100
            },
            "wind": {
            "speed": 6.8,
            "deg": 11
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
            "pod": "d"
            },
            "dt_txt": "2020-07-31 21:00:00"
            },
            {
            "dt": 1596240000,
            "main": {
            "temp": 70.2,
            "feels_like": 71.19,
            "temp_min": 70.2,
            "temp_max": 70.2,
            "pressure": 1013,
            "sea_level": 1013,
            "grnd_level": 979,
            "humidity": 76,
            "temp_kf": 0
            },
            "weather": [
            {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04d"
            }
            ],
            "clouds": {
            "all": 100
            },
            "wind": {
            "speed": 5.61,
            "deg": 16
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
            "pod": "d"
            },
            "dt_txt": "2020-08-01 00:00:00"
            },
            {
            "dt": 1596250800,
            "main": {
            "temp": 64.71,
            "feels_like": 63.61,
            "temp_min": 64.71,
            "temp_max": 64.71,
            "pressure": 1013,
            "sea_level": 1013,
            "grnd_level": 979,
            "humidity": 74,
            "temp_kf": 0
            },
            "weather": [
            {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04n"
            }
            ],
            "clouds": {
            "all": 97
            },
            "wind": {
            "speed": 5.41,
            "deg": 16
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
            "pod": "n"
            },
            "dt_txt": "2020-08-01 03:00:00"
            },
            {
            "dt": 1596261600,
            "main": {
            "temp": 62.51,
            "feels_like": 61.83,
            "temp_min": 62.51,
            "temp_max": 62.51,
            "pressure": 1013,
            "sea_level": 1013,
            "grnd_level": 978,
            "humidity": 80,
            "temp_kf": 0
            },
            "weather": [
            {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04n"
            }
            ],
            "clouds": {
            "all": 98
            },
            "wind": {
            "speed": 4.68,
            "deg": 51
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
            "pod": "n"
            },
            "dt_txt": "2020-08-01 06:00:00"
            },
            {
            "dt": 1596272400,
            "main": {
            "temp": 60.42,
            "feels_like": 60.57,
            "temp_min": 60.42,
            "temp_max": 60.42,
            "pressure": 1012,
            "sea_level": 1012,
            "grnd_level": 978,
            "humidity": 89,
            "temp_kf": 0
            },
            "weather": [
            {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04n"
            }
            ],
            "clouds": {
            "all": 89
            },
            "wind": {
            "speed": 3.76,
            "deg": 28
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
            "pod": "n"
            },
            "dt_txt": "2020-08-01 09:00:00"
            },
            {
            "dt": 1596283200,
            "main": {
            "temp": 62.89,
            "feels_like": 62.67,
            "temp_min": 62.89,
            "temp_max": 62.89,
            "pressure": 1013,
            "sea_level": 1013,
            "grnd_level": 978,
            "humidity": 85,
            "temp_kf": 0
            },
            "weather": [
            {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04d"
            }
            ],
            "clouds": {
            "all": 89
            },
            "wind": {
            "speed": 5.1,
            "deg": 20
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
            "pod": "d"
            },
            "dt_txt": "2020-08-01 12:00:00"
            },
            {
            "dt": 1596294000,
            "main": {
            "temp": 71.73,
            "feels_like": 72.52,
            "temp_min": 71.73,
            "temp_max": 71.73,
            "pressure": 1013,
            "sea_level": 1013,
            "grnd_level": 979,
            "humidity": 72,
            "temp_kf": 0
            },
            "weather": [
            {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04d"
            }
            ],
            "clouds": {
            "all": 100
            },
            "wind": {
            "speed": 5.93,
            "deg": 39
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
            "pod": "d"
            },
            "dt_txt": "2020-08-01 15:00:00"
            },
            {
            "dt": 1596304800,
            "main": {
            "temp": 76.96,
            "feels_like": 77.67,
            "temp_min": 76.96,
            "temp_max": 76.96,
            "pressure": 1012,
            "sea_level": 1012,
            "grnd_level": 978,
            "humidity": 58,
            "temp_kf": 0
            },
            "weather": [
            {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04d"
            }
            ],
            "clouds": {
            "all": 99
            },
            "wind": {
            "speed": 5.28,
            "deg": 56
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
            "pod": "d"
            },
            "dt_txt": "2020-08-01 18:00:00"
            },
            {
            "dt": 1596315600,
            "main": {
            "temp": 78.6,
            "feels_like": 79.79,
            "temp_min": 78.6,
            "temp_max": 78.6,
            "pressure": 1010,
            "sea_level": 1010,
            "grnd_level": 977,
            "humidity": 55,
            "temp_kf": 0
            },
            "weather": [
            {
            "id": 802,
            "main": "Clouds",
            "description": "scattered clouds",
            "icon": "03d"
            }
            ],
            "clouds": {
            "all": 48
            },
            "wind": {
            "speed": 4.41,
            "deg": 45
            },
            "visibility": 10000,
            "pop": 0.02,
            "sys": {
            "pod": "d"
            },
            "dt_txt": "2020-08-01 21:00:00"
            },
            {
            "dt": 1596326400,
            "main": {
            "temp": 72.37,
            "feels_like": 76.3,
            "temp_min": 72.37,
            "temp_max": 72.37,
            "pressure": 1010,
            "sea_level": 1010,
            "grnd_level": 976,
            "humidity": 79,
            "temp_kf": 0
            },
            "weather": [
            {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04d"
            }
            ],
            "clouds": {
            "all": 53
            },
            "wind": {
            "speed": 2.8,
            "deg": 94
            },
            "visibility": 10000,
            "pop": 0.02,
            "sys": {
            "pod": "d"
            },
            "dt_txt": "2020-08-02 00:00:00"
            },
            {
            "dt": 1596337200,
            "main": {
            "temp": 66.99,
            "feels_like": 70.39,
            "temp_min": 66.99,
            "temp_max": 66.99,
            "pressure": 1011,
            "sea_level": 1011,
            "grnd_level": 977,
            "humidity": 86,
            "temp_kf": 0
            },
            "weather": [
            {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04n"
            }
            ],
            "clouds": {
            "all": 64
            },
            "wind": {
            "speed": 1.61,
            "deg": 79
            },
            "visibility": 10000,
            "pop": 0.02,
            "sys": {
            "pod": "n"
            },
            "dt_txt": "2020-08-02 03:00:00"
            },
            {
            "dt": 1596348000,
            "main": {
            "temp": 66.79,
            "feels_like": 69.64,
            "temp_min": 66.79,
            "temp_max": 66.79,
            "pressure": 1010,
            "sea_level": 1010,
            "grnd_level": 976,
            "humidity": 85,
            "temp_kf": 0
            },
            "weather": [
            {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04n"
            }
            ],
            "clouds": {
            "all": 68
            },
            "wind": {
            "speed": 2.24,
            "deg": 19
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
            "pod": "n"
            },
            "dt_txt": "2020-08-02 06:00:00"
            },
            {
            "dt": 1596358800,
            "main": {
            "temp": 64.45,
            "feels_like": 65.95,
            "temp_min": 64.45,
            "temp_max": 64.45,
            "pressure": 1009,
            "sea_level": 1009,
            "grnd_level": 975,
            "humidity": 90,
            "temp_kf": 0
            },
            "weather": [
            {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04n"
            }
            ],
            "clouds": {
            "all": 56
            },
            "wind": {
            "speed": 4.14,
            "deg": 0
            },
            "visibility": 10000,
            "pop": 0.05,
            "sys": {
            "pod": "n"
            },
            "dt_txt": "2020-08-02 09:00:00"
            },
            {
            "dt": 1596369600,
            "main": {
            "temp": 64.51,
            "feels_like": 64.76,
            "temp_min": 64.51,
            "temp_max": 64.51,
            "pressure": 1010,
            "sea_level": 1010,
            "grnd_level": 976,
            "humidity": 89,
            "temp_kf": 0
            },
            "weather": [
            {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10d"
            }
            ],
            "clouds": {
            "all": 72
            },
            "wind": {
            "speed": 6.17,
            "deg": 355
            },
            "visibility": 10000,
            "pop": 0.29,
            "rain": {
            "3h": 0.27
            },
            "sys": {
            "pod": "d"
            },
            "dt_txt": "2020-08-02 12:00:00"
            },
            {
            "dt": 1596380400,
            "main": {
            "temp": 71.62,
            "feels_like": 73.04,
            "temp_min": 71.62,
            "temp_max": 71.62,
            "pressure": 1011,
            "sea_level": 1011,
            "grnd_level": 977,
            "humidity": 77,
            "temp_kf": 0
            },
            "weather": [
            {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04d"
            }
            ],
            "clouds": {
            "all": 85
            },
            "wind": {
            "speed": 6.13,
            "deg": 13
            },
            "visibility": 10000,
            "pop": 0.27,
            "sys": {
            "pod": "d"
            },
            "dt_txt": "2020-08-02 15:00:00"
            },
            {
            "dt": 1596391200,
            "main": {
            "temp": 78.08,
            "feels_like": 79.81,
            "temp_min": 78.08,
            "temp_max": 78.08,
            "pressure": 1010,
            "sea_level": 1010,
            "grnd_level": 976,
            "humidity": 58,
            "temp_kf": 0
            },
            "weather": [
            {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04d"
            }
            ],
            "clouds": {
            "all": 64
            },
            "wind": {
            "speed": 4.16,
            "deg": 25
            },
            "visibility": 10000,
            "pop": 0.33,
            "sys": {
            "pod": "d"
            },
            "dt_txt": "2020-08-02 18:00:00"
            },
            {
            "dt": 1596402000,
            "main": {
            "temp": 78.24,
            "feels_like": 78.15,
            "temp_min": 78.24,
            "temp_max": 78.24,
            "pressure": 1009,
            "sea_level": 1009,
            "grnd_level": 976,
            "humidity": 63,
            "temp_kf": 0
            },
            "weather": [
            {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10d"
            }
            ],
            "clouds": {
            "all": 45
            },
            "wind": {
            "speed": 9.24,
            "deg": 360
            },
            "visibility": 10000,
            "pop": 0.89,
            "rain": {
            "3h": 0.58
            },
            "sys": {
            "pod": "d"
            },
            "dt_txt": "2020-08-02 21:00:00"
            },
            {
            "dt": 1596412800,
            "main": {
            "temp": 71.73,
            "feels_like": 75.22,
            "temp_min": 71.73,
            "temp_max": 71.73,
            "pressure": 1010,
            "sea_level": 1010,
            "grnd_level": 976,
            "humidity": 83,
            "temp_kf": 0
            },
            "weather": [
            {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10d"
            }
            ],
            "clouds": {
            "all": 27
            },
            "wind": {
            "speed": 4.21,
            "deg": 61
            },
            "visibility": 10000,
            "pop": 0.87,
            "rain": {
            "3h": 1.18
            },
            "sys": {
            "pod": "d"
            },
            "dt_txt": "2020-08-03 00:00:00"
            },
            {
            "dt": 1596423600,
            "main": {
            "temp": 64.67,
            "feels_like": 67.06,
            "temp_min": 64.67,
            "temp_max": 64.67,
            "pressure": 1012,
            "sea_level": 1012,
            "grnd_level": 978,
            "humidity": 86,
            "temp_kf": 0
            },
            "weather": [
            {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
            }
            ],
            "clouds": {
            "all": 0
            },
            "wind": {
            "speed": 1.81,
            "deg": 346
            },
            "visibility": 10000,
            "pop": 0.29,
            "sys": {
            "pod": "n"
            },
            "dt_txt": "2020-08-03 03:00:00"
            },
            {
            "dt": 1596434400,
            "main": {
            "temp": 62.58,
            "feels_like": 63.52,
            "temp_min": 62.58,
            "temp_max": 62.58,
            "pressure": 1012,
            "sea_level": 1012,
            "grnd_level": 978,
            "humidity": 90,
            "temp_kf": 0
            },
            "weather": [
            {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
            }
            ],
            "clouds": {
            "all": 0
            },
            "wind": {
            "speed": 3.89,
            "deg": 350
            },
            "visibility": 10000,
            "pop": 0.21,
            "sys": {
            "pod": "n"
            },
            "dt_txt": "2020-08-03 06:00:00"
            },
            {
            "dt": 1596445200,
            "main": {
            "temp": 61.75,
            "feels_like": 62.65,
            "temp_min": 61.75,
            "temp_max": 61.75,
            "pressure": 1013,
            "sea_level": 1013,
            "grnd_level": 978,
            "humidity": 92,
            "temp_kf": 0
            },
            "weather": [
            {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04n"
            }
            ],
            "clouds": {
            "all": 57
            },
            "wind": {
            "speed": 3.83,
            "deg": 17
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
            "pod": "n"
            },
            "dt_txt": "2020-08-03 09:00:00"
            },
            {
            "dt": 1596456000,
            "main": {
            "temp": 62.33,
            "feels_like": 62.83,
            "temp_min": 62.33,
            "temp_max": 62.33,
            "pressure": 1015,
            "sea_level": 1015,
            "grnd_level": 980,
            "humidity": 93,
            "temp_kf": 0
            },
            "weather": [
            {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10d"
            }
            ],
            "clouds": {
            "all": 74
            },
            "wind": {
            "speed": 5.1,
            "deg": 17
            },
            "visibility": 10000,
            "pop": 0.32,
            "rain": {
            "3h": 0.58
            },
            "sys": {
            "pod": "d"
            },
            "dt_txt": "2020-08-03 12:00:00"
            },
            {
            "dt": 1596466800,
            "main": {
            "temp": 70.02,
            "feels_like": 72.23,
            "temp_min": 70.02,
            "temp_max": 70.02,
            "pressure": 1016,
            "sea_level": 1016,
            "grnd_level": 981,
            "humidity": 84,
            "temp_kf": 0
            },
            "weather": [
            {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10d"
            }
            ],
            "clouds": {
            "all": 90
            },
            "wind": {
            "speed": 5.41,
            "deg": 33
            },
            "visibility": 7552,
            "pop": 0.82,
            "rain": {
            "3h": 1.88
            },
            "sys": {
            "pod": "d"
            },
            "dt_txt": "2020-08-03 15:00:00"
            },
            {
            "dt": 1596477600,
            "main": {
            "temp": 72.88,
            "feels_like": 73.94,
            "temp_min": 72.88,
            "temp_max": 72.88,
            "pressure": 1016,
            "sea_level": 1016,
            "grnd_level": 982,
            "humidity": 81,
            "temp_kf": 0
            },
            "weather": [
            {
            "id": 501,
            "main": "Rain",
            "description": "moderate rain",
            "icon": "10d"
            }
            ],
            "clouds": {
            "all": 95
            },
            "wind": {
            "speed": 8.86,
            "deg": 21
            },
            "visibility": 10000,
            "pop": 0.86,
            "rain": {
            "3h": 3.67
            },
            "sys": {
            "pod": "d"
            },
            "dt_txt": "2020-08-03 18:00:00"
            },
            {
            "dt": 1596488400,
            "main": {
            "temp": 71.94,
            "feels_like": 71.53,
            "temp_min": 71.94,
            "temp_max": 71.94,
            "pressure": 1016,
            "sea_level": 1016,
            "grnd_level": 981,
            "humidity": 79,
            "temp_kf": 0
            },
            "weather": [
            {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10d"
            }
            ],
            "clouds": {
            "all": 100
            },
            "wind": {
            "speed": 10.18,
            "deg": 31
            },
            "visibility": 10000,
            "pop": 0.88,
            "rain": {
            "3h": 2.18
            },
            "sys": {
            "pod": "d"
            },
            "dt_txt": "2020-08-03 21:00:00"
            },
            {
            "dt": 1596499200,
            "main": {
            "temp": 67.89,
            "feels_like": 68.31,
            "temp_min": 67.89,
            "temp_max": 67.89,
            "pressure": 1016,
            "sea_level": 1016,
            "grnd_level": 982,
            "humidity": 87,
            "temp_kf": 0
            },
            "weather": [
            {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10d"
            }
            ],
            "clouds": {
            "all": 100
            },
            "wind": {
            "speed": 7.81,
            "deg": 43
            },
            "visibility": 10000,
            "pop": 0.8,
            "rain": {
            "3h": 1.06
            },
            "sys": {
            "pod": "d"
            },
            "dt_txt": "2020-08-04 00:00:00"
            },
            {
            "dt": 1596510000,
            "main": {
            "temp": 59.09,
            "feels_like": 55.87,
            "temp_min": 59.09,
            "temp_max": 59.09,
            "pressure": 1018,
            "sea_level": 1018,
            "grnd_level": 983,
            "humidity": 82,
            "temp_kf": 0
            },
            "weather": [
            {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04n"
            }
            ],
            "clouds": {
            "all": 87
            },
            "wind": {
            "speed": 7.7,
            "deg": 45
            },
            "visibility": 10000,
            "pop": 0.1,
            "sys": {
            "pod": "n"
            },
            "dt_txt": "2020-08-04 03:00:00"
            },
            {
            "dt": 1596520800,
            "main": {
            "temp": 54.81,
            "feels_like": 50.02,
            "temp_min": 54.81,
            "temp_max": 54.81,
            "pressure": 1018,
            "sea_level": 1018,
            "grnd_level": 983,
            "humidity": 75,
            "temp_kf": 0
            },
            "weather": [
            {
            "id": 802,
            "main": "Clouds",
            "description": "scattered clouds",
            "icon": "03n"
            }
            ],
            "clouds": {
            "all": 50
            },
            "wind": {
            "speed": 7.29,
            "deg": 31
            },
            "visibility": 10000,
            "pop": 0.06,
            "sys": {
            "pod": "n"
            },
            "dt_txt": "2020-08-04 06:00:00"
            },
            {
            "dt": 1596531600,
            "main": {
            "temp": 53.94,
            "feels_like": 49.32,
            "temp_min": 53.94,
            "temp_max": 53.94,
            "pressure": 1019,
            "sea_level": 1019,
            "grnd_level": 984,
            "humidity": 80,
            "temp_kf": 0
            },
            "weather": [
            {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04n"
            }
            ],
            "clouds": {
            "all": 90
            },
            "wind": {
            "speed": 7.38,
            "deg": 32
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
            "pod": "n"
            },
            "dt_txt": "2020-08-04 09:00:00"
            },
            {
            "dt": 1596542400,
            "main": {
            "temp": 56.52,
            "feels_like": 52.92,
            "temp_min": 56.52,
            "temp_max": 56.52,
            "pressure": 1020,
            "sea_level": 1020,
            "grnd_level": 985,
            "humidity": 82,
            "temp_kf": 0
            },
            "weather": [
            {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04d"
            }
            ],
            "clouds": {
            "all": 89
            },
            "wind": {
            "speed": 7.07,
            "deg": 31
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
            "pod": "d"
            },
            "dt_txt": "2020-08-04 12:00:00"
            },
            {
            "dt": 1596553200,
            "main": {
            "temp": 66.61,
            "feels_like": 63.28,
            "temp_min": 66.61,
            "temp_max": 66.61,
            "pressure": 1021,
            "sea_level": 1021,
            "grnd_level": 986,
            "humidity": 66,
            "temp_kf": 0
            },
            "weather": [
            {
            "id": 802,
            "main": "Clouds",
            "description": "scattered clouds",
            "icon": "03d"
            }
            ],
            "clouds": {
            "all": 45
            },
            "wind": {
            "speed": 8.61,
            "deg": 53
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
            "pod": "d"
            },
            "dt_txt": "2020-08-04 15:00:00"
            },
            {
            "dt": 1596564000,
            "main": {
            "temp": 72.03,
            "feels_like": 68.86,
            "temp_min": 72.03,
            "temp_max": 72.03,
            "pressure": 1021,
            "sea_level": 1021,
            "grnd_level": 987,
            "humidity": 56,
            "temp_kf": 0
            },
            "weather": [
            {
            "id": 801,
            "main": "Clouds",
            "description": "few clouds",
            "icon": "02d"
            }
            ],
            "clouds": {
            "all": 22
            },
            "wind": {
            "speed": 8.63,
            "deg": 54
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
            "pod": "d"
            },
            "dt_txt": "2020-08-04 18:00:00"
            }
            ],
            "city": {
            "id": 4987064,
            "name": "Brooklyn",
            "coord": {
            "lat": 42.1059,
            "lon": -84.2483
            },
            "country": "US",
            "population": 1206,
            "timezone": -14400,
            "sunrise": 1596104917,
            "sunset": 1596157080
            }
            }
        const wrapper = renderer.create(<FiveDayTemp />)
        const inst = wrapper.getInstance();
        expect(inst.convertToSimpleList(weather))
    })
})