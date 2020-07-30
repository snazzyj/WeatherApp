import React from 'react';

const WeatherContext = React.createContext({
    API_KEY: "",
    coords: {},
    error: ""
})

export default WeatherContext