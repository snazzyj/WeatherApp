import React, { Component } from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import CurrTemp from './currTemp/currTemp';
import FiveDayTemp from './fiveDayTemp/fiveDayTemp';
import Homepage from './homepage/homepage';
import WeatherContext from './weatherContext';
import './App.css';
const API_KEY = `${process.env.REACT_APP_WEATHER_API_KEY}`

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      coords: {
        lat: null,
        lon: null
      },
      error: null
    }
  }

  componentDidMount() {
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.setLocation)
    } else {
      this.setState({
        error: 'Geolocation not available'
      })
    }
  }

  setLocation = (pos) => {
    const {coords} = this.state;
    coords.lat = pos.coords.latitude;
    coords.lon = pos.coords.longitude;
    this.setState({
      coords: coords
    })
  }

  render() {
    const {error, coords} = this.state;
    const contextValue = {
      API_KEY: API_KEY,
      coords: coords,
      error: error
    }

    return (
      <div className="App">
        <nav>
          <Link to="/current">Current</Link>
          <Link to="/fiveday">Five Day</Link>
        </nav>
        <WeatherContext.Provider value={contextValue}>
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/current" component={CurrTemp} />
            <Route exact path="/fiveday" component={FiveDayTemp} />
          </Switch>
        </WeatherContext.Provider>

      </div>
    );

  }

}

export default App;
