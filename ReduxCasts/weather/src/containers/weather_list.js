import React, { Component } from "react";
import { connect } from "react-redux";
// Version 1: import { Spacklines, SparkinesLine } from from "react-sparklines"
// Version 2: Create a sepreate components - Chart
import Chart from "../components/chart";
import GoogleMap from "../components/google_map";

class WeatherList extends Component {

  //  Every item of this.props.weather is called cityData. Check render() function
  renderWeather(cityData) {
    const name = cityData.city.name;
    // If you wanna change the unit you can use this sytnax
    // const temps = _.map(cityData.list.map(weather => weather.main.temp), (temp) => temp-273 );
    const temps = cityData.list.map(weather => weather.main.temp);
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const humidities = cityData.list.map(weather => weather.main.humidity);
    const { lon, lat } = cityData.city.coord;
    // This code means: lon = cityData.city.coord.lon; lat = cityData.city.coord.lat;

// Sparklines generate a chart and we need to put a flatten array to the attribute!
// <Sparklines data={[5, 10, 5, 20, 8, 15]} limit={5} width={100} height={20} margin={5}/></Sparklines>

    return (
      <tr key={name}>
        <td><GoogleMap lon={lon} lat={lat} /></td>
        <td><Chart data={temps} color="orange" units="K" /></td>
        <td><Chart data={pressures} color="green" units="hPa" /></td>
        <td><Chart data={humidities} color="black" units="%" /></td>
      </tr>
    );
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (K)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

/*
version 1: Because we added combineReducers to reducers/index.js
const rootReducer = combineReducers({
  weather: WeatherReducer
});
So the whole state knows weather object

function mapStateToProps( state ) {
  return { weather:state.weather };
}
*/

// Version 2:
// mapStateToProps({ weather })  means weather = state.weather
function mapStateToProps({ weather }) {
  return { weather }; // weather == { weather: weather }
}

// connect components to mapStateToProps
export default connect(mapStateToProps)(WeatherList);
