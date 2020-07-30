import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import WeatherContext from '../weatherContext';

class Homepage extends Component {

    static contextType = WeatherContext

    render() {
        return (
        <section className="homepage">
            <Link to="/current" className="currentBox">Get Current Temp</Link>
            <Link to="/fiveday" className="fiveDayBox">Get Five Day Forecast</Link>

            <div className="error">
                <p>{this.context.error}</p>
            </div>
        </section>
        )
    }

}

export default Homepage
