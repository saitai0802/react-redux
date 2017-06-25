import React, { Component } from "react";

// google.maps.Map is a object in https://maps.googleapis.com/maps/api/js in index.js
class GoogleMap extends Component {

  // A live cycle method, call right after the component has placed to the screen.
  componentDidMount() { 
    new google.maps.Map(this.refs.map, {
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      }
    });
  }

  // ref system: Create a direct reference to HTML element to a page
  // for ReactJS to use "this.refs.map" to control this element
  // Which meanr like jQuery   google.maps.Map($('div[ref="map"]'), xxxx);
  render() {
    return <div ref="map" />;
  }
}

export default GoogleMap;
