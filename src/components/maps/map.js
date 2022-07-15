import React from "react";
import GoogleMaps from "simple-react-google-maps";
import { Component } from "react/cjs/react.production.min";

export default class Maps extends Component {
  render() {
    return (
      <div className="container">
        <GoogleMaps
        apiKey={"AIzaSyAXwv7kOSREgOl3arAjAtEC2p96Gp4cNlI"}
          style={{ height: "250px", width: "500px" }}
          zoom={7}
          center={{
            lat: 37.2347859513708,
            lng: -115.811689253024,
          }}
          markers={[{
            lat: 37.234931163515604,
  lng: -115.81107770936893,
          }]}
        />
      </div>
    );
  }
}
