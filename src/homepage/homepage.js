import React, {Component} from 'react';
import WeatherContext from '../weatherContext';

class Homepage extends Component {

    static contextType = WeatherContext

    render() {
        // console.log(this.context)
        return (
        <section className="homepage">
            <h1>Hello from Homepage</h1>

            <div className="error">
                <p>{this.context.error}</p>
            </div>
        </section>
        )
    }

}

export default Homepage
